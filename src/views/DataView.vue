<template>
<div class="wrapper">
  <collectionsMenuData />
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
              <a class="navbar-brand" href="#"> Index {{this.$route.params.index}} de {{this.$route.params.collection}} en {{ solarName }}</a>
              <div class="clearfix" data-v-cad94a00=""></div>
              <button v-if="dbName" style="margin-left: 15px;" href="/server/view/data/0" class="btn btn-xs btn-success  btn-fill"> Agregar Registro </button>
          </div>
        </div>
    </nav>
    <div class="content">
      <div class="container-fluid">
          <collectionData  />
      </div>
    </div>
  </div>
</div>
</template>

<script>

  let axios = require('axios');

  import collectionsMenuData from "../components/collectionsMenuData.vue"
  import collectionData from "../components/collectionData.vue"
  
  export default{
    name: "Server",
    components : {
      collectionsMenuData,
      collectionData
    },
    data(){
      return {
        solarURL: "",
        solarName: "",
        solarToken: "",
        
      }
    },
    methods:{
      getServer(){
        let solarServer = JSON.parse(localStorage.getItem("Server"))[this.$route.params.server]
            this.solarURL = solarServer.ip
            this.solarName = solarServer.name
            this.solarToken = solarServer.token
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