//TODOS LOS CAMPOS REQUERIDOS

var nameInput = document.getElementById("name");
var lastNameInput = document.getElementById("lastName");
var dniInput = document.getElementById("dni");
var birthDateInput = document.getElementById("birthDate");
var phoneInput = document.getElementById("phone");
var addressInput = document.getElementById("address");
var locationInput = document.getElementById("location");
var postCodeInput = document.getElementById("postCod");
var emailInput = document.getElementById("email");
var password1Input = document.getElementById("password1");
var password2Input = document.getElementById("password2");

function requiredValidator(
  nameInput,
  lastNameInput,
  dniInput,
  birthDateInput,
  phoneInput,
  addressInput,
  locationInput,
  postCodeInput,
  emailInput,
  password1Input,
  password2Input
) {
  if (
    nameInput.value === "" ||
    lastNameInput.value === "" ||
    dniInput.value === "" ||
    birthDateInput.value === "" ||
    phoneInput.value === "" ||
    addressInput.value === "" ||
    locationInput.value === "" ||
    postCodeInput.value === "" ||
    emailInput.value === "" ||
    password1Input.value === "" ||
    password2Input.value === ""
  ) {
    alert("faltan uno o mas datos");
    return false;
  }
}

document
  .getElementById("sing-up-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    requiredValidator(
      nameInput,
      lastNameInput,
      dniInput,
      birthDateInput,
      phoneInput,
      addressInput,
      locationInput,
      postCodeInput,
      emailInput,
      password1Input,
      password2Input
    );
  });

//VALIDAR NAME
//Nombre: Solo letras y debe tener más de 3 letras.

var nameValue = nameInput.value;

function validateCharCodeNameAndLastName(nameValue) {
  for (var i = 0; i < nameValue.length; i++) {
    var charCode = nameValue.charCodeAt(i);
    if (
      charCode > 47 &&
      charCode < 58 && // numeric (0-9)
      !(charCode > 64 && charCode < 91) && // upper alpha (A-Z)
      !(charCode > 96 && charCode < 123) // lower alpha (a-z)
    ) {
      return false; // non-alphanumeric character found
    }
  }
  return true;
}

var nameError = document.getElementById("name-error");

nameInput.addEventListener("blur", function () {
  nameValue = nameInput.value.trim();

  if (nameValue === "") {
  } else {
    if (!validateCharCodeNameAndLastName(nameValue) || nameValue.length < 3) {
      nameInput.classList.add("error");
      nameError.textContent = "El nombre no es válido.";
      alert(nameError.textContent);
    } else {
      nameInput.classList.remove("error");
      nameError.textContent = "";
    }
  }
});

nameInput.addEventListener("focus", function () {
  nameInput.classList.remove("error");
  nameError.textContent = "";
});

//VALIDAR LAST NAME
//Apellido: Solo letras y debe tener más de 3 letras.

var lastNameValue = lastNameInput.value;

var lastNameError = document.getElementById("last-name-error");

lastNameInput.addEventListener("blur", function () {
  lastNameValue = lastNameInput.value.trim();

  if (lastNameValue === "") {
  } else {
    if (
      !validateCharCodeNameAndLastName(lastNameValue) ||
      lastNameValue.length < 3
    ) {
      lastNameInput.classList.add("error");
      lastNameError.textContent = "El apellido no es válido.";
      alert(lastNameError.textContent);
    } else {
      lastNameInput.classList.remove("error");
      lastNameError.textContent = "";
    }
  }
});

lastNameInput.addEventListener("focus", function () {
  lastNameInput.classList.remove("error");
  lastNameError.textContent = "";
});

//VALIDAR DNI
//DNI: Solo números y debe tener más de 7 números.
var dniValue = dniInput.value;

function validateCharCodeDNI(dniValue) {
  for (var i = 0; i < dniValue.length; i++) {
    var charCode = dniValue.charCodeAt(i);
    if (charCode < 48 || charCode > 57) {
      // numeric (0-9)
      return false; // non-numeric character found
    }
  }
  return true;
}

var dniError = document.getElementById("dni-error");

dniInput.addEventListener("blur", function () {
  dniValue = dniInput.value.trim();

  if (dniValue === "") {
  } else {
    if (!validateCharCodeDNI(dniValue) || dniValue.length < 7) {
      dniInput.classList.add("error");
      dniError.textContent = "El DNI no es válido.";
      alert(dniError.textContent);
    } else {
      dniInput.classList.remove("error");
      dniError.textContent = "";
    }
  }
});

dniInput.addEventListener("focus", function () {
  dniInput.classList.remove("error");
  dniError.textContent = "";
});

//VALIDAR FECHA DE NACIMIENTO
//Fecha de Nacimiento: Con formato dd/mm/aaaa.

