export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);

    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
  }

  openPopup() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keyup", this._handleEscClose);
    this._popup.addEventListener("click", this._handleOverlayClose);
  }

  closePopup() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose);
    this._popup.removeEventListener("click", this._handleOverlayClose);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.closePopup();
    }
  }

  _handleOverlayClose(event) {
    if (!event.target.closest(".popup__overlay")) {
      this.closePopup();
    }
  }

  setEventListeners() {
    this._closeButton = this._popup.querySelector(".popup__btn-close");
    this._closeButton.addEventListener("click", () => this.closePopup());
  }
}
