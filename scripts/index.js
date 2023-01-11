let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__profession');
let submitButton = formElement.querySelector('.popup__submit');
let closePopupButton = formElement.querySelector('.popup__btn-close');
let profileProfession = document.querySelector('.profile__profession');
let editButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__name');

nameInput.value = profileName.textContent;
jobInput.value = profileProfession.textContent;


editButton.addEventListener('click', function () {
  popup.classList.add('popup_opened');
})

submitButton.addEventListener('click', function () {
  function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
}

  formElement.addEventListener('submit', handleFormSubmit);

  popup.classList.remove('popup_opened');
})

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
})
