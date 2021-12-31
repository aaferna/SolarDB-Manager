<template>
<div class="wrapper">
  <mainMenu />
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
            <a class="navbar-brand" href="#">Bases de Datos</a>
          </div>
        </div>
      </nav>
      <div class="content">
        <div class="container-fluid">
          <unDrawDiv v-if="visible" :tipe="1"/>
          <tableOfServidores v-else :servidores="servidores" />
        </div>
      </div>
  </div>
</div>
</template>

<script>

  import mainMenu from "../components/mainMenu.vue"
  import unDrawDiv from "../components/unDrawDiv.vue"
  import tableOfServidores from "../components/tableOfServidores.vue"

  export default{
    components: {
      mainMenu,
      unDrawDiv,
      tableOfServidores
    },
    data(){
      return {
        servidores: JSON.parse(localStorage.getItem('Server')),
        visible: true
      }
    },
    methods:{
      loadData() {
        if(JSON.parse(localStorage.getItem('Server'))){
            this.visible = false
        } 
      }
      
    },
    beforeMount(){
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