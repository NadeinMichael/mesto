import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._submitForm = submitForm;
  }

  closePopup() {
    super.closePopup();
    this._popup.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", this._submitForm);
  }
}

export default PopupWithForm;
