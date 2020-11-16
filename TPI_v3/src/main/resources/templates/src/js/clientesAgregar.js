function deleteAlert() {
    if ($('#alert')) {
        $('#alert').remove();
    }
}
$('document').ready(
    function () {
        $('#registro').submit(
            function (e) {
                if ($('#alert')) {
                    deleteAlert();
                }
                let alert = $(`
                <div id='alert' class="alert alert-success" role="alert">
                    Registro completado satisfactorimente.
                </div>`);
                $('#registro').before(alert);
                saveClient();
                setTimeout(deleteAlert, 3000);
                e.preventDefault();
                e.stopPropagation();
            }
        )
    }
);


function resetInputs() {
    $('#nombre').val('');
    $('#tipo').val('');
    $('#email').val('');
    $('#telefono').val('');
    $('#datepicker').val('');
}

function saveClient() {
    const dataOfClient = {
        nombre: $('#nombre').val(),
        tipo:    $('#tipo').val(),
        email:    $('#email').val(),
        telefono:    $('#telefono').val(),
        date:    $('#datepicker').val(),
    };
    localStorage.setItem('dataOfClient', JSON.stringify(dataOfClient));
    resetInputs();
}