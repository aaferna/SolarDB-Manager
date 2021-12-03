<template>
    
<nav class="header bg-gradient-primary fixed-top" id="mn">
  <div class="container">
    <div class="header-body text-center mb-7">
      <div class="row align-items-center py-4">
        <div class="col-lg-12 text-right">
          <a data-toggle="modal" data-target="#fdS" class="btn btn-sm btn-neutral">Nueva DB</a>
        </div>
      </div>
    </div>
  </div>
</nav>

<div style="padding: 40px;"> </div>

<div class="pdni">
  <div class="container mt--8 ">
    <div class="row">
      <div class="col-md-12"> 
        <div class="card-body">
          
          <noDB v-if="visible" :tipe="1"/>
          <tableOfServidores v-else :servidores="servidores" />

        </div>
      </div>
    </div>
  </div>

</div>

  <div class="modal fade" id="fdS" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Nueva Base de Datos</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
              <input type="email" class="form-control form-control-sm" id="name" placeholder="Nombre del Servidor">
          </div>
          <div class="form-group">
              <div class="input-group">
                <select class="form-control form-control-sm" id="protocolo">
                  <option value="http" >HTTP</option>
                  <option value="https" selected>HTTPS</option>
                </select>
                <input type="text" id="ip" placeholder="IP" class="form-control form-control-sm">
                <input type="text" id="puerto" placeholder="Puerto" class="form-control form-control-sm">
              </div>
          </div>
          <div class="form-group">
              <input type="email" class="form-control form-control-sm" id="token" placeholder="Token de Acceso">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-sm btn-primary" @click="registrarEquipo()">Guardar Cambios</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="modal-notification" tabindex="-1" role="dialog" aria-labelledby="modal-notification" aria-hidden="true">
      <div class="modal-dialog modal-danger modal-dialog-centered modal-" role="document">
          <div class="modal-content bg-gradient-default">
              
              <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                  </button>
              </div>
              
              <div class="modal-body">
                  <h4 class="heading mt-4">Algunos datos no se encuentran</h4>
                  <div class="py-3 text-center">
                      <p>Verifique que los campos del formulario esten completos</p>
                  </div>
              </div>
              
              <div class="modal-footer">
                  <button type="button" class="btn btn-white" data-dismiss="modal">Ok</button>
              </div>
              
          </div>
      </div>
  </div>

</template>

<script>

  import tableOfServidores from "../components/tableOfServidores.vue"
  import noDB from "../components/unDrawDiv.vue"

  export default{
    components: {
      tableOfServidores,
      noDB
    },
    data(){
      return {
        servidores: JSON.parse(localStorage.getItem('Server')),
        visible: true
      }
    },
    methods:{

      registrarEquipo(){

        if ($.trim($("#name").val()) === "" || $.trim($("#ip").val()) === "" || $.trim($("#puerto").val()) === "" || $.trim($("#token").val()) === "") {
          $('#modal-notification').modal('show')
          return false;
        } else {

          let data = {
            name: $('#name').val(),
            ip: $('#protocolo').val()+"://"+$('#ip').val()+":"+$('#puerto').val(),
            token: $('#token').val()
          }

          if(!localStorage.getItem('Server')){
              let d = []
              d.push(data)
              localStorage.setItem('Server', JSON.stringify(d));
              this.servidores= JSON.parse(localStorage.getItem('Server'))
              this.visible = false
          } else {
              let dataforPush = JSON.parse(localStorage.getItem('Server'));
              dataforPush.push(data);
              localStorage.setItem('Server', JSON.stringify(dataforPush));
              this.servidores= JSON.parse(localStorage.getItem('Server'))
          }

          $('#fdS').modal('hide') 
          
        }

      },

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