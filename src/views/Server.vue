<template>

  
<div class="container-fluid pdni d-flex flex-column vh-100 overflow-hidden" >
  <nav class="header bg-gradient-primary fixed-top" id="mn">
      <div class="container">
          <div class="header-body text-center mb-7">
          <div class="row align-items-center py-4">
              <div class="col-lg-12 text-right">
              <div class="dropdown">
                      <a class="btn btn-sm btn-icon-only btn btn-secondary" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="fas fa-ellipsis-v"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a class="dropdown-item" href="#">Nueva Consulta</a>
                          <a class="dropdown-item" href="#">Nuevo Post</a>
                          <!-- <a class="dropdown-item" href="#">Nuevo Usuario</a> -->
                      </div>
                  </div>
              </div>
          </div>
          </div>
      </div>
  </nav>
    <div class="row flex-grow-1 overflow-hidden">
        <div class="col-2 mh-100 overflow-auto py-2" style="padding-top: -1.5rem !important;">
            <navCollections :database="solarName" @accion="getDatafromDB"/>
        </div>
        <div class='col mh-100 overflow-auto' style="margin-top: 10px;">
            <unDrawDiv v-if="selected === false" :tipe="2" />
            <tableOfRows v-else :name="dbName" :rowsData="dbRows" />
        </div>
    </div>
</div>

</template>

<script>

  import unDrawDiv from "../components/unDrawDiv.vue"
  import tableOfRows from "../components/tableOfRows.vue"
  import navCollections from "../components/navCollections.vue"

  let axios = require('axios');

  export default{
    name: "Server",
    components : {
      unDrawDiv,
      tableOfRows,
      navCollections
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
.ct-sidebar {
  
    z-index: 1000;
    height: calc(100vh- 4rem);
}
.pdni{
  padding-top: 70px;
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