import "./index.css";
import {
  popupFormEdit,
  userNameInput,
  userJobInput,
  profileProfession,
  editProfileButton,
  profileName,
  addPhotoButton,
  popupFormPhoto,
  validationConfig,
  initialCards,
} from "./scripts/utils/constants.js";
import Card from "./scripts/components/Card.js";
import FormValidator from "./scripts/components/FormValidator.js";
import Section from "./scripts/components/Section.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
import UserInfo from "./scripts/components/UserInfo.js";
import PopupWithImage from "./scripts/components/PopupWithImage.js";

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

// _________________________________FUNCTIONS________________________________________

function submitPopupFormPhoto(inputValues) {
  const cardElement = createCard(
    { name: inputValues["popup-place"], link: inputValues["popup-link"] },
    "#card-template",
    handleCardClick
  );
  sectionWithCards.addItem(cardElement);
}

function submitPopupFormEdit(inputValues) {
  userInfo.setUserInfo(
    inputValues["popup-name"],
    inputValues["popup-profession"]
  );
}

// _______________________________LISTENERS____________________________________________

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
