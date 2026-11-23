const form = document.getElementById("contact-form");
const successMessage = document.getElementById("form-success");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  successMessage.classList.add("visible");

  form.reset();

});
