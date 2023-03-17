import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._submitForm = submitForm;
  }

  _getInputValues() {
    this._inputListValues = {};
    this._inputList = Array.from(this._popup.querySelectorAll(".popup__text"));

    this._inputList.forEach(
      (input) => (this._inputListValues[input.name] = input.value)
    );

    return this._inputListValues;
  }

  closePopup() {
    super.closePopup();
    this._form = this._popup.querySelector(".popup__form");
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", this._submitForm);
    this._popup
      .querySelector(".popup__submit")
      .addEventListener("click", () => {
        this._submitForm(event);
      });
  }
}

export default PopupWithForm;
