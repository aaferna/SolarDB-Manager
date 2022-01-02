<template>
    <div class="row">
        <div class="col-md-12">
            <unDrawDiv :tipe="4" v-if="rowsData.length === 0" />
            <div v-else class="card" id="indexes">
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
                                    <router-link class="btn btn-xs btn-warning btn-fill" :to="`/server/${server}/${collection}/${data.id}`" >
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

import unDrawDiv from "../components/unDrawDiv.vue"

let axios = require('axios'),
    jsonViewer = new JSONViewer();

export default {
    data(){
      return {
        index: ""
      }
    },
    components : {
      unDrawDiv
    },
    props:{
        server: String,
        collection: String,
        rowsData: Array
    },
    methods:{
        async showData(server, collection, index) {
            let solarServer = JSON.parse(localStorage.getItem("Server"))[server],
            solarURL = solarServer.ip,
            solarToken = solarServer.token
            const response = await axios({
                method: 'get',
                url: solarURL+`/select/history/${collection}/${index}`,
                headers: { 
                    'Authorization': 'Bearer '+ solarToken
                }
            })

            $('#indexes').css('display', 'none')
            $('#datas').css('display', 'block')

            document.querySelector("#datas").appendChild(jsonViewer.getContainer());
            jsonViewer.showJSON(response.data);
        }
    }
}


</script>

<style>

</style>