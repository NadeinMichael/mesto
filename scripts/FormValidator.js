export default class FormValidator {

  constructor(config, formSelector) {
    this.config = config,
    this._formSelector = formSelector
  }

  _showInputError (formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(this.config.inputErrorClass);
  errorElement.textContent = errorMessage;
}

  _hideInputError (formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(this.config.inputErrorClass);
  errorElement.textContent = '';
}

  _checkInputValidity (formElement, inputElement) {

  if (!inputElement.validity.valid) {
    this._showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    this._hideInputError(formElement, inputElement);
  }
}

  _hasInvalidInput (inputList) {
  return inputList.some((inputList) => {
    return !inputList.validity.valid;
  });
}

  _toggleButtonState (inputList, buttonElement) {

  if (this._hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', 'disabled');
    buttonElement.classList.add(this.config.inactiveButtonClass);
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(this.config.inactiveButtonClass);
  }
}

  _resetValidation() {
    this._toggleButtonState(this._inputList, this._buttonElement);

    this._inputList.forEach((inputElement) => {
      this._hideInputError(this._formSelector, inputElement);
    });
  }

  _setEventListeners (formElement) {
    this._inputList = Array.from(formElement.querySelectorAll(this.config.inputElement));
    this._buttonElement = formElement.querySelector(this.config.buttonElement);

  this._toggleButtonState(this._inputList, this._buttonElement);
  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._toggleButtonState(this._inputList, this._buttonElement);
      this._checkInputValidity(formElement, inputElement);
    });
  });
}

  enableValidation () {

    this._setEventListeners(this._formSelector);
  };
}

