let btn = document.querySelector("#orderbutton");

btn.addEventListener("click", active);

function active() {
  btn.classList.toggle("is_active");
}