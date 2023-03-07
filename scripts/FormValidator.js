export default class FormValidator {

  constructor(config, currentForm) {
    this.config = config,
    this._currentForm = currentForm
  }

  _showInputError (inputElement, errorMessage) {
  const errorElement = this._currentForm.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(this.config.inputErrorClass);
  errorElement.textContent = errorMessage;
}

  _hideInputError (inputElement) {
  const errorElement = this._currentForm.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(this.config.inputErrorClass);
  errorElement.textContent = '';
}

  _checkInputValidity (inputElement) {

  if (!inputElement.validity.valid) {
    this._showInputError(inputElement, inputElement.validationMessage);
  } else {
    this._hideInputError(inputElement);
  }
}

  _hasInvalidInput () {
  return this._inputList.some((input) => {
    return !input.validity.valid;
  });
}

  _toggleButtonState () {

  if (this._hasInvalidInput()) {
    this._buttonElement.setAttribute('disabled', 'disabled');
    this._buttonElement.classList.add(this.config.inactiveButtonClass);
  } else {
    this._buttonElement.removeAttribute('disabled');
    this._buttonElement.classList.remove(this.config.inactiveButtonClass);
  }
}

  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  _setEventListeners () {
    this._inputList = Array.from(this._currentForm.querySelectorAll(this.config.inputElement));
    this._buttonElement = this._currentForm.querySelector(this.config.buttonElement);

  this._toggleButtonState();
  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._toggleButtonState();
      this._checkInputValidity(inputElement);
    });
  });
}

  enableValidation () {

    this._setEventListeners();
  };
}

