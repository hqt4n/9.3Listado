addEventListener("DOMContentLoaded", () => {
  const agregarBTN = document.getElementById("agregar");
  const eliminarBTN = document.getElementById("limpiar");

  agregarBTN.addEventListener("click", handleAdd);
  eliminarBTN.addEventListener("click", handleDelete);
  showData(JSON.parse(localStorage.getItem("data")));
});

const handleAdd = () => {
  let itemInput = document.getElementById("item").value;
  let data = JSON.parse(localStorage.getItem("data"));
  if (data == null) {
    data = [];
  }
  data.push(itemInput);
  localStorage.setItem("data", JSON.stringify(data));
  showData(data);
  document.getElementById("item").value = "";
};

const handleDelete = () => {
  localStorage.removeItem("data");
  showData(JSON.parse(localStorage.getItem("data")));
};

const showData = (data) => {
  let htmlContentToAppend = "";
  if (data != null) {
    for (const item of data) {
      htmlContentToAppend += ` <li>${item}</li>`;
    }
  } else {
    htmlContentToAppend += ` <li>No hay data</li>`;
  }
  document.getElementById("contenedor").innerHTML = htmlContentToAppend;
};
/*

const testData = ["Hola", "chau", "asdasd"];  
localStorage.setItem("data", JSON.stringify(testData));
let data = JSON.parse(localStorage.getItem("data"));
console.log(data);

*/