birthDateInput.addEventListener("change", function () {
  var parts = birthDateInput.value.split("-");
  console.log(parts);
  if (parts.length === 3) {
    var year = parts[0];
    var month = parts[1];
    var day = parts[2];

    if (day.length === 2 && month.length === 2 && year.length === 4) {
      var newDate = day + "/" + month + "/" + year;
      birthDateInput.value = newDate;
      console.log(birthDateInput.value);
    }
  }
});

//VALIDAR TELEFONO
//Teléfono: Solo números y debe tener 10 números.

var phoneValue = phoneInput.value;

function validateCharCodePhone(phoneValue) {
  for (var i = 0; i < phoneValue.length; i++) {
    var charCode = phoneValue.charCodeAt(i);
    if (charCode < 48 || charCode > 57) {
      // numeric (0-9)
      return false; // non-numeric character found
    }
  }
  return true;
}

var phoneError = document.getElementById("phone-error");

phoneInput.addEventListener("blur", function () {
  phoneValue = phoneInput.value.trim();

  if (phoneValue === "") {
  } else {
    if (!validateCharCodePhone(phoneValue) || phoneValue.length < 10) {
      phoneInput.classList.add("error");
      phoneError.textContent = "El teléfono no es válido.";
      alert(phoneError.textContent);
    } else {
      phoneInput.classList.remove("error");
      phoneError.textContent = "";
    }
  }
});

phoneInput.addEventListener("focus", function () {
  phoneInput.classList.remove("error");
  phoneError.textContent = "";
});

//VALIDAR CODIGO POSTAL
//Código Postal: Solo números y debe tener entre 4 y 5 números.

var postCodeValue = postCodeInput.value;

function validateCharCodePostCode(postCodeValue) {
  for (var i = 0; i < postCodeValue.length; i++) {
    var charCode = postCodeValue.charCodeAt(i);
    if (charCode < 48 || charCode > 57) {
      // numeric (0-9)
      return false; // non-numeric character found
    }
  }
  return true;
}

var postCodeError = document.getElementById("post-code-error");

postCodeInput.addEventListener("blur", function () {
  postCodeValue = postCodeInput.value.trim();

  if (postCodeValue === "") {
  } else {
    if (
      !validateCharCodePostCode(postCodeValue) ||
      postCodeValue.length < 4 ||
      postCodeValue.length > 5
    ) {
      postCodeInput.classList.add("error");
      postCodeError.textContent = "El código postal no es válido.";
      alert(postCodeError.textContent);
    } else {
      postCodeInput.classList.remove("error");
      postCodeError.textContent = "";
    }
  }
});

postCodeInput.addEventListener("focus", function () {
  postCodeInput.classList.remove("error");
  postCodeError.textContent = "";
});

// VALIDAR EMAIL
//Email: Debe tener un formato de email válido.

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
//Contraseña: Al menos 8 caracteres, formados por letras y números.
// función para chequear que sean solo números o letras
function validateCharCode(password1Value) {
  for (var i = 0; i < password1Value.length; i++) {
    var charCode = password1Value.charCodeAt(i);
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

//VALIDAR CONTRASEÑA REPETIDA
//Repetir Contraseña: Al menos 8 caracteres, formados por letras y números.

var password1Error = document.getElementById("password1-error");
var password2Input = document.getElementById("password2");
var password2Error = document.getElementById("password2-error");

function validatePasswords() {
  var password1Value = password1Input.value.trim();
  var password2Value = password2Input.value.trim();

  if (password1Value === "" || password2Value === "") {
    return false;
  }

  if (password1Value !== password2Value) {
    password2Input.classList.add("error");
    password2Error.textContent = "Las contraseñas no coinciden.";
    alert(password2Error.textContent);
    return false;
  }

  if (password1Value.length < 8 || !validateCharCode(password1Value)) {
    password1Input.classList.add("error");
    password1Error.textContent = "La contraseña no es válida.";
    alert(password1Error.textContent);
    return false;
  }

  password1Input.classList.remove("error");
  password1Error.textContent = "";
  password2Input.classList.remove("error");
  password2Error.textContent = "";

  return true;
}

password1Input.addEventListener("blur", validatePasswords);
password2Input.addEventListener("blur", validatePasswords);

password1Input.addEventListener("focus", function () {
  password1Input.classList.remove("error");
  password1Error.textContent = "";
});

password2Input.addEventListener("focus", function () {
  password2Input.classList.remove("error");
  password2Error.textContent = "";
});

//VALIDAR DIRECCION
//Dirección: Al menos 5 caracteres con letras, números y un espacio en el medio.
var addressValue = addressInput.value;

//VALIDAR LOCALIDAD
//Localidad: Texto alfanumérico y debe tener más de 3 letras.
