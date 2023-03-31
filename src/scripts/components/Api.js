class Api {
  constructor({ adress, token }) {
    this._adress = adress;
    this._token = token;
  }

  _checkValidAnswer(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-63",
  token: `cadaf3e6-12d4-47e6-8927-b77a2c64004a`,
});
