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