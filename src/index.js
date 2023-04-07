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
} from "./scripts/utils/constants.js";
import Card from "./scripts/components/Card.js";
import FormValidator from "./scripts/components/FormValidator.js";
import Section from "./scripts/components/Section.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
import PopupWithConfirm from "./scripts/components/PopupWithConfirm.js";
import UserInfo from "./scripts/components/UserInfo.js";
import PopupWithImage from "./scripts/components/PopupWithImage.js";
import { api } from "./scripts/components/Api.js";

const popupAddCard = new PopupWithForm({
  popupSelector: ".popup_add-photo",
  handleSubmitClick: (data) => {
    showLoading(popupFormPhoto, true, "Создать");
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
        showLoading(popupFormPhoto, false, "Создать");
      })
      .catch((err) => console.log(err));
  },
});
popupAddCard.setEventListeners();

const popupEditProfile = new PopupWithForm({
  popupSelector: ".popup_edit-profile",
  handleSubmitClick: (data) => {
    showLoading(popupFormEdit, true, "Сохранить");
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
        showLoading(popupFormEdit, true, "Сохранить");
        popupEditProfile.closePopup();
      })
      .catch((err) => console.log(err));
  },
});

popupEditProfile.setEventListeners();

const popupEditAvatar = new PopupWithForm({
  popupSelector: ".popup_edit-avatar",
  handleSubmitClick: (data) => {
    showLoading(popupAvatarEdit, true, "Сохранить");
    api
      .editAvatarProfile({ link: data.link })
      .then((res) => {
        avatarImg.src = res.avatar;
        showLoading(popupAvatarEdit, false, "Сохранить");
        popupEditAvatar.closePopup();
      })
      .catch((err) => console.log(err));
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

const showLoading = (activeForm, loading, buttonValue) => {
  const submitButton = activeForm.querySelector(".popup__submit");
  if (loading) {
    submitButton.textContent = "Сохранение...";
  } else {
    submitButton.textContent = buttonValue;
  }
};

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
    profileName.textContent = resUser.name;
    profileProfession.textContent = resUser.about;
    profileAvatar.src = resUser.avatar;

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

    editAvatarButton.addEventListener("click", () => {
      popupEditAvatar.openPopup();
      validatorAvatarEdit.resetValidation();
    });
  })
  .catch((err) => console.log(err));

const validatorFormEdit = new FormValidator(validationConfig, popupFormEdit);
validatorFormEdit.enableValidation();

const validatorFormPhoto = new FormValidator(validationConfig, popupFormPhoto);
validatorFormPhoto.enableValidation();

const validatorAvatarEdit = new FormValidator(
  validationConfig,
  popupAvatarEdit
);
validatorAvatarEdit.enableValidation();
