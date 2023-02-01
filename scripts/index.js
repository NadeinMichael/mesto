// Форма редактирования профиля
const popupEditProfile = document.querySelector('.popup_edit-profile');
const profileFormElement = popupEditProfile.querySelector('.popup__container');
const popupFormEdit = document.forms["popup-form_edit"];
const userNameInput = popupFormEdit.querySelector('[name="popup-name"]');
const userJobInput = popupFormEdit.querySelector('[name="popup-profession"]');
const closePopupButtons = document.querySelectorAll('.popup__btn-close');
const profileProfession = document.querySelector('.profile__profession');
const editProfileButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
// popup добавления картинки
const popupAddPhoto = document.querySelector('.popup_add-photo');
const addPhotoButton = document.querySelector('.profile__add-button');
// попап фулскрина
const fullscreenImagePopup = document.querySelector('.popup_fullscreen-photo');
const fullscreenImage = document.querySelector('.popup__img');
const fullscreenCaption = document.querySelector('.popup__caption-img');
// находим темплейт
const template = document.querySelector('#card-template').content.querySelector('.gallery__element');
// находим лист, куда вставлять карточки
const gallery = document.querySelector('.gallery');
// находим инпуты в попапе добавления карточки
const placeNameInput = document.querySelector('[name="popup-place"]');
const placeLinkInput = document.querySelector('[name="popup-link"]');
// находим форму для добавления фото
const popupFormPhoto = document.forms["popup-form_photo"];


// Массив карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

popupFormPhoto.addEventListener('submit', function (evt) {
  evt.preventDefault();

  const card = createCard({name:placeNameInput.value, link:placeLinkInput.value})

  gallery.prepend(card);

  closePopup(popupAddPhoto);
  popupFormPhoto.reset();
})

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}


function renderCards(arr) {
  const cards = arr.map((item) => {
    return createCard(item);
  });
  gallery.append(...cards);
}

function createCard (item) {
  const card = template.cloneNode(true);
  const photoCard = card.querySelector('.gallery__img');
  photoCard.src = item.link;
  photoCard.alt = item.name;
  const titleCard = card.querySelector('.gallery__title');
  titleCard.textContent = item.name;


  card.querySelector('.btn-trash').addEventListener('click', () => {
    card.remove();
  })

  const btnLike = card.querySelector('.btn-like');
  btnLike.addEventListener('click', () => {
    btnLike.classList.toggle('btn-like_active');
  })

  photoCard.addEventListener('click', () => {
    openPopup(fullscreenImagePopup);
    fullscreenImage.src = item.link;
    fullscreenImage.alt = item.name
    fullscreenCaption.textContent = item.name;
  })

  return card;
}

renderCards(initialCards);

function openPopup (popup) {
  popup.classList.add('popup_opened');
}

addPhotoButton.addEventListener('click', () => openPopup(popupAddPhoto));

closePopupButtons.forEach (el => {
   el.addEventListener('click', () => closePopup(el.closest('.popup')))
});

editProfileButton.addEventListener('click', () => {
  openPopup(popupEditProfile);

  userNameInput.value = profileName.textContent;
  userJobInput.value = profileProfession.textContent;
});

popupFormEdit.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileName.textContent = userNameInput.value;
  profileProfession.textContent = userJobInput.value;

  closePopup(popupEditProfile);
})
