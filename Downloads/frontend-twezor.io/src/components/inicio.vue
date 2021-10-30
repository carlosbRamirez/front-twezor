<template>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=K2D:wght@800&display=swap" rel="stylesheet">
          
    </head>
    <div class="Home">
        
        <div class="home">
            
            <h1>Twezor.io</h1>
            <p>"let us know, how do you want to communicate"</p>
            <i class='bx bxs-bell'></i>            
        </div>

    </div>

</template>
<script>
export default {
    name: 'Inicio',
    data: function(){
    return{
  
    }
    },
    components: {
    },
    methods:{
    }
}
</script>
<style>
.home {
    left: 50%;
  position: absolute;
  top: 50%;

  transform: translate(-50%, -50%);
}
.home h1{
    font-family: 'K2D', sans-serif;
    
}

.home p{
    font-family: 'K2D', sans-serif;
    
}

</style>