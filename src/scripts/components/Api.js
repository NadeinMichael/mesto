class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkValidAnswer(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _showError(err) {
    console.log(err);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
      .then(this._checkValidAnswer)
      .catch(this._showError);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
      .then(this._checkValidAnswer)
      .catch(this._showError);
  }

  editProfile({ name, job }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: job,
      }),
    })
      .then(this._checkValidAnswer)
      .catch(this._showError);
  }

  addNewCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    })
      .then(this._checkValidAnswer)
      .catch(this._showError);
  }

  addLikeCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    })
      .then(this._checkValidAnswer)
      .catch(this._showError);
  }

  removeLikeCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._checkValidAnswer)
      .catch(this._showError);
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._checkValidAnswer)
      .catch(this._showError);
  }

  editAvatarProfile({ link }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      }),
    })
      .then(this._checkValidAnswer)
      .catch(this._showError);
  }
}

export const api = new Api({
  baseUrl: `https://mesto.nomoreparties.co/v1/cohort-63`,
  headers: {
    authorization: "cadaf3e6-12d4-47e6-8927-b77a2c64004a",
    "Content-Type": "application/json",
  },
});
