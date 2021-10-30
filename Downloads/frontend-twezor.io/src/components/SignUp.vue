<template>

    <div class="signUp_user">
        <div class="container_signUp_user">
            <h2>Registrarse</h2>
            <!--cuando oprima el boton de registrarse se me ejecutara la funcion processSignUpUser-->
            <form v-on:submit.prevent="processSignUpUser" >
        <!--al oprimir registrarse mi v-model me captura los datos de text y me los setea en mi objeto user en la clave username-->

                <input type="text" v-model="user.username" placeholder="Username">
                
                
                <input type="password" v-model="user.password" placeholder="Password">
                
                
                <input type="text" v-model="user.name" placeholder="Name">
                

                <input type="email" v-model="user.email" placeholder="Email">
                


                <button type="submit">Registrarse</button>
            </form>
        </div>

    </div>

</template>
<script>
import axios from 'axios';
//exportar mi archivo con el nombre de SignUp.
export default {
    name: "SignUp",
    data: function(){
        return {
            //esta funcion me retornara un objeto de tipo user
            user: {
                //la clave de username tomara el valor del input username
                username: "",
                password: "",
                name: "",
                email: "",
                //mi account me pide 3 valores.
                account: {
                    //esta funcion me retorna la fecha de hoy
                    lastChangeDate: (new Date()).toJSON().toString(),
                    //por defecto dejo un balance de cero.
                    balance: 0,
                    //por defecto dejo un estado de true.
                    isActive: true
            }
        }
    }
    },
    methods: {
        processSignUpUser: function(){
            //me envia por medio de un axios mis datos registrados con el metodo post.
            axios.post(
                "http://localhost:8000/user/", 
                //me envia los datos que capture en mi objeto user a la anterior ruta.
                this.user,  
                
                {headers: {}}
                )
                //luego me retorna una respuesta o result.
                .then((result) => {
                    //me crea un json con mi username, token de acceso y token de refresh
                    let dataLogIn = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    }
                    //le envio(emito) a mi funcion padre completedLogIn los datos que capture en el formulario
                    this.$emit('completedSignUp', dataLogIn)
                })
                //si no, me captura un error
                .catch((error) => {
                    
                    if (error.response.status == "401")
                        alert("ERROR 401: Credenciales Incorrectas.");
                    
                });
        }
    }
}
</script>

<style>
.signUp_user {
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.container_signUp_user {
    border: 3px solid  black;
    border-radius: 10px;
    width: 25%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.signUp_user h2{
    color: black;
}
.signUp_user form{
    width: 60%;
    
}
.signUp_user input{
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid #283747;
    background-color: white;
    border-radius: 10px;
}
.signUp_user button{
    width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: rgb(56, 55, 55);
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0;
    border-radius: 10px;
}
.signUp_user button:hover{
    color: #E5E7E9;
    background: crimson;
    border: 1px solid #283747;
}
</style>