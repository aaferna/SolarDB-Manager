<template>
    <div class="table-responsive">
        <table class="table align-items-center">
            <thead class="thead-light">
                <tr>
                    <th scope="col" class="sort" data-sort="name">ID</th>
                    <th scope="col" class="sort" data-sort="budget">Nombre</th>
                    <th scope="col" class="sort" data-sort="status">Endpoint</th>
                    <th scope="col" class="sort" data-sort="status">Token Reference</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody class="list" v-for="(data, index) in servidores" :key="index">
                    <tr>
                    <td class="align-items-center">
                        {{index}}
                    </td>
                    <td>
                        <span class="align-items-center">
                        <span class="status">{{data.name}}</span>
                        </span>
                    </td>
                    <td>
                        <div class="align-items-center">
                        <span class="completion">{{data.ip}}</span>
                        </div>
                    </td>
                    <td>
                        <div class="align-items-center">
                        <span class="completion">{{data.token.substring(0,8)}}</span>
                        </div>
                    </td>
                    <td class="text-right">
                        <ul class="navbar-nav ml-lg-auto">
                        <!-- <li class="nav-item">
                            <a class="nav-link nav-link-icon" data-toggle="modal" data-target="#modal-del-notification" >
                                <i class="fas fa-minus-circle"></i>
                            </a>
                        </li> -->
                        <li class="nav-item">
                            <router-link class="nav-link nav-link-icon" :to="`/server/${index}`">
                                <i class="fas fa-binoculars"></i>
                            </router-link>
                        </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {

    props: {
        servidores: Array
    }

}
</script>

<style>

</style>