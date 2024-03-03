function enviarFormulari() {

    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var missatge = document.getElementById("missatge").value;
    if (document.getElementById("verificacioHumana").checked && validarEmail(email) && nom.length !== 0 && missatge.length !==0) {
        var verificacioHumana = "ok";
    } else {
        var verificacioHumana = "ko";
        document.getElementById("popupError").style.display = "block";
        return;
    }
    
    var formData = {
        verificacioHumana: verificacioHumana,
        nom: nom,
        email: email,
        missatge: missatge
    };

    $.ajax({
        type: "POST",
        url: "form_contacte.php",
        data: formData,
        success: function (response) {
            if (response == 'ok') {
                document.getElementById("popupOk").style.display = "block";
            } else if (response == 'error_checkbox') {
                document.getElementById("popupError").style.display = "block";
            } else if (response == 'error_mail') {
                document.getElementById("popupErrorMail").style.display = "block";
            }
        },
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " " + xhr.message);
        }
    });
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}