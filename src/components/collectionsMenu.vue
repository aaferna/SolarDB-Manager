<template>
    <div class="sidebar">
        <div class="sidebar-wrapper" style="background-color: #7f5a83; background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%); ">
            <div class="logo "> <a class="simple-text"> SolarDB Manager </a> </div>
            <ul class="nav">
                <li >
                    <router-link class="nav-link nav-link-icon" :to="`/`">
                    <i class="pe-7s-server"></i>
                        <p>Bases de Datos</p>
                    </router-link>
                </li>
                <li>
                    <router-link class="nav-link nav-link-icon" :to="`/server/add`">
                    <i class="pe-7s-plus"></i>
                        <p>Agregar Servidor</p>
                    </router-link>
                </li>
            <br>
            <div class="logo "> Colecciones </div>
            <br>
            <div v-if="colecciones.length > 0">

                <li  v-for="(data, index) in colecciones" :key="index">
                    <a class="nav-link" @click="$emit('accion', data)"> {{data}} </a>
                </li>
            </div>
            <div v-else>
                <center>
                    No hay Colecciones
                </center>
            </div>
            </ul>
        </div>
    </div>
</template>

<script>


let axios = require('axios');

    export default {

        data(){
            return {
                solarURL: "",
                solarName: "",
                solarToken: "",
                colecciones: []
            }
        },
        props: {
            database: String
        },
        methods:{
            getServer(){
                let solarServer = JSON.parse(localStorage.getItem("Server"))[this.$route.params.id]
                    this.solarURL = solarServer.ip
                    this.solarName = solarServer.name
                    this.solarToken = solarServer.token
            },
            getDB(id){
                console.log(id)
            },
            async loadData() {

                const response = await axios({
                    method: 'get',
                    url: this.solarURL+'/store/list',
                    headers: { 
                        'Authorization': 'Bearer '+this.solarToken
                    }
                })
                
                if(response.data[0].code === "ENOENT") {
                    this.error = true
                } else {
                    this.colecciones = response.data
                }

            }
        
        },
        
        beforeMount(){
            this.getServer(),
            this.loadData()
        }

    }
</script>

<style>

</style>