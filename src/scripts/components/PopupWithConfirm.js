import Popup from "./Popup.js";

class PopupWithConfirm extends Popup {
  constructor({ popupSelector, handleConfirmDelete }) {
    super(popupSelector);
    this._handleConfirmDelete = handleConfirmDelete;
  }

  openPopup(card) {
    super.openPopup();
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitBtn = this._popup.querySelector(".popup__submit");
    this._submitBtn.addEventListener("click", (event) => {
      event.preventDefault();
      this._handleConfirmDelete(this._card);
    });
  }
}

export default PopupWithConfirm;
