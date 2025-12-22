const btn_open = document.querySelector("#btn_open");
const btn_close = document.querySelector("#btn_close");

const btn_open2 = document.querySelector("#btn_open2");
const btn_close2 = document.querySelector("#btn_close2");

const btn_open3 = document.querySelector("#btn_open3");
const btn_close3 = document.querySelector("#btn_close3");

/*funktion til første modal*/

btn_open.addEventListener("click", openModal);

function openModal() {
  console.log("Der er klikket");
  document.querySelector("#buy").showModal();
}

btn_close.addEventListener("click", closeModal);

function closeModal() {
  document.querySelector("#buy").close();
}

/*funktion til anden modal*/

btn_open2.addEventListener("click", openModal);

function openModal() {
  console.log("Der er klikket");
  document.querySelector("#buy2").showModal();
}

btn_close.addEventListener("click", closeModal);

function closeModal() {
  document.querySelector("#buy2").close();
}

/*funktion til tredje modal*/

btn_open3.addEventListener("click", openModal);

function openModal() {
  console.log("Der er klikket");
  document.querySelector("#buy3").showModal();
}

btn_close.addEventListener("click", closeModal);

function closeModal() {
  document.querySelector("#buy3").close();
}
