$(document).ready(function () {
    $("#check1").change(function () {
        if(this.checked){
            $("#cont1").show();}
            else{
                $("#cont1").hide();
            }
    });

    $("#check2").change(function () {
        if(this.checked){
            $("#cont2").show();}
            else{
                $("#cont2").hide();
            }
    });

    $('#registrar').click(function(){
        var selected = '';    
        $('input[type=checkbox]').each(function(){
            if (this.checked) {
                selected += $(this).val()+', ';
            }
        }); 

        if (selected == '') {
            alert('Debes seleccionar al menos una opción.');
            return false;  
        }  
        else
            return true;
    });         

    
});
