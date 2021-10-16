const todoImput = document.querySelector(".imput");
const btn = document.querySelector(".btn");
const lisUl = document.querySelector(".listas");

// click event listener
btn.addEventListener("click", () => {
  agregar();
  //   const newTask = document.createElement("ul");
  //   newTask.innerText = todoImput.value;
  //   lisaul.append(newTask);
  //   todoImput.value = "";
  //   console.log(todoImput.value);
});
// agregar por Enter
const body = document.querySelector("body");
body.addEventListener("keydown", (e) => {
  if (!todoImput.value) return;
  if (e.key === "Enter") {
    agregar();
    // console.log(e.key);
  }
});

//funcion para agregar elemento a la lista
function agregar() {
  if (!todoImput.value) return;
  const newTask = document.createElement("li");
  newTask.classList.add("todoItem");
  // const btnX = document.createElement("button");
  //   const boton = completar(btnX);

  //   console.log(boton);

  newTask.innerHTML = `${todoImput.value} <button class='btnx'>x</button> `;
  // console.log(newTask);
  completar(newTask);
  lisUl.appendChild(newTask);

  todoImput.value = "";
}
//funcion para botton de completar
function completar(elemento) {
  // const btnx = document.querySelectorAll(".btnx");
  // let parent = btnx.parentElement;
  // btnx.addEventListener("click", () => {
  //   parent.classList.toggle("done");
  // });
  // parent.classList.add("done");

  elemento.addEventListener("click", () => {
    elemento.classList.toggle("done");
  });
  return elemento;
  // for (const btny of btnx) {
  //   btny.addEventListener("click", () => {
  //     let parent = btny.parentElement;
  //     // parent.classList.add("done");
  //     parent;
  //   });
  //   // console.log(btn);
  // }
  //   elemento.innerHTML = "x";

  //   elemento.addEventListener("click", () => {
  //     elemento.classList.add("completar");
  //     // console.log(elemento);
  //   });
  //   return elemento;
}

const datos = {
  telefono: "809-681-2323",
  direccion: "villa olimpica",
};
const estudiante = {
  nombre: "jean carlos",
  apellidos: "nunez",
  carrera: "tec?",
  calificciones: { mitadPeriodo: 90, final: 87 },
  materias: ["base de datos", "programacions"],
};
