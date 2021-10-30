<template>
    <body>
    
        
        <div v-if="loaded" class="wrapper">
               <img src="public/images/img2.svg" class="fondo1"/>
               <img src="public/images/img2.svg" class="fondo2"/>
               <div id="container">
                   <div id="header">
                      <img src="images/fondo.svg" class="fondo"/>
                      <img src="images/logo_twezor.jpeg" class="images"/>
                      
                       <p class="text">{{name}}</p>
                       <p class="text2">26</p>
                       <p class="text3">London</p>
                      
                      
                   </div>
                   <p class="text4"><span>  {{  email}}</span></p>
                   <p class="text5"><span>{{username}}</span></p>
                   <p class="text6"><span>{{id}}</span></p>
                   
            </div>
       </div>
       
</body>
</template>


<script>
import jwt_decode from "jwt-decode";
import axios from 'axios';
export default {
    name: "Account",
    data: function(){
        return {
            name: "",
            email: "",
            balance: 0,
            username:"",
            id: "",
            loaded: false,
        }
    },
    methods: {
        getData: async function () {
            if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null) {
                this.$emit('logOut');
                return;
			}
            await this.verifyToken();
            
            let token = localStorage.getItem("token_access");
            let userId = jwt_decode(token).user_id.toString();
            
            axios.get(`http://localhost:8000/user/${userId}/`, {headers: {'Authorization': `Bearer ${token}`}})
                .then((result) => {
                    this.name = result.data.name;
                    this.email = result.data.email;	
                    this.balance = result.data.account.balance;
                    this.username = result.data.username;	
                    this.id = result.data.account.id;
                    this.loaded = true;
                    })
                .catch(() => {
                    this.$emit('logOut');
                });
        },
        verifyToken: function () {
            return axios.post("http://localhost:8000/refresh/", {refresh: localStorage.getItem("token_refresh")}, {headers: {}})
				.then((result) => {
					localStorage.setItem("token_access", result.data.access);		
				})
				.catch(() => {
					this.$emit('logOut');
				});
        }
    },
    created: async function(){
        this.getData();
    },
}
</script>


<style>
body{
   background-color: #1BA1AD;
    
}
.wrapper{
    background-color: #1BA1AD;
    height: 498px;
    width: 1500px;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -70%);
    
}


#container{
    background-color: #fff;
    height: 330px;
    width: 330px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    
}
.images{
    width:100px;
    height:100px;
    border-radius:150px;
    border:5px solid #fff;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -30%);
    
}
#header{
    background-color: #fff;
    height: 250px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow:0px 1px 0px #A9A9AA;
        
}
.fondo{
    width: 330px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    
}
.text{
    
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 18px;
    font-weight: 700;
    position: absolute;
    left: 47%;
    top: 54%;
    transform: translate(-50%, -54%);
}
span{
    font-family: 'K2D', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: black;  
}
.text2{
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #A9A9AA;
    position: absolute;
    left: 70%;
    top: 54%;
    transform: translate(-70%, -54%);
}
.text3{
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #A9A9AA;
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, 55%);
}
.text4 {
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 18px;
    font-weight: 700;
    position: absolute;
    left: 50%;
    top: 82%;
    transform: translate(-50%, -82%);
    
    
}
#container .text5{
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 18px;
    font-weight: 700;
    position: absolute;
    left: 30%;
    top: 92%;
    transform: translate(-30%, -92%);
}
.text6{
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 18px;
    font-weight: 700;
    position: absolute;
    left: 70%;
    top: 92%;
    transform: translate(-70%, -92%);
}
.fondo2{
    position: absolute;
    left: 40%;
    top: 50%;
   
}
.fondo1{
    position: absolute;
    right: 50%;
    bottom: 40%; 
}
</style>