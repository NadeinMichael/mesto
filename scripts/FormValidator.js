export default class FormValidator {

  constructor(config) {
    this.config = config
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

  _setEventListeners (formElement) {
  const inputList = Array.from(formElement.querySelectorAll(this.config.inputElement));
  const buttonElement = formElement.querySelector(this.config.buttonElement);

  this._toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._toggleButtonState(inputList, buttonElement);
      this._checkInputValidity(formElement, inputElement);
    });
  });
}

  enableValidation (config) {
  const formList = Array.from(document.querySelectorAll(this.config.formElement));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners(formElement);
  });
}
}

