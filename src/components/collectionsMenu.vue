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

                <li  v-for="(data, index) in ssdatas" :key="index">
                    <a class="nav-link nav-link-icon" @click="$emit('accion', data)"> <i class="pe-7s-box2"></i> <p>{{data}}</p> </a>
                </li>

                <div v-if="ssdatas.length === 0">
                    <center>
                        No hay Colecciones
                    </center>
                </div>
                
            </ul>
        </div>
    </div>
</template>

<script>

    export default {

        props: {
            ssdatas: Array
        }

    }
</script>

<style>

</style>