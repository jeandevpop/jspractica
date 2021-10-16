// alert("hola");
// const img = document.getElementById("foto");
// const img2 = document.getElementById("#fotomontana");
// img.style.height = "100px";
// img.setAttribute("style", );
const img3 = document.querySelector("#foto");
img3.style.width = "300px";

//selecciond de los li con clase de especial
const especialLi = document.querySelectorAll(".especial");

for (let i = 0; i < especialLi.length; i++) {
  const element = especialLi[i];
  element.style.border = "solid 1px red";
  console.log(element);
}

// especialLi.forEach((es) => {
//   es.style.fontSize("20px");
// });

// especialLi.style.borderStyle = "solid";
//seleccion de los bo
const btn = document.querySelectorAll(".completar");
// addEventListener('click'=>{
//     return btn
// })
btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let parent = btn.parentElement;
    console.log(parent.classList.toggle("done"));
  });
});
