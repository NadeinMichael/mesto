export default class Card {
  constructor(
    { data, userData, handleCardClick, handleLikeClick, handleDeleteClick },
    templateSelector
  ) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._data = data;
    this._userData = userData;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;

    this._element = this._getTemplate();
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".gallery__element")
      .cloneNode(true);

    return cardElement;
  }

  createCard() {
    this._setEventListeners();
    this.removeTrashButton();
    this.updateLikesCounter(this._data);

    this._image.src = this._link;
    this._image.alt = this._name;
    const titleCard = this._element.querySelector(".gallery__title");
    titleCard.textContent = this._name;

    return this._element;
  }

  checkUserLike() {
    if (this._data.likes.some((like) => like._id === this._userData._id)) {
      return true;
    }
    return false;
  }

  updateLikesCounter(data) {
    this._data = data;
    this._likeCounter.textContent = data.likes.length;
    if (this.checkUserLike()) {
      this._btnLike.classList.add("btn-like_active");
    } else {
      this._btnLike.classList.remove("btn-like_active");
    }
  }

  removeTrashButton() {
    if (this._data.owner._id !== this._userData._id) {
      this._trashBtn.remove();
    }
  }

  _setEventListeners() {
    this._likeCounter = this._element.querySelector(".gallery__like-counter");
    this._btnLike = this._element.querySelector(".btn-like");
    this._trashBtn = this._element.querySelector(".btn-trash");
    this._image = this._element.querySelector(".gallery__img");

    this._trashBtn.addEventListener("click", () => {
      this._handleDeleteClick(this._element, this._data._id);
    });

    this._btnLike.addEventListener("click", () => {
      this._handleLikeClick(this._data._id);
    });

    this._image.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);
    });
  }
}
