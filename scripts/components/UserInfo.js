export default class UserInfo {
  constructor({ userName, userDescr }) {
    this._userName = userName;
    this._userDescription = userDescr;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      descr: this._userDescription.textContent,
    };
  }

  setUserInfo(name, descr) {
    this._userName.textContent = name;
    this._userDescription.textContent = descr;
  }
}
