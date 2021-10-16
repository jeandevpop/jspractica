const colors = [
  "#FAFF00",
  "#FF3F00",
  "#8E2657",
  "#EEEEEE",
  "#B980F0",
  "#FE9898",
];
const h1 = document.querySelector("h1");

for (const color of colors) {
  //creamos el dive que lleva los colores
  const colorDiv = document.createElement("div");
  colorDiv.classList.add("divC");
  colorDiv.style.backgroundColor = `${color}`;
  // seleccionamos el elemento al cual lo apend y lo agregamos
  const parentdv = document.querySelector("div.dv");
  parentdv.append(colorDiv);
  // agregamos un eventlistener
  colorDiv.addEventListener("click", () => {
    h1.style.color = color;
  });
  //   console.log(color, colorDiv, parentdv);
}
