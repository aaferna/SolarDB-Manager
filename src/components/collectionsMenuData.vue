<template>
    <div class="sidebar">
        <div class="sidebar-wrapper" style="background-color: #7f5a83; background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%); ">
            <div class="logo "> <a class="simple-text"> SolarDB Manager </a> </div>
            <ul class="nav">
                <li >
                    <router-link class="nav-link nav-link-icon" :to="`/`">
                    <i class="pe-7s-server"></i>
                        <p>Actualizar Datos</p>
                    </router-link>
                </li>
                <li>
                    <router-link class="nav-link nav-link-icon" :to="`/server/add`">
                    <i class="pe-7s-plus"></i>
                        <p>Ultimo Insert</p>
                    </router-link>
                </li>
                 <li>
                    <router-link class="nav-link nav-link-icon" :to="`/server/add`">
                    <i class="pe-7s-plus"></i>
                        <p>Borrar Index</p>
                    </router-link>
                </li>
                
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