const alumnos = [
  {
    nombre: "Juan Gomez",
    nota: 7,
  },
  {
    nombre: "Pedro Rodriguez",
    nota: 4,
  },
  {
    nombre: "Roxana García",
    nota: 8,
  },
  {
    nombre: "Luciano Lopez",
    nota: 5,
  },
  {
    nombre: "Fernanda Gimenez",
    nota: 6,
  },
  {
    nombre: "Florencia Martinez",
    nota: 10,
  },
  {
    nombre: "Raul Sanchez",
    nota: 7,
  },
  {
    nombre: "Sandra Figueroa",
    nota: 8,
  },
];

let listaAprobados = document.querySelector('#aprobados')
let listaDesaprobados = document.querySelector('#desaprobados')
let cuerpo_tabla = document.querySelector('#cuerpo')


function mostrar_Alumnos(array) {
  array.forEach((alumno, index)=>{
    let tr = document.createElement('tr')
    tr.className = 'table-primary'
    tr.innerHTML =`<th scope="row">${alumno.nombre}</th>
                  <td id="nota${index}">${alumno.nota}</td>`
    cuerpo_tabla.appendChild(tr)

    if(alumno.nota >= 7){
      document.querySelector(`#nota${index}`).style = 'color:green'
    }else{
      document.querySelector(`#nota${index}`).style = 'color:red'
    }
    
  })
}

mostrar_Alumnos(alumnos)


function filtro(array, contenedor) {
  array.forEach(alumno=> {
    let li = document.createElement('li')
    li.innerHTML = `${alumno.nombre} - nota: ${alumno.nota} `
    contenedor.appendChild(li)
  })
}

let aprobados = alumnos.filter(alumno=>alumno.nota >= 7)
let desaprobados = alumnos.filter(alumno=>alumno.nota < 7)

filtro(aprobados,listaAprobados)
filtro(desaprobados,listaDesaprobados)