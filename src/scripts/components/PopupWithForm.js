import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSubmitClick }) {
    super(popupSelector);
    this._handleSubmitClick = handleSubmitClick;
    this._inputList = Array.from(this._popup.querySelectorAll(".popup__text"));
    this._form = this._popup.querySelector(".popup__form");
    this._submitBtn = this._popup.querySelector(".popup__submit");
    this._submitBtnText = this._submitBtn.textContent;
  }

  _getInputValues() {
    this._inputListValues = {};

    this._inputList.forEach(
      (input) => (this._inputListValues[input.name] = input.value)
    );
    return this._inputListValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  renderLoading(isLoading, loadingText = "Сохранение...") {
    if (isLoading) {
      this._submitBtn.textContent = loadingText;
    } else {
      this._submitBtn.textContent = this._submitBtnText;
    }
  }

  closePopup() {
    super.closePopup();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitClick(this._getInputValues());
    });
  }
}

export default PopupWithForm;
