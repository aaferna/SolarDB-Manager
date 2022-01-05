<template>
    <div class="sidebar">
        <div class="sidebar-wrapper" style="background-color: #7f5a83; background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%); ">
            <div class="logo "> <a class="simple-text"> SolarDB Manager </a> </div>
            <ul class="nav">
                <li >
                    <a class="nav-link nav-link-icon" href="javascript:history.back()">
                    <i class="pe-7s-back"></i>
                        <p>Atras</p>
                    </a>
                </li>
                  <br>
                <div class="logo "> Utilidades </div>
                <br>
                <li>
                    <a class="nav-link nav-link-icon">
                        <i class="pe-7s-note"></i>
                        <p>Actualizar Datos</p>
                    </a>
                </li>
                <li>
                    <a  @click="delInsert(collection, index)" class="nav-link nav-link-icon" :to="`/server/add`">
                    <i class="pe-7s-trash"></i>
                        <p>Borrar Index</p>
                    </a>
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script>
const axios = require('axios');



    export default {

        props: {
            index: String,
            collection: String
        },
        methods:{
            delInsert(collection, index){
                if (window.confirm("Esta seguro con querer eliminar el Index?")) {
              let   solarServer = JSON.parse(localStorage.getItem("Server"))[this.$route.params.server],
                    solarURL = solarServer.ip,
                    solarToken = solarServer.token

                    const response =  axios({
                        method: 'delete',
                        url: solarURL+`/delete/${collection}/${index}`,
                        headers: { 
                            'Authorization': 'Bearer '+ solarToken
                        }
                    }).then((response) => {
                        alert(response.data.msg)
                        history.back()
                    }).catch((error) => {
                        console.log(error);
                    });
                }
            }
        },

    }
</script>

<style>

</style>