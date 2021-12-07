<template>
    <div class="row">
        <div class="col-md-12">
            <div id="datas" >
            </div>
        </div>
    </div>
</template>

<script>


let axios = require('axios'),
    jsonViewer = new JSONViewer();

export default {
    
    methods:{
        async showData() {
            let solarServer = JSON.parse(localStorage.getItem("Server"))[this.$route.params.server],
            solarURL = solarServer.ip,
            solarToken = solarServer.token
            const response = await axios({
                method: 'get',
                url: solarURL+`/select/history/${this.$route.params.collection}/${this.$route.params.index}`,
                headers: { 
                    'Authorization': 'Bearer '+ solarToken
                }
            })
            document.querySelector("#datas").appendChild(jsonViewer.getContainer());
            jsonViewer.showJSON(response.data);
        }
    },
    beforeMount(){
        this.showData()
    }
}


</script>

<style>

</style>