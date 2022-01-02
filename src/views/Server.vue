<template>
<div class="wrapper">
  
  <collectionsMenu :ssdatas="colecciones" @accion="getDatafromDB"/>
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
              <a class="navbar-brand" href="#">  {{ solarName }}{{ dbName ? ": "+dbName : "" }}</a>
              <div class="clearfix" ></div>
              <button v-if="dbName" style="margin-left: 15px;"  class="btn btn-xs btn-success  btn-fill"> Agregar Registro </button>
          </div>
        </div>
    </nav>
    <div class="content">
      <div class="container-fluid">
          <unDrawDiv v-if="selected === false" :tipe="2" />
          <tableOfRows v-else :server="dbId" :collection="dbName" :rowsData="dbRows"  />
      </div>
    </div>
  </div>
</div>
</template>

<script>

  let axios = require('axios');

  import collectionsMenu from "../components/collectionsMenu.vue"
  import unDrawDiv from "../components/unDrawDiv.vue"
  import tableOfRows from "../components/tableOfRows.vue"
  
  export default{
    name: "Server",
    components : {
      unDrawDiv,
      tableOfRows,
      collectionsMenu
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
  .header {
    top: 0;
    z-index: 100;
    position: fixed;
    width: 100%;
    height: 80px;
  }
 .card {
    position: relative;
    display: flex;
    flex-direction: inherit;
    min-width: 0;
    word-wrap: break-word;
    border: 1px
    solid rgba(0, 0, 0, .05);
    border-radius: 0.375rem;
    background-color: #fff;
    background-clip: border-box;
  }
  .pdni{
    padding-top: 182px;
    position: absolute;
    height: calc(100% - 80px);
    width: 100%;
    overflow-y: auto;
  }

 
</style>