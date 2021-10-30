<template>

    <div class="logIn_user">
        
        <div class="container_logIn_user">
            
            <h2>Iniciar sesión</h2>
            <form v-on:submit.prevent="processLogInUser" >
                <input type="text" v-model="user.username" placeholder="Username">
                <br>
                <input type="password" v-model="user.password" placeholder="Password">
                <br>
                <button type="submit"> login</button>
            </form>
        </div>

    </div>

</template>
<script>
import axios from 'axios';
export default {
    //quiero exportar mi archivo de LogIn
    name: "LogIn",
    data: function(){
        return {
            user: {
                username:"",
                password:""
                
            }
        }
    },
    methods: {
        processLogInUser: function(){
            
            axios.post(
                "http://localhost:8000/login/", 
                this.user,  
                {headers: {}}
                )
                .then((result) => {
                    let dataLogIn = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                        name:result.data.name,
                        

                    
                    }
                    this.$emit('completedLogIn',dataLogIn);
                })
                .catch((error) => {
                    
                    if (error.response.status == "401")
                        alert("ERROR 401: Credenciales Incorrectas.");
                    
                });
        }
    }
}
</script>

<style>

.logIn_user {
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
    .container_logIn_user {
    border: 3px solid  black;
    border-radius: 10px;
    width: 25%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    .logIn_user h2{
    color: black;
    }
    .logIn_user form{
    width: 70%;
    }
    .logIn_user input{

    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid #283747;
    background-color: white;
    border-radius: 10px;
    }
    .logIn_user button{
    width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: rgb(56, 55, 55);
    border: 1px solid #E5E7E9;
    border-radius: 10px;
    padding: 10px 25px;
    margin: 5px 0;
    }
    .logIn_user button:hover{
    color: #E5E7E9;
    background: crimson;
    border: 1px solid #283747;
    }
</style>