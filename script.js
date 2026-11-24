const form = document.getElementById("contact-form");
const successMessage = document.getElementById("form-success");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "verena_form_submit"
  });

  successMessage.classList.add("visible");
  form.reset();
});
