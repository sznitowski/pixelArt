const btnCrearGrilla = document.getElementById("btnInput");
const btnInputFondo = document.getElementById("btnInputFondo");
const btnBorrar = document.getElementById("btnBorrar");
const btnLapiz = document.getElementById("btnLapiz");

const container = document.getElementById("container");

const inputNumber1 = document.getElementById("inputNumber1");
const inputNumber2 = document.getElementById("inputNumber2");
const inputColor = document.getElementById("inputColor");
const inputColorFondo = document.getElementById("inputColorFondo");

const checkboxBordes = document.getElementById("bordesGrilla");
const tamanio = document.getElementById("tamanio");

let modo = "";
// función del lapiz, y mostramos si esta o no seleccionado //
btnLapiz.addEventListener("click", function () {
  modo = "lapiz";
  btnLapiz.classList.add("modoSeleccionado");
  btnBorrar.classList.remove("modoSeleccionado");
});
// función de la goma, y mostramos si esta o no seleccionado //
btnBorrar.addEventListener("click", function () {
  modo = "goma";
  btnBorrar.classList.add("modoSeleccionado");
  btnLapiz.classList.remove("modoSeleccionado");
});
// creamos grilla //
btnCrearGrilla.addEventListener("click", function () {
  // Vaciamos el html //
  container.innerHTML = "";
  // Calculamos la cantidad de grillas, del producto de filas y columnas //
  const cantidadDeGrilla = inputNumber1.value * inputNumber2.value;

  for (let i = 0; i < cantidadDeGrilla; i++) {
    // Creamos el elemento div //
    const grilla = document.createElement("div");
    grilla.classList.add("grilla");
    grilla.style.background = inputColorFondo.value;

    // evento de pintado o borrado //
    grilla.addEventListener("click", function () {
      if (modo == "goma") {
        grilla.classList.remove("pintado");
        this.style.background = inputColorFondo.value;
      }

      if (modo == "lapiz") {
        grilla.classList.add("pintado");
        this.style.background = inputColor.value;
      }
    });
    container.appendChild(grilla);
  }
});

// pintar fondo //
btnInputFondo.addEventListener("click", function () {
  const listaDeGrilla = document.querySelectorAll(".grilla:not(.pintado)");
  for (let i = 0; i < listaDeGrilla.length; i++) {
    listaDeGrilla[i].style.background = inputColorFondo.value;
  }
});

// Evento del checkbox para mostrar o ocultar los bordes de las grillas. //
checkboxBordes.addEventListener("click", function () {
  const grilla = document.querySelectorAll(".grilla");
  for (let i = 0; i < grilla.length; i++) {
    if (this.checked) {
      grilla[i].style.border = "1px solid black";
    } else {
      grilla[i].style.border = `1px solid ${grilla[i].style.background}`;
    }
  }
});

// cambiar tamaño de grilla //
tamanio.addEventListener("input", function () {
  const arrayCajas = document.querySelectorAll(".grilla");
  for (let i = 0; i < arrayCajas.length; i++) {
    arrayCajas[i].style.width = tamanio.value + "px";
    arrayCajas[i].style.height = tamanio.value + "px";
  }
});