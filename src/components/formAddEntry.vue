<template>
  <div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="header">
                <h4 class="title">Nuevo Registro</h4>
            </div>
            
            <div class="content">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Coleccion a donde Almacenar</label>
                            <select class="form-control form-control-sm" v-for="(data, index) in databases" :key="index" id="store">
                              <option value="_inex747"> Seleccione una Coleccion</option>
                              <option :value="data" >{{data}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Objeto a Registrar</label>
                        <textarea id="myTextArea" @input="prettyPrint"  class="form-control" placeholder="JSON Structure"></textarea>
                        <br>
                        <center id="msg"><br></center>
                      </div>
                    </div>
                </div>
                <br>
                  <button type="button" class="btn btn-success btn-sm btn-fill pull-right" @click="registrarEntrada()">Guardar Cambios</button>
                  <div class="clearfix"></div>
             </div>
        </div>
    </div>
</div>
</template>

<script>
    const axios = require('axios');
    export default {

        props: {
            databases: Object
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
          prettyPrint() {

            try {
              var ugly = document.getElementById('myTextArea').value;
              if( ugly.length == 0 ){
                $('#msg').text("")
              } else {
                var obj = JSON.parse(ugly);
                var pretty = JSON.stringify(obj, undefined, 4);
                document.getElementById('myTextArea').value = pretty;
                $('#msg').text("")
              }
            } catch (error) {
              $('#msg').text(error)
            }
              
          },
          getServer(){
            let solarServer = JSON.parse(localStorage.getItem("Server"))[this.$route.params.server]
                this.solarURL = solarServer.ip
                this.solarName = solarServer.name
                this.solarToken = solarServer.token
                this.dbId = this.$route.params.server
          },
          registrarEntrada(){

            if ($.trim($("#store").val()) === "_inex747" || $.trim($("#myTextArea").val()) === "" ) {
              alert('Hay campos sin completar')
              return false;
            } else {


              let config = {
                method: 'post',
                url: this.solarURL+'/insert/'+$("#store").val(),
                headers: { 
                  'Authorization': 'Bearer '+this.solarToken, 
                  'Content-Type': 'application/json',
                  "Access-Control-Allow-Origin": "*"
                },
                data : $("#myTextArea").val()
              };

              axios(config)
              .then((response) => {
                $("#myTextArea").val("")
                alert('Se inserto el registro bajo el ID '+response.data.id)
              })
              .catch(() => {
                  alert('Existe un inconveniente con el guardado, todos los datos son correctos?')
              });
            




            }

          }
        },
        beforeMount(){
            this.getServer()
        }

    }
 
</script>

<style scoped>

#myTextArea {
  width: 100%;
  height: 300px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}
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
  .card .category, .card label {
      font-size: 14px;
      font-weight: 400;
      color: #423f3f;
  }
  .form-control {
      background-color: #ffffff;
      border: 1px solid #777;
      border-radius: 4px;
      color: #565656;
      padding: 8px 12px;
      height: 40px;
      -webkit-box-shadow: none;
      box-shadow: none;
  }
</style>