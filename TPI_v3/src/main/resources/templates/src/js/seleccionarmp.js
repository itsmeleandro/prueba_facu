$(document).ready(function() {
    $('#registrar').click(function(){
        var selected = '';    
        $('input[type=checkbox]').each(function(){
            if (this.checked) {
                selected += $(this).val()+', ';
            }
        }); 

        if (selected == '') {
            alert('Debe seleccionar al menos una materia prima.');
            return false;  
        }  
        else
            return true;
    });         
});    