let cuadrado = document.querySelectorAll('span')
let mensaje = document.querySelector('#mensaje')


function cambio_fondo(color) {
    document.body.style = `background : ${color}`;
    mensaje.innerText = `Ha selecionado el color traducido al ingles : ${color}`
}

cuadrado.forEach((span)=>{
    span.addEventListener('click', ()=>{
        cambio_fondo(span.id)
    })
})

