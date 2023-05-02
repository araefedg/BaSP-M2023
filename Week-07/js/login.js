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
      alert("email: " + emailValue + " " + "\npassword: " + passwordValue);
    } else {
      alert(validateInformation());
    }

    var url = `https://api-rest-server.vercel.app/login?email=${emailInput.value}&password=${passwordInput.value}`;

    fetch(url)
      .then(function (res) {
        // if (!res.ok) throw new Error(res);
        return res;
      })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (data.success) {
          alert("Login success! Received data: " + JSON.stringify(data));
          return data;
        } else {
          alert("Login failed! Received data: " + JSON.stringify(data));
          return data;
        }
      })
      .catch(function (res) {
        console.error(res);
        alert("There is an error, try again: " + JSON.stringify(res));
      });
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
      emailError.textContent = "Wrong format, try example@email.com";
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

function passwordErrorFunctionLength() {
  var passwordValue = passwordInput.value.trim();
  if (passwordValue) {
    if (passwordValue.length < 8) {
      return false;
    } else {
      return true;
    }
  }
}

function passwordErrorFunctionValidateChar() {
  var passwordValue = passwordInput.value.trim();
  if (passwordValue) {
    if (validateCharCode(passwordValue)) {
      return false;
    } else {
      return true;
    }
  }
}

var validateInformationPassword = function () {
  var arrayErrors = [];
  if (!passwordErrorFunctionLength()) {
    arrayErrors.push("Must be at least 8 characters long");
  }
  if (passwordErrorFunctionValidateChar()) {
    arrayErrors.push("\nMust have letters and numbers only");
  }
  return arrayErrors;
};

function passwordAlert() {
  var passwordValue = passwordInput.value.trim();

  if (passwordValue === "") {
  } else {
    if (validateInformationPassword() === "") {
    } else if (validateInformationPassword() !== "") {
      passwordInput.classList.add("error");
      passwordError.textContent = validateInformationPassword();
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
