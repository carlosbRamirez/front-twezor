<template>
  <div id="app" class="app">
  <div class="header">
  <h1>Twezor</h1>
  <nav>
    <i class='bx bx-menu' v-on:click="loadLogIn"></i>
    <button v-if="is_auth" v-on:click="loadNotification"> <i class='bx bxs-bell'></i></button>
    <!--si le doy click a este boton me ejecutara la funcion loadHome-->
  <button v-if="is_auth" v-on:click="loadHome">Inicio </button>
  <!--si le doy click a este boton me ejecutara la funcion loadAccount-->
  <button v-if="is_auth" v-on:click="loadAccount"> Perfil </button>
  <!--si le doy click a este boton me ejecutara la funcion logOut-->
  <button v-if="is_auth" v-on:click="logOut"> Cerrar Sesión </button>
  <!--si le doy click a este boton me ejecutara la funcion loadLogIn-->
  <button v-if="!is_auth" v-on:click="loadLogIn" > Iniciar Sesión </button>
  <!--si le doy click a este boton me ejecutara la funcion loadSignUp-->
  <button v-if="!is_auth" v-on:click="loadSignUp" > Registrarse </button>
  
  </nav>
  </div>
  
  <div class="main-component">
  <!--me sirven para renderizar mi cuerpo-->
  <router-view
  v-on:completedLogIn="completedLogIn"
  v-on:completedSignUp="completedSignUp"
  v-on:logOut="logOut"
  >
  </router-view>
  </div>
  
  <div class="footer">
  <h2>Twezor.io</h2>
  </div>
  </div>
  </template>
  <script>
    //que es lo que quiero exportar
    export default {
    //voy a exportar mi archivo este archivo de App y para esto le doy el nombre de App
    name: 'App',
    data: function(){
    return{
    //no tiene autorizaciones
    is_auth: false
    }
    },
    components: {
    },
    //aqui se ponen los metodos o funciones que voy a usar
    methods:{
    //funcion para verificar si esta autorizado
    verifyAuth: function() {
      this.is_auth = localStorage.getItem("isAuth") || false;
    //si no esta autorizado poner el archivo home en las rutas(router-view).
    //si no esta autorizado renderizeme la ruta de Inicio
    if(this.is_auth == false)
    this.$router.push({name: "Inicio"})
    else
    //si esta autorizado renderizeme la ruta home
    this.$router.push({name: "home"})
    },
    //funcion para poner el arcivo de logIn en las rutas(router-view).
    //cuando oprima el boton de iniciar sesion se me cargara esta funcion que me renderizara el archivo logIn
    loadLogIn: function(){
    this.$router.push({name: "logIn"})
    },
    //funcion para poner el arcivo de signUp en las rutas(router-view).
    //cuando oprima el boton de registrarse se me cargara esta funcion que me renderizara el archivo logIn
    loadSignUp: function(){
    this.$router.push({name: "signUp"})
    },
    completedLogIn: function(data) {
      localStorage.setItem("isAuth",true);
      localStorage.setItem("username",data.username);
      localStorage.setItem("token_access",data.token_access);
      localStorage.setItem("token_refresh",data.token_refresh);    
      alert("autenticación exitosa");
      this.verifyAuth();
    },
    
    //esta funcion se me ejecuta desde SignUp Y le paso los argumentos que obtengo en SignUp.
    completedSignUp: function(data) {
      alert("registro exitoso");
      this.completedLogIn(data);
    },
    //funcion para poner el arcivo de home en las rutas(router-view).
    //cuando oprima el boton de inicio se me cargara esta funcion que me renderizara el archivo home
    loadHome: function(){
      this.$router.push({name: "home"});
    },
    //funcion para poner el arcivo de account en las rutas(router-view).
    //cuando oprima el boton de cuenta se me cargara esta funcion que me renderizara el archivo account
    loadAccount: function(){
      this.$router.push({name: "account"});
    },
    loadNotification: function(){
      this.$router.push({name: "notification"});
    },
    //cuando oprima el boton de cerrar sesion se me cargara esta funcion que elimina todos los registros del almacen local.
logOut: function(){
localStorage.clear();
alert("sesion cerrada");
//me ejecuta la funcion verify y como no estoy autenticado me renderiza el archivo inicio.
this.verifyAuth();
},
    },
    created: function(){
    
    
    
    this.verifyAuth()
    }
    }
    </script>
    
    <style>
      body{
      margin: 0 0 0 0;
      }
      .header{
      margin: 0%;
      padding: 0;
      width: 100%;
      height: 10vh;
      min-height: 100px;
      background-color: black ;
      color:#E5E7E9 ;
      display: flex;
      justify-content: space-between;
      align-items: center;


}
.header h1{
      width: 20%;
      text-align: center;
      font-family: fantasy;

}
.header nav{
    height: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    font-size: 20px;
    margin-right: 10px;
    

}
.header nav button {
color: #E5E7E9;
background: #283747;
border: 1px solid #E5E7E9;
border-radius: 5px;
padding: 10px 20px;
}
.header nav button:hover {
color: #283747;background
: #E5E7E9;
border: 1px solid #E5E7E9;
}
.main-component {
height: 75vh;
margin: 0%;
padding: 0%;
background: #FDFEFE;
}
.footer {
margin:0;
padding:0;
width: 100%;
height: 10vh;
min-height: 100px;
background-color: black;
color: #E5E7E9;
}
.footer h2{
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
}
</style>