import "./index.css";
import {
  popupFormEdit,
  userNameInput,
  userJobInput,
  profileProfession,
  profileAvatar,
  editProfileButton,
  editAvatarButton,
  profileName,
  addPhotoButton,
  popupFormPhoto,
  popupAvatarEdit,
  validationConfig,
} from "./scripts/utils/constants.js";
import Card from "./scripts/components/Card.js";
import FormValidator from "./scripts/components/FormValidator.js";
import Section from "./scripts/components/Section.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
import PopupWithConfirm from "./scripts/components/PopupWithConfirm.js";
import UserInfo from "./scripts/components/UserInfo.js";
import PopupWithImage from "./scripts/components/PopupWithImage.js";
import { api } from "./scripts/components/Api.js";

const user = new UserInfo({
  userName: profileName,
  userAbout: profileProfession,
  userAvatar: profileAvatar,
});

const validatorFormEdit = new FormValidator(validationConfig, popupFormEdit);
validatorFormEdit.enableValidation();

const validatorFormPhoto = new FormValidator(validationConfig, popupFormPhoto);
validatorFormPhoto.enableValidation();

const validatorAvatarEdit = new FormValidator(
  validationConfig,
  popupAvatarEdit
);
validatorAvatarEdit.enableValidation();

const popupAddCard = new PopupWithForm({
  popupSelector: ".popup_add-photo",
  handleSubmitClick: (data) => {
    api
      .addNewCard({ name: data["popup-place"], link: data["popup-link"] })
      .then((data) => {
        const cardElement = createCard(data, user.getInfo(), "#card-template");
        sectionWithCards.addNewItem(cardElement);
      })
      .catch((err) => console.log(err));
  },
});

popupAddCard.setEventListeners();

const popupEditProfile = new PopupWithForm({
  popupSelector: ".popup_edit-profile",
  handleSubmitClick: (data) => {
    api
      .editProfile({ name: data.name, job: data.job })
      .then((res) => {
        user.setInfo({
          name: res.name,
          about: res.about,
          avatar: res.avatar,
          id: res._id,
        });
        profileName.textContent = user._userName;
        profileProfession.textContent = user._userAbout;
      })
      .catch((err) => console.log(err));
  },
});

popupEditProfile.setEventListeners();

const popupWithImage = new PopupWithImage(".popup_fullscreen-photo");
popupWithImage.setEventListeners();

const popupDeleteCard = new PopupWithConfirm({
  popupSelector: ".popup_delete-card",
  handleConfirmDelete: ({ element, cardId }) => {
    api
      .deleteCard(cardId)
      .then(() => {
        element.remove();
        element = null;
        popupDeleteCard.close();
      })
      .catch((err) => console.log(err));
  },
});

const handleCardClick = (link, name) => {
  popupWithImage.openPopup(link, name);
};

const createCard = (data, userData, templateSelector) => {
  const card = new Card(
    {
      data,
      userData,
      handleCardClick,
      handleLikeClick: (idCard) => {
        if (card.checkUserLike()) {
          api
            .removeLikeCard(idCard)
            .then((res) => card.updateLikesCounter(res))
            .catch((err) => console.log(err));
        } else {
          api
            .addLikeCard(idCard)
            .then((res) => card.updateLikesCounter(res))
            .catch((err) => console.log(err));
        }
      },
      handleDeleteClick: (element, idCard) => {
        popupDeleteCard.openPopup({ element, idCard });
      },
    },
    templateSelector
  );
  const cardElement = card.createCard();

  return cardElement;
};

const sectionWithCards = new Section(
  {
    items: {},
    renderer: (item, userData) => {
      const cardElement = createCard(item, userData, "#card-template");
      sectionWithCards.addItem(cardElement);
    },
  },
  ".gallery"
);

const promises = [api.getInitialCards(), api.getUserInfo()];

Promise.all(promises).then(([resCards, resUser]) => {
  user.setInfo({
    name: resUser.name,
    about: resUser.about,
    avatar: resUser.avatar,
    id: resUser._id,
  });
  sectionWithCards.updateRenderedItems(resCards);
  sectionWithCards.renderItems(resUser);

  editProfileButton.addEventListener("click", () => {
    userNameInput.value = profileName.textContent;
    userJobInput.value = profileProfession.textContent;
    popupEditProfile.openPopup();
    validatorFormEdit.resetValidation();
  });

  addPhotoButton.addEventListener("click", () => {
    popupAddCard.openPopup();
    validatorFormPhoto.resetValidation();
  });

  editAvatarButton.addEventListener("click", () => {});
});
