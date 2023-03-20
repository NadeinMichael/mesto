import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._inputList = Array.from(this._popup.querySelectorAll(".popup__text"));
    this._form = this._popup.querySelector(".popup__form");
  }

  _getInputValues() {
    this._inputListValues = {};

    this._inputList.forEach(
      (input) => (this._inputListValues[input.name] = input.value)
    );
    return this._inputListValues;
  }

  closePopup() {
    super.closePopup();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._inputValues = this._getInputValues();
      this._submitForm(this._inputValues);
      this.closePopup();
    });
  }
}

export default PopupWithForm;
