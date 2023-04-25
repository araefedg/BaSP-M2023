//TODOS LOS CAMPOS REQUERIDOS
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

function requiredValidator(emailInput, passwordInput) {
  if (passwordInput.value === "" || emailInput.value === "") {
    alert("faltan uno o mas datos");
    return false;
  }
}
//VALIDAR EMAIL
var emailError = document.getElementById("email-error");

emailInput.addEventListener("blur", function () {
  var emailValue = emailInput.value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === "") {
  } else {
    if (!emailRegex.test(emailValue)) {
      emailInput.classList.add("error");
      emailError.textContent = "El correo electrónico no es válido.";
      alert(emailError.textContent);
    } else {
      emailInput.classList.remove("error");
      emailError.textContent = "";
    }
  }
});

emailInput.addEventListener("focus", function () {
  emailInput.classList.remove("error");
  emailError.textContent = "";
});

//VALIDAR CONTRASEÑA

function validateCharCode(passwordValue) {
  for (var i = 0; i < passwordValue.length; i++) {
    var charCode = passwordValue.charCodeAt(i);
    if (
      !(charCode > 47 && charCode < 58) && 
      !(charCode > 64 && charCode < 91) && 
      !(charCode > 96 && charCode < 123) 
    ) {
      return false; 
    }
  }
  return true;
}

var passwordError = document.getElementById("password-error");

passwordInput.addEventListener("blur", function () {
  var passwordValue = passwordInput.value.trim();

  if (passwordValue === "") {
  } else {
    if (passwordValue.length < 8 || !validateCharCode(passwordValue)) {
      passwordInput.classList.add("error");
      passwordError.textContent = "La contraseña no es válida.";
      alert(passwordError.textContent);
    } else {
      passwordInput.classList.remove("error");
      passwordError.textContent = "";
    }
  }
});

passwordInput.addEventListener("focus", function () {
  passwordInput.classList.remove("error");
  passwordError.textContent = "";
});

//////////////////////

// AL HACER CLICK

document
  .getElementById("submit-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    requiredValidator(emailInput, passwordInput);
    var emailValue = emailInput.value.trim();
    var passwordValue = passwordInput.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      emailRegex.test(emailValue) &&
      passwordValue.length >= 8 &&
      validateCharCode(passwordValue)
    ) {
      alert("email: " + emailValue + " " + "password: " + passwordValue);
    }
  });
