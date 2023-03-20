export default class Card {
  constructor(data, templateSelector, openFullScreenPopup) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openFullScreenPopup = openFullScreenPopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".gallery__element")
      .cloneNode(true);

    return cardElement;
  }

  _removeElement() {
    this._element.remove();
    this._element = null;
  }

  _toggleLikeButton() {
    this._btnLike.classList.toggle("btn-like_active");
  }

  _setEventListeners() {
    this._element.querySelector(".btn-trash").addEventListener("click", () => {
      this._removeElement();
    });

    this._btnLike = this._element.querySelector(".btn-like");
    this._btnLike.addEventListener("click", () => {
      this._toggleLikeButton();
    });

    this._element
      .querySelector(".gallery__img")
      .addEventListener("click", () => {
        this._openFullScreenPopup(this._link, this._name);
      });
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const photoCard = this._element.querySelector(".gallery__img");
    photoCard.src = this._link;
    photoCard.alt = this._name;
    const titleCard = this._element.querySelector(".gallery__title");
    titleCard.textContent = this._name;

    return this._element;
  }
}
