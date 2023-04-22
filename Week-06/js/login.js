//REQUIRED
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

function requiredValidator(emailInput, passwordInput) {
  if (passwordInput.value === "" || emailInput.value === "") {
    alert("falta un dato");
    return false;
  }
}

function validateCharCode(passwordValue) {
  for (let i = 0; i < passwordValue.length; i++) {
    const charCode = passwordValue.charCodeAt(i);
    if (
      !(charCode > 47 && charCode < 58) && // numeric (0-9)
      !(charCode > 64 && charCode < 91) && // upper alpha (A-Z)
      !(charCode > 96 && charCode < 123) // lower alpha (a-z)
    ) {
      return false; // non-alphanumeric character found
    }
  }
  return true;
}

document.getElementById("submit-button").addEventListener("click", function () {
  console.log("entro a la funcion");
  requiredValidator(emailInput, passwordInput); 
  var emailValue = emailInput.value.trim();
  var passwordValue = passwordInput.value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
  if (
    emailRegex.test(emailValue) ||
    passwordValue.length >= 8 ||
    validateCharCode(passwordValue)
  ) {
    console.log("entro a la funcion 2");
    alert("email: ", emailInput.value, "password: ", passwordInput.value);
  }
});

//VALIDAR EMAIL

var emailError = document.getElementById("email-error");

emailInput.addEventListener("blur", function () {
  var emailValue = emailInput.value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    emailInput.classList.add("error");
    emailError.textContent = "El correo electrónico no es válido.";
    alert(emailError.textContent);
  } else {
    emailInput.classList.remove("error");
    emailError.textContent = "";
  }
});

emailInput.addEventListener("focus", function () {
  emailInput.classList.remove("error");
  emailError.textContent = "";
});

//VALIDAR CONTRASEÑA

var passwordError = document.getElementById("password-error");

passwordInput.addEventListener("blur", function () {
  var passwordValue = passwordInput.value.trim();
  console.log(passwordValue);
  if (passwordValue.length < 8) {
    console.log("too short");
    return false; // password too short
  }
  for (let i = 0; i < passwordValue.length; i++) {
    const charCode = passwordValue.charCodeAt(i);
    if (
      !(charCode > 47 && charCode < 58) && // numeric (0-9)
      !(charCode > 64 && charCode < 91) && // upper alpha (A-Z)
      !(charCode > 96 && charCode < 123) // lower alpha (a-z)
    ) {
      console.log("false");
      return false; // non-alphanumeric character found
    }
  }
  console.log("true");
  return true;
});

passwordInput.addEventListener("focus", function () {
  passwordInput.classList.remove("error");
  passwordError.textContent = "";
});

document
  .getElementById("submit-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });
