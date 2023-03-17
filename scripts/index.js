import { initialCards } from "./cards.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import PopupWithImage from "./components/PopupWithImage.js";
// Форма редактирования профиля
// const popupEditProfile = document.querySelector(".popup_edit-profile");
const popupFormEdit = document.forms["popup-form_edit"];
const userNameInput = popupFormEdit.querySelector('[name="popup-name"]');
const userJobInput = popupFormEdit.querySelector('[name="popup-profession"]');
const closePopupButtons = document.querySelectorAll(".popup__btn-close");
const profileProfession = document.querySelector(".profile__profession");
const editProfileButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
// popup добавления картинки
const popupAddPhoto = document.querySelector(".popup_add-photo");
const addPhotoButton = document.querySelector(".profile__add-button");
// попап фулскрина
const fullscreenImagePopup = document.querySelector(".popup_fullscreen-photo");
const fullscreenImage = document.querySelector(".popup__img");
const fullscreenCaption = document.querySelector(".popup__caption-img");
// находим лист, куда вставлять карточки
const gallery = document.querySelector(".gallery");
// находим инпуты в попапе добавления карточки
const placeNameInput = document.querySelector('[name="popup-place"]');
const placeLinkInput = document.querySelector('[name="popup-link"]');
// находим форму для добавления фото
const popupFormPhoto = document.forms["popup-form_photo"];

const allPopuplist = document.querySelectorAll(".popup");

const validationConfig = {
  formElement: ".popup__form",
  inputElement: ".popup__text",
  buttonElement: ".popup__submit",
  inputErrorClass: "popup__text_type_error",
  inactiveButtonClass: "popup__submit_disabled",
};

const validatorFormEdit = new FormValidator(validationConfig, popupFormEdit);
validatorFormEdit.enableValidation();

const validatorFormPhoto = new FormValidator(validationConfig, popupFormPhoto);
validatorFormPhoto.enableValidation();

const popupAddCard = new PopupWithForm(
  ".popup_add-photo",
  submitPopupFormPhoto
);
popupAddCard.setEventListeners();

const popupEditProfile = new PopupWithForm(
  ".popup_edit-profile",
  submitPopupFormEdit
);
popupEditProfile.setEventListeners();

const popupWithImage = new PopupWithImage(".popup_fullscreen-photo");
popupWithImage.setEventListeners();

const userInfo = new UserInfo({
  userName: profileName,
  userDescr: profileProfession,
});

// _________________________________FUNCTIONS________________________________________

// function closePopup(popup) {
//   popup.classList.remove("popup_opened");

//   document.removeEventListener("keydown", closePopupWithEsc);
// }

const handleCardClick = (link, name) => {
  popupWithImage.openPopup(link, name);
};

const createCard = (data, templateSelector, handleCardClick) => {
  const card = new Card(data, templateSelector, handleCardClick);
  const cardElement = card.createCard();

  return cardElement;
};

const sectionWithCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item, "#card-template", handleCardClick);
      sectionWithCards.addItem(cardElement);
    },
  },
  ".gallery"
);

sectionWithCards.renderItems();

// function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keydown", closePopupWithEsc);
// }

function submitPopupFormPhoto(evt) {
  evt.preventDefault();

  const card = new Card(
    { name: placeNameInput.value, link: placeLinkInput.value },
    "#card-template",
    handleCardClick
  );
  const cardElement = card.createCard();

  sectionWithCards.addItem(cardElement);

  this.closePopup();
}

// function closePopupWithEsc(e) {
//   const escKey = e.key === "Escape";
//   if (escKey) {
//     const popupActive = document.querySelector(".popup_opened");
//     closePopup(popupActive);
//   }
// }

// function openPopupAddPhoto() {
//   openPopup(popupAddPhoto);

//   validatorFormPhoto.resetValidation();
// }

// function openPopupEditProfile() {
//   openPopup(popupEditProfile);

// userNameInput.value = profileName.textContent;
// userJobInput.value = profileProfession.textContent;

//   validatorFormEdit.resetValidation();
// }

function submitPopupFormEdit(evt) {
  evt.preventDefault();
  userInfo.setUserInfo(userNameInput.value, userJobInput.value);
  // profileName.textContent = userNameInput.value;
  // profileProfession.textContent = userJobInput.value;

  this.closePopup();
}

// _______________________________LISTENERS____________________________________________

// popupFormPhoto.addEventListener("submit", submitPopupFormPhoto);

addPhotoButton.addEventListener("click", () => {
  popupAddCard.openPopup();
  validatorFormPhoto.resetValidation();
});

editProfileButton.addEventListener("click", () => {
  const userInform = userInfo.getUserInfo();
  userNameInput.value = userInform.name;
  userJobInput.value = userInform.descr;
  popupEditProfile.openPopup();
  validatorFormEdit.resetValidation();
});

// closePopupButtons.forEach((el) => {
//   const currentPopup = el.closest(".popup");
//   el.addEventListener("click", () => closePopup(currentPopup));
// });

// popupFormEdit.addEventListener("submit", submitPopupFormEdit);

// allPopuplist.forEach((el) => {
//   el.addEventListener("click", function (e) {
//     if (!e.target.closest(".popup__overlay")) {
//       closePopup(el);
//     }
//   });
// });
