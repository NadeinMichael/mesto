// Форма редактирования профиля
export const popupFormEdit = document.forms["popup-form_edit"];
export const userNameInput = popupFormEdit.querySelector('[name="popup-name"]');
export const userJobInput = popupFormEdit.querySelector(
  '[name="popup-profession"]'
);
export const profileProfession = document.querySelector(".profile__profession");
export const editProfileButton = document.querySelector(
  ".profile__edit-button"
);
export const profileName = document.querySelector(".profile__name");
// popup добавления картинки
export const addPhotoButton = document.querySelector(".profile__add-button");
// находим форму для добавления фото
export const popupFormPhoto = document.forms["popup-form_photo"];

export const validationConfig = {
  formElement: ".popup__form",
  inputElement: ".popup__text",
  buttonElement: ".popup__submit",
  inputErrorClass: "popup__text_type_error",
  inactiveButtonClass: "popup__submit_disabled",
};

export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
