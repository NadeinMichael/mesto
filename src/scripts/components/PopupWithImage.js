import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._image = this._popup.querySelector(".popup__img");
    this._caption = this._popup.querySelector(".popup__caption-img");
  }

  openPopup(link, name) {
    super.openPopup();
    this._image.src = link;
    this._image.alt = name;
    this._caption.textContent = name;
  }
}

export default PopupWithImage;
