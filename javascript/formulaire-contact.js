document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  validationForm();
});

// créer la fonction pour valider le formulaire

function validationForm() {
  // recupérer les elements inputs
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // recupérer les divs vide
  let error_username = document.getElementById("error_username");
  let error_email = document.getElementById("error_email");
  let error_message = document.getElementById("error_message");

  isValid = true;

  // verifier le nom
  if (name === "") {
    error_username.innerHTML = "Veuillez entrer votre nom.";
    isValid = false;
  }

  // verifier l'adresse mail
  if (email === "") {
    error_email.innerHTML = "Veuillez entrer votre email.";
    isValid = false;
  } else if (!email.includes("@")) {
    error_email.innerHTML = "Veuillez entrer une adresse e-mail valide.";
    isValid = false;
  }

  // verifier le message
  if (message === "") {
    error_message.innerHTML = "Veuillez entrer un message.";
    isValid = false;
  }

  if (isValid === true) {
    alert("La demande de contact a bien été envoyée.");
  }

  // vider les inputs
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
