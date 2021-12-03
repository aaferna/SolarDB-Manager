<template>
   <div id="table">
        <div class="col-md-12">
            <center>
                <br>
                    <br>
                        <h3 id="tableName">Coleccion:  {{name}}</h3>
                    <br>
                <br>
            </center>
            <div class="table-responsive">
                <table class="table align-items-center">
                <thead class="thead-light">
                    <tr>
                        <th scope="col" class="sort" data-sort="name">Index</th>
                        <th scope="col" class="sort" data-sort="budget">Registros</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody class="list" v-for="(data, index) in rowsData" :key="index">
                        <tr>
                        <td>
                            <span class="align-items-center">
                            <span class="status">{{data.id}}</span>
                            </span>
                        </td>
                        <td>
                            <div class="align-items-center">
                            <span class="completion">{{data.rows}}</span>
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
        </div>
    </div>
</template>

<script>
export default {
    props:{
        name: String,
        rowsData: Array
    }

}
</script>

<style>

</style>