function captureClick(event){
    if($(event)[0].cells.estado.innerText === "En Proceso"){
        $($(event)[0].cells.acciones.children[0].children[1].children.deshab).addClass('isDisabled');
    }
}