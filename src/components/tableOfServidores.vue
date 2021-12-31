<template>
  <div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="header">
                <h4 class="title">Servidores Registados</h4>
                <p class="category">Listado de Servidores que dispone para su acceso</p>
            </div>
            <br/>
            <div class="table-responsive">
                <table class="table align-items-center">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col" class="sort" >ID</th>
                            <th scope="col" >Nombre</th>
                            <th scope="col" >Endpoint</th>
                            <th scope="col" >Token Reference</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody class="list" v-for="(data, index) in servidores" :key="index">
                            <tr>
                            <td class="align-items-center">
                                {{index}}
                            </td>
                            <td>
                                <span >
                                <span class="status">{{data.name}}</span>
                                </span>
                            </td>
                            <td>
                                <div >
                                <span class="completion">{{data.ip}}</span>
                                </div>
                            </td>
                            <td>
                                <div >
                                <span class="completion">{{data.token.substring(0,8)}}</span>
                                </div>
                            </td>
                            <td class="text-right" >
                                <router-link class="btn btn-sm btn-info btn-fill" :to="`/server/${index}`">
                                    Ver Equipo
                                </router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
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