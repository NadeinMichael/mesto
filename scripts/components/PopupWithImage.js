import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
  }

  openPopup(link, name) {
    super.openPopup();
    this._popup.querySelector(".popup__img").src = link;
    this._popup.querySelector(".popup__img").alt = name;
    this._popup.querySelector(".popup__caption-img").textContent = name;
  }
}

export default PopupWithImage;
