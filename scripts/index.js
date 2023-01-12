let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__container');
let popupForm = formElement.querySelector('.popup__form');
let nameInput = popupForm.querySelector('[name="popup-name"]');
let jobInput = popupForm.querySelector('[name="popup-profession"]');
let closePopupButton = formElement.querySelector('.popup__btn-close');
let profileProfession = document.querySelector('.profile__profession');
let editButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__name');

function openPopup () {
  popup.classList.add('popup_opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
}

editButton.addEventListener('click', openPopup)

popupForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;

  popup.classList.remove('popup_opened');
})

function closePopup () {
  popup.classList.remove('popup_opened');
}

closePopupButton.addEventListener('click', closePopup);
