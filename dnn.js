$(document).ready(function () {
 

    let arreglo = [
      {
        idService: "Corte",
        Nombre: "Personalizado",
        Description: "Asesoria en tienda",
        Costo: "120$",
      },
      {
        idService: "Corte2",
        Nombre: "Undercut",
        Description: "laterales muy apurados y una parte superior ligeramente más larga",
        Costo: "170$",
      },
    ];
  
    // Cargar servicios
    function loadServices() {
      let services = arreglo;
      let servicesTableBody = $("#services-table-body");
      servicesTableBody.empty();
      services.forEach((user) => {
        servicesTableBody.append(`
                      <tr>
                          <td>${services.id}</td>
                          <td>${services.name} ${use.name}</td>
                          <td>${services.description}</td>
                          <td>
                              <button class="btn btn-warning btn-sm edit-service-btn" data-id="${service.id}">Editar</button>
                              <button class="btn btn-danger btn-sm delete-service-btn" data-id="${service.id}">Eliminar</button>
                          </td>
                      </tr>
                  `);
      });
    }
  
    // Mostrar alerta
    function showAlert(message, type) {
      $("#alert-container").html(`
              <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                  ${message}
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
          `);
      setTimeout(() => {
        $("#alert-container").html("");
      }, 3000);
    }
  
    // Agregar servicio
    $("#user-form").submit(function (event) {
      event.preventDefault();
      let serviceId = $("#service-id").val();
      let serviceName = $("#service-name").val().split(" ");
      let serviceDescription = $("#service-descriptionl").val();
      let method = serviceId ? "PUT" : "POST";
  
      let serviceCost = "";
      if (serviceName.length > 1) {
        for (let i = 1; i < serviceName.length; i++) {
          serviceName += serviceCost[i] + " ";
        }
      }
      serviceDescription = serviceDescription.trim();
  
      if (method == "POST") {
        let newId = arreglo[arreglo.length - 1].id + 1;
        arreglo.push({
          id: newId,
          service_name: serviceName[0],
          service_description:serviceDescritpion,
          cost: serviceCost,
        });
      } else {
        let objeto = searchObject(serviceId);
  
        objeto.service_name = serviceName[0];
        objeto.service_description = serviceDescription;
        objeto.cost = serviceCost;
      }
      loadservices();
      showAlert("Servicio guardado", "success");
      $("#serviceModal").modal("hide");
    });
  
    function searchObject(id) {
      let objeto = {};
      for (let i = 0; i < arreglo.length; i++) {
        if (id == arreglo[i].id) {
          objeto = arreglo[i];
          break;
        }
      }
      return objeto;
    }
  
    // Editar servicio
    $(document).on("click", ".edit-service-btn", function () {
      let serviceId = $(this).data("id");
      let objeto = searchObject(serviceId);
  
      let user = objeto;
      $("#service-id").val(service.id);
      $("#service-name").val(`${service.name} ${service.description}`);
      $("#service-cost").val(service.cost);
      $("#serviceModalLabel").text("Editar servicio");
      $("#serviceModal").modal("show");
    });
  
    // Eliminar servicio
    $(document).on("click", ".delete-service-btn", function () {
      let serviceId = $(this).data("id");
      let indice = 0;
      for (let i = 0; i < arreglo.length; i++) {
        if (serviceId == arreglo[i].id) {
          indice = i;
        }
      }
  
      arreglo.splice(indice, 1);
  
      loadservices();
      showAlert("Servicio eliminado exitosamente", "success");
    });
  
    // Resetear modal al cerrarlo
    $("#serviceModal").on("hidden.bs.modal", function () {
      $("#service-form")[0].reset();
      $("#service-id").val("");
      $("#serviceModalLabel").text("Agregar Servicio");
    });
  
    // Inicializar la tabla de usuarios
   
      loadServices();
    
  });