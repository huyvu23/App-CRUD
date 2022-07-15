function Validator(options) {
  var formElement = document.querySelector(options.form);
  console.log(formElement);
}

// định nghĩa rules:quy tắc
Validator.isRequired = function () {};
