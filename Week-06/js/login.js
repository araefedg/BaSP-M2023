// ON CLICK
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

function emailErrorFunction() {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var emailValue = emailInput.value.trim();

  if (emailValue) {
    if (!emailRegex.test(emailValue)) {
      return false;
    } else {
      return true;
    }
  }
}

function passwordErrorFunction() {
  var passwordValue = passwordInput.value.trim();
  if (passwordValue) {
    if (!passwordValue.length >= 8 || !validateCharCode(passwordValue)) {
      return false;
    } else {
      return true;
    }
  }
}

var validateInformation = function () {
  var arrayErrors = [];
  if (!emailErrorFunction()) {
    arrayErrors.push("There is an error in the email format");
  }
  if (!passwordErrorFunction()) {
    arrayErrors.push("\nThere is an error in the password format");
  }
  return arrayErrors;
};

document
  .getElementById("submit-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var emailValue = emailInput.value.trim();
    var passwordValue = passwordInput.value.trim();

    if (validateInformation() == "") {
      alert("email: " + emailValue + " " + "password: " + passwordValue);
    } else {
      alert(validateInformation());
    }
  });

//VALIDAR EMAIL

var emailError = document.getElementById("email-error");

function emailAlert() {
  var emailValue = emailInput.value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === "") {
  } else {
    if (!emailRegex.test(emailValue)) {
      emailInput.classList.add("error");
      emailError.textContent = "Wrong email format.";
    } else {
      emailInput.classList.remove("error");
      emailError.textContent = "";
    }
  }
}

emailInput.addEventListener("blur", emailAlert);

emailInput.addEventListener("focus", function () {
  emailInput.classList.remove("error");
  emailError.textContent = "";
});

//VALIDAR PASSWORD

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

function passwordAlert() {
  var passwordValue = passwordInput.value.trim();

  if (passwordValue === "") {
  } else {
    if (passwordValue.length < 8 || !validateCharCode(passwordValue)) {
      passwordInput.classList.add("error");
      passwordError.textContent = "Wrong password format.";
    } else {
      passwordInput.classList.remove("error");
      passwordError.textContent = "";
    }
  }
}

passwordInput.addEventListener("blur", passwordAlert);

passwordInput.addEventListener("focus", function () {
  passwordInput.classList.remove("error");
  passwordError.textContent = "";
});
