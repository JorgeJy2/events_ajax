let btnRegister = document.getElementById('btn-register');
btnRegister.disabled = true;

// Hemos omitido los acentos en los comentarios por compatibilidad
function isValidEmail(mail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
}

function validar(formulario) {

    //Expresion regular del correo

    let nombres = document.getElementById('nombres');
    let errorNombres = document.getElementById('errorNombres');
    let email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');
    let contrasena = document.getElementById('contrasena');
    let errorContrasena = document.getElementById('errorContrasena');
    let confirmacion = document.getElementById('confirmacion');
    let errorConfirmacion = document.getElementById('errorConfirmacion');
    let tipo = document.getElementById('tipo');
    let errorTipo = document.getElementById('errorTipo');

    let acepto = document.getElementById('acepto');
    let errorAcepto = document.getElementById('errorAcepto');


    if (nombres.value === '') {
        errorNombres.innerHTML = 'Campo obligatorio';
    } else {
        errorNombres.innerHTML = '';
    }

    if (email.value === '') {
        errorEmail.innerHTML = 'Campo obligatorio';
    } else {

        if (isValidEmail(email.value)) {
            errorEmail.innerHTML = '';

        } else {
            errorEmail.innerHTML = 'El correo no es correcto revisalo';
        }

    }

    if (contrasena.value === '') {
        errorContrasena.innerHTML = 'Campo obligatorio';
    } else {
        if (contrasena.value.length < 7) {
            errorContrasena.innerHTML = 'Campo debe tener al menos 7 caracteres';
        } else {
            validarContrasenias();
        }
    }


    if (confirmacion.value === '') {
        errorConfirmacion.innerHTML = 'Campo obligatorio';
    } else {
        if (confirmacion.value.length < 7) {
            errorConfirmacion.innerHTML = 'Campo debe tener al menos 7 caracteres';
        } else {
            validarContrasenias();
        }
    }


    if (tipo.value == -1) {
        errorTipo.innerHTML = 'Campo obligatorio';
    } else {
        errorTipo.innerHTML = '';
    }

    if (!acepto.checked) {
        errorAcepto.innerHTML = 'Se debe aceptar los terminos';
    } else {
        errorAcepto.innerHTML = '';
    }

}

let validarContrasenias = () => {
    if (contrasena.value == confirmacion.value) {
        errorContrasena.innerHTML = '';
        errorConfirmacion.innerHTML = '';
    } else {
        errorContrasena.innerHTML = 'ambas contraseñas deben ser iguales';
        errorConfirmacion.innerHTML = 'ambas contraseñas deben ser iguales';
    }
};

let checkTerms = () => {
    let acepto = document.getElementById('acepto');
    btnRegister.disabled = !(acepto.checked);
};