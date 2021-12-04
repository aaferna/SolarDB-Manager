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
            <a class="navbar-brand" href="#">Agregar Servidor</a>
          </div>
        </div>
      </nav>
      <div class="content">
        <div class="container-fluid">
          <formAddServer />
        </div>
      </div>
  </div>
</div>
</template>

<script>

  import mainMenu from "../components/mainMenu.vue"
  import formAddServer from "../components/formAddServer.vue"

  export default{
    components: {
      mainMenu,
      formAddServer
    }
    
  }


</script>

<style scoped>
</style>