import "./index.css";
import {
  popupFormEdit,
  userNameInput,
  userJobInput,
  profileProfession,
  profileAvatar,
  editProfileButton,
  editAvatarButton,
  avatarImg,
  profileName,
  addPhotoButton,
  popupFormPhoto,
  popupAvatarEdit,
  validationConfig,
} from "../scripts/utils/constants.js";
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithConfirm from "../scripts/components/PopupWithConfirm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import { api } from "../scripts/components/Api.js";

const popupAddCard = new PopupWithForm({
  popupSelector: ".popup_add-photo",
  handleSubmitClick: (data) => {
    popupAddCard.renderLoading(true);
    api
      .addNewCard({ name: data["popup-place"], link: data["popup-link"] })
      .then((data) => {
        const cardElement = createNewCard(
          data,
          user.getInfo(),
          "#card-template"
        );
        sectionWithCards.addNewItem(cardElement);
        popupAddCard.closePopup();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupAddCard.renderLoading(false);
      });
  },
});
popupAddCard.setEventListeners();

const popupEditProfile = new PopupWithForm({
  popupSelector: ".popup_edit-profile",
  handleSubmitClick: (data) => {
    popupEditProfile.renderLoading(true);
    api
      .editProfile({ name: data.name, job: data.about })
      .then((res) => {
        user.setInfo(res);
        profileName.textContent = user.getInfo().name;
        profileProfession.textContent = user.getInfo().about;
        popupEditProfile.closePopup();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupEditProfile.renderLoading(false);
      });
  },
});

popupEditProfile.setEventListeners();

const popupEditAvatar = new PopupWithForm({
  popupSelector: ".popup_edit-avatar",
  handleSubmitClick: (data) => {
    popupEditAvatar.renderLoading(true);
    api
      .editAvatarProfile({ link: data.link })
      .then((res) => {
        user.setInfo(res);
        avatarImg.src = user.getInfo().avatar;
        popupEditAvatar.closePopup();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupEditAvatar.renderLoading(false);
      });
  },
});

popupEditAvatar.setEventListeners();

const popupWithImage = new PopupWithImage(".popup_fullscreen-photo");
popupWithImage.setEventListeners();

const popupDeleteCard = new PopupWithConfirm({
  popupSelector: ".popup_delete-card",
  handleConfirmDelete: ({ element, idCard }) => {
    api
      .deleteCard(idCard)
      .then(() => {
        element.remove();
        element = null;
        popupDeleteCard.closePopup();
      })
      .catch((err) => console.log(err));
  },
});
popupDeleteCard.setEventListeners();

const user = new UserInfo({
  userName: profileName,
  userAbout: profileProfession,
  userAvatar: profileAvatar,
});

const handleCardClick = (link, name) => {
  popupWithImage.openPopup(link, name);
};

const createNewCard = (data, userData, templateSelector) => {
  const card = new Card(
    {
      data,
      userData,
      handleCardClick,
      handleLikeClick: (idCard) => {
        if (card.checkUserLike()) {
          return api
            .removeLikeCard(idCard)
            .then((res) => card.updateLikesCounter(res))
            .catch((err) => console.log(err));
        } else {
          return api
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
      const cardElement = createNewCard(item, userData, "#card-template");
      sectionWithCards.addItem(cardElement);
    },
  },
  ".gallery"
);

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([resCards, resUser]) => {
    user.setInfo(resUser);

    profileName.textContent = user.getInfo().name;
    profileProfession.textContent = user.getInfo().about;
    profileAvatar.src = user.getInfo().avatar;

    sectionWithCards.updateRenderedItems(resCards);
    sectionWithCards.renderItems(resUser);

    editProfileButton.addEventListener("click", () => {
      popupEditProfile.setInputValues(user.getInfo());
      popupEditProfile.openPopup();
      formValidators["popup-form_edit"].resetValidation();
    });

    addPhotoButton.addEventListener("click", () => {
      popupAddCard.openPopup();
      formValidators["popup-form_photo"].resetValidation();
    });

    editAvatarButton.addEventListener("click", () => {
      popupEditAvatar.openPopup();
      formValidators["popup-form_avatar"].resetValidation();
    });
  })
  .catch((err) => console.log(err));

const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formElement));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute("name");

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationConfig);
