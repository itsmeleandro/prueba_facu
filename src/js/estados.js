function captureClick(event){
    if($(event)[0].cells.estado.innerText === "En Proceso"){
        const rowConEstadoProceso = $($(event)[0].cells.acciones.children[0].children[1].children.deshab);
       rowConEstadoProceso.addClass('isDisabled');
       return $(event).attr('class','noSePuedeEliminar');
    }
    $(event).attr('class','seleccionadoParaEliminar');
}

function deleteAlert() {
    if ($('#alert')) {
        $('#alert').remove();
    }
}

$('#confirmacionDeEliminacionIndividual').click(
    function(){
        $('.seleccionadoParaEliminar').remove()
    }
);

$('#confirmacionDeEliminacionGrupal').click(
    function(){
        if($('.noSePuedeEliminar')){
            let alert = $(`
                <div id='alert' class="alert alert-danger" style="width:auto; height:auto; font-size:17px;" role="alert">
                    Algunos de los registros no se pudieron borrar porque estan en proceso.
                </div>`);
            alert.prependTo($('#agregarPedidoButton'))
            setTimeout(deleteAlert, 3000);
        }
        $('.seleccionadoParaEliminar').each(
            function(){
                $(this).remove();
            })
    }
);