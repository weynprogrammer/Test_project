function getButton(n) {
  
  if (n == 0) {
    document.querySelector("#OB1").addEventListener("click", activateButton(n));
  }
  if (n == 1) {
    document.querySelector("#OB2").addEventListener("click", activateButton(n));
  }
  if (n == 2) {
    document.querySelector("#OB3").addEventListener("click", activateButton(n));
  }
  if (n == 3) {
    document.querySelector("#OB4").addEventListener("click", activateButton(n));
  }
  if (n == 4) {
    document.querySelector("#OB5").addEventListener("click", activateButton(n));
  }
  if (n == 5) {
    document.querySelector("#OB6").addEventListener("click", activateButton(n));
  }
 
}

function activateButton(n) {
  if (n == 0) {
    document.querySelector("#OB1").classList.toggle("is_active");
  }
  if (n == 1) {
    document.querySelector("#OB2").classList.toggle("is_active");
  }
  if (n == 2) {
    document.querySelector("#OB3").classList.toggle("is_active");
  }
  if (n == 3) {
    document.querySelector("#OB4").classList.toggle("is_active");
  }
  if (n == 4) {
    document.querySelector("#OB5").classList.toggle("is_active");
  }
  if (n == 5) {
    document.querySelector("#OB6").classList.toggle("is_active");
  }
}
