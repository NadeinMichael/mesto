class Api {
  constructor({ baseUrl, token }) {
    this._baseUrl = baseUrl;
    this._token = token;
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
      headers: {
        authorization: this._token,
      },
    })
      .then(this._checkValidAnswer)
      .catch(this._showError);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._token,
      },
    })
      .then(this._checkValidAnswer)
      .catch(this._showError);
  }

  editProfile({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        about,
      }),
    })
      .then(this._checkValidAnswer)
      .catch(this._showError);
  }

  addNewCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link,
      }),
    });
  }

  showLikesCounter(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
    });
  }
}

export const api = new Api({
  baseUrl: `https://mesto.nomoreparties.co/v1/cohort-63`,
  token: `cadaf3e6-12d4-47e6-8927-b77a2c64004a`,
});
