const validationConfig = {
  formElement: '.popup__form',
  inputElement: '.popup__text',
  buttonElement: '.popup__submit',
  inputErrorClass: 'popup__text_type_error',
  inactiveButtonClass: 'popup__submit_disabled',
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputList) => {
    return !inputList.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {

  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', 'disabled');
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
  }
};

const setEventListeners = (formElement) => {
  console.log(formElement);
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputElement));
  const buttonElement = formElement.querySelector(validationConfig.buttonElement);

  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      toggleButtonState(inputList, buttonElement);
      checkInputValidity(formElement, inputElement);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formElement));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation(validationConfig);
