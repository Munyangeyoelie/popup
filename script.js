// variable
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const modalCantainer = document.getElementById("modal-container");

//functionality
openBtn.addEventListener("click", function () {
  modalCantainer.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  modalCantainer.style.display = "none";
});
window.addEventListener("click", function (e) {
  if (e.target == modalCantainer) {
    modalCantainer.style.display = "none";
  }
});
