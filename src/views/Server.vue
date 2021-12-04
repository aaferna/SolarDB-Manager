<template>
<div class="wrapper">
  <collectionsMenu :database="solarName" @accion="getDatafromDB"/>
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
            <a class="navbar-brand" href="#">Conectado al Servidor  {{solarName}}
            </a>
          </div>
        </div>
      </nav>
      <div class="content">
        <div class="container-fluid">
          <unDrawDiv v-if="selected === false" :tipe="2" />
          <tableOfRows v-else :name="dbName" :rowsData="dbRows" />
        </div>
      </div>
  </div>
</div>
</template>

<script>

  import collectionsMenu from "../components/collectionsMenu.vue"
  import unDrawDiv from "../components/unDrawDiv.vue"
  import tableOfRows from "../components/tableOfRows.vue"
  let axios = require('axios');

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
        colecciones: [],
        selected: false,
        dbName: "",
        dbRows: []
      }
    },
    methods:{
      getServer(){
        let solarServer = JSON.parse(localStorage.getItem("Server"))[this.$route.params.id]
            this.solarURL = solarServer.ip
            this.solarName = solarServer.name
            this.solarToken = solarServer.token
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
      }
      
    },
    beforeMount(){
        this.getServer()
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

  .pdni{
    padding-top: 182px;
    position: absolute;
    height: calc(100% - 80px);
    width: 100%;
    overflow-y: auto;
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
</style>