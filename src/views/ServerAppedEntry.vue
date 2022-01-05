<template>
<div class="wrapper">
    <collectionsMenuEntry />
  <div class="main-panel">
    <nav class="navbar navbar-default navbar-fixed">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
              <a class="navbar-brand" href="#"> Nuevo registro en {{ solarName }}</a>
          </div>
        </div>
      </nav>
      <div class="content">
        <div class="container-fluid">
          <formAddEntry :databases="colecciones" />
        </div>
      </div>
  </div>
</div>
</template>

<script>

  let axios = require('axios');

  import collectionsMenuEntry from "../components/collectionsMenuEntry.vue"
  import formAddEntry from "../components/formAddEntry.vue"
  
  export default{
    name: "Server",
    components : {
      formAddEntry,
      collectionsMenuEntry
    },
    data(){
      return {
        solarURL: "",
        solarName: "",
        solarToken: "",
        selected: false,
        colecciones: [], 
        dbName: "",
        dbRows: [],
        dbId: ""
      }
    },
    methods:{
      getServer(){
        let solarServer = JSON.parse(localStorage.getItem("Server"))[this.$route.params.server]
            this.solarURL = solarServer.ip
            this.solarName = solarServer.name
            this.solarToken = solarServer.token
            this.dbId = this.$route.params.server
      },
      async getDatafromDB(name) {
        const response = await axios({
          method: 'get',
          url: this.solarURL+`/store/${name}/list/inserts/long`,
          headers: { 
            'Authorization': 'Bearer '+this.solarToken
          }
        })
        this.selected = true
        this.dbName = name
        this.dbRows = response.data
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

<style scoped>
</style>