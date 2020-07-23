var pantalla = document.getElementById("pantalla")
var valor_anterior = undefined;
var operacion = ''

function numero(n){
    actual = pantalla.value
    nuevo = actual + n
    pantalla.value = nuevo;
}

function mas(){
    operacion = '+'
    valor_anterior = pantalla.value;
    pantalla.value = "";
}

function multiplicacion(){
    operacion = '*'
    valor_anterior = pantalla.value;
    pantalla.value = "";
}

function menos(){
    operacion = '-'
    valor_anterior = pantalla.value;
    pantalla.value = "";
}
function division(){
    operacion = '/'
    valor_anterior = pantalla.value;
    pantalla.value = "";
}

function igual(){
    if(operacion == '+'){
        pantalla.value = parseInt(pantalla.value) + parseInt(valor_anterior);
    }

    else if(operacion == '*'){
        pantalla.value = parseInt(pantalla.value) * parseInt(valor_anterior);
    }

    else if(operacion == '-'){
        pantalla.value = parseInt(valor_anterior) - parseInt(pantalla.value);
    }

    else if(operacion == '/'){
        pantalla.value = parseInt(valor_anterior) / parseInt(pantalla.value);
    }
}

function resetear(){
	operacion = 0;
	pantalla.value = "";
}

 