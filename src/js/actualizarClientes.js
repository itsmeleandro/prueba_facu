const dataOfClient = JSON.parse(localStorage.getItem('dataOfClient'));
if(dataOfClient){
    const rowOfClient = $(`
    <tr>
        <td>
        <div class="custom-control custom-checkbox mb-3">
            <input type="checkbox" class="custom-control-input" id="customCheck26">
            <label class="custom-control-label" for="customCheck26"></label>
        </div>
        </td>
        <td>100027</td>
        <td>${dataOfClient['nombre']}</td>
        <td>${dataOfClient['tipo']}</td>
        <td>${dataOfClient['email']}</td>
        <td>${dataOfClient['telefono']}</td>
        <td>${dataOfClient['date']}</td>
        <td>
        <div class="dropdown">
            <button class="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown"
            data-hover="dropdown">
            Acciones <span class="caret"></span>
            </button>
            <div class="dropdown-menu">
            <a class="dropdown-item" href="../pantallasTerciarias/clientesmodificar.html"><i class='	far fa-edit'></i>Editar</a></li>
            <a class="dropdown-item" data-toggle="modal" data-target="#myModal" href="#"><i
                class='fas fa-eraser'></i>Eliminar</a></li>
            </div>
        </div>
        </td>
    </tr>
    `);
    $('#tabla tbody').append($(rowOfClient));
    localStorage.clear();
}

$('#confirmacionDeEliminacion').click(
    function(){
        $('#seleccionadoParaEliminar').remove()
    }
);

function saveRow(event){
    console.log($(event).attr('id','seleccionadoParaEliminar'))
}