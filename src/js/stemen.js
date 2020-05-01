document.querySelector('#ingresar').onclick = function(e){
    let input = document.getElementById("usuario").value;
    if (input.toUpperCase() === "INICIO") {
        window.location.href = './inicio.html';
    }
    e.preventDefault()
}
