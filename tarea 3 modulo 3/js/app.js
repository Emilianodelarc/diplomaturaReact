
//EJERCICIO 1
 alert('bienvenido al sistema de calculo de distancia');

for (let i = 2; i >= 0; i--) {
    alert('en caso de digitar mal Tienes ' + (i + 1) + ' oportunidades');

    let distancia = Number(prompt('Indique que distancia desea recorrer?'));
    
    if (isNaN(distancia)) {
        alert('Error. Te quedan ' + i + ' intentos.');
    } else {
        if (distancia <= 1000) {

            alert('a esa distacia deberia ir a PIE');

        } else if(distancia >= 1001 && distancia <= 10000){

            alert('a esa distacia deberia ir en BICICLETA');

        } else if(distancia >=10001  && distancia <= 30000){

            alert('a esa distacia deberia tomar un COLECTIVO');

        } else if(distancia >= 30001 && distancia <= 100000){

            alert('a esa distacia deberia ir en AUTO');
            
        }else{
            alert('a esa distacia deberia ir en AVION');
        }  
        break;
    }
}

//EJERCICIO 2

let arrayNumeros = [1, 8, -5, 6, 50, 3, -50, 80]
let maximo = 0
alert('ahora veremos que numero es mayor de una coleccion de numeros');

for (let i = 0; i < arrayNumeros.length; i++) {
    if(maximo < arrayNumeros[i]){
        maximo = arrayNumeros[i]
    }
}
alert(`El numero mayor es ${maximo}`)
       
    


    
