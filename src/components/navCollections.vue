<template>
    <nav class="ct-links menu" id="ct-docs-nav" >

        <div class="ct-toc-item active model">
            <a class="ct-toc-link" href="">Colecciones</a>
            <ul class="nav ct-sidenav" >

                <li v-for="(data, index) in colecciones" :key="index">
                    <a @click="$emit('accion', data)"> {{data}} </a>
                </li>

            </ul>
        </div>
    </nav>
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
    .nav {
        display: flex;
        margin-bottom: 0;
        padding-left: 31px;
        list-style: none;
        flex-wrap: wrap;
    }
    .menu{
        position: fixed; position: fixed;
        background-color: #dae2d84d;
        height: 100%;
        padding-right: 3%;
    }
    .model{
        padding-top: 20px;
        padding-left: 20px;
    }
</style>