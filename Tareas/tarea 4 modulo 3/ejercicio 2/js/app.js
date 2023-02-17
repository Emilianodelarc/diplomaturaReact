let names = document.querySelector("#nombr");
let email = document.querySelector("#correo");
let phone = document.querySelector("#telef");
let inputs = document.querySelectorAll("input[type=text]");
let input_phone = document.querySelector('#phone')
let mensaje = document.querySelector("#mensaje");
let span = document.querySelector("#counter");

input_phone.addEventListener('input',()=>{
    phone.innerText = input_phone.value
})

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    switch (input.id) {
      case "names":
        names.innerText = input.value;
        break;
      case "email":
        email.innerText = input.value;
        break;
    }
  });
});

mensaje.addEventListener("input", () => {
  let caraters = mensaje.value;
  span.innerText = caraters.length;
});
