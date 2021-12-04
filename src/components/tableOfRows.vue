<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">

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
                            <td class="text-right" >
                               
                                    <router-link class="btn btn-sm btn-info btn-fill"  :to="`/server/view/data/${index}`">
                                        Ver mas
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
    props:{
        name: String,
        rowsData: Array
    }
}
</script>

<style>

</style>