// Форма редактирования профиля
const popupEditProfile = document.querySelector('.popup_edit-profile');
const formElement = popupEditProfile.querySelector('.popup__container');
const popupFormEdit = formElement.querySelector('[name="popup-form_edit"]');
const userNameInput = popupFormEdit.querySelector('[name="popup-name"]');
const userJobInput = popupFormEdit.querySelector('[name="popup-profession"]');
const closePopupButton = document.querySelectorAll('.popup__btn-close');
const profileProfession = document.querySelector('.profile__profession');
const editProfileButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
// popup добавления картинки
const popupAddPhoto = document.querySelector('.popup_add-photo');
const addPhotoButton = document.querySelector('.profile__add-button');
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
// находим темплейт
const template = document.querySelector('#card-template').content.querySelector('.gallery__element');

// находим лист, куда вставлять карточки
const gallery = document.querySelector('.gallery');

// находим инпуты в попапе добавления карточки
const placeNameInput = document.querySelector('[name="popup-place"]');
const placeLinkInput = document.querySelector('[name="popup-link"]');

// находим форму для добавления фото
const popupFormPhoto = document.querySelector('[name="popup-form_photo"]');

popupFormPhoto.addEventListener('submit', function (evt) {
  evt.preventDefault();

  const card = createCard({name:placeNameInput.value, link:placeLinkInput.value})

  gallery.prepend(card);

  popupAddPhoto.classList.remove('popup_opened');
  popupFormPhoto.reset();
})

function renderCards(arr) {
  const cards = arr.map((item) => {
    return createCard(item);
  });
  gallery.append(...cards);
}

function createCard (item) {
  const card = template.cloneNode(true);
  card.querySelector('.gallery__img').src = item.link;
  card.querySelector('.gallery__title').textContent = item.name;

  card.querySelector('.btn-trash').addEventListener('click', () => {
    card.remove();
  })

  const btnLike = card.querySelector('.btn-like');
  btnLike.addEventListener('click', () => {
    btnLike.classList.add('btn-like_active');
  })

  return card;
}


renderCards(initialCards);

function openAddPhotoPopup() {
    popupAddPhoto.classList.add('popup_opened');
}

addPhotoButton.addEventListener('click', openAddPhotoPopup);

function popupClose (popupActive) {
    popupActive.classList.remove('popup_opened');
}

closePopupButton.forEach (el => {
   el.addEventListener('click', () => popupClose(el.closest('.popup')))
});

function openPopup () {
  popupEditProfile.classList.add('popup_opened');

  userNameInput.value = profileName.textContent;
  userJobInput.value = profileProfession.textContent;
}

editProfileButton.addEventListener('click', openPopup)

popupFormEdit.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileName.textContent = userNameInput.value;
  profileProfession.textContent = userJobInput.value;

  popupEditProfile.classList.remove('popup_opened');
})
