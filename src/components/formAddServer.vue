<template>
  <div class="row">
    <div class="col-md-12">
        <div class="card">

            <div class="header">
                <h4 class="title">Formulario de Registro</h4>
                <p class="category">Complete todos los campos para registrar el equipo</p>
            </div>
            <div class="content">
                    <label for="basic-url">Nombre del Servidor</label>
                        <div class="form-group">
                            <input type="email" class="form-control form-control-sm" id="name" placeholder="Nombre del Servidor">
                        </div>
                <br>
                    <label for="basic-url">URL del Servidor</label>

                <div class="row">

                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Protocolo</label>
                            <select class="form-control form-control-sm" id="protocolo">
                                    <option value="http" >HTTP</option>
                                    <option value="https" selected>HTTPS</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>IP / URL</label>
                            <input type="text" id="ip" placeholder="IP" class="form-control form-control-sm">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Puerto</label>
                            <input type="text" id="puerto" placeholder="Puerto" class="form-control form-control-sm">
                        </div>
                    </div>
                </div>
                       
                <br>
                    <label for="basic-url">Token de Acceso</label>
                        <div class="form-group">
                            <input type="email" class="form-control form-control-sm" id="token" placeholder="Token de Acceso">
                        </div>

                    <button type="button" class="btn btn-success btn-sm btn-fill pull-right" @click="registrarEquipo()">Guardar Cambios</button>
                    <div class="clearfix"></div>
             </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
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
          $("#name").val("")
          $("#ip").val("")
          $("#puerto").val("")
          $("#token").val("")


        }

      }
    }
}
</script>

<style scoped>
  .input-group-multi [class*='col-'] {
    margin: 0 !important;
    padding: 0 !important;
  }

  .input-group-multi .form-control {
    border-right: 0;
  }

  .input-group-multi [class*='col-']:last-child .form-control {
    border-radius: 0 4px 4px 0;
    border-right: 1px solid #ccc;
  }
</style>