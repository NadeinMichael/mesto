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

    this._popup.addEventListener("click", (event) => {
      event.preventDefault();
      this._handleConfirmDelete(this._card);
    });
  }
}

export default PopupWithConfirm;
