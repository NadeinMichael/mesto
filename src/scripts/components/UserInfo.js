export default class UserInfo {
  constructor({ userName, userAbout, userAvatar, userId }) {
    this._userName = userName;
    this._userAbout = userAbout;
    this._userAvatar = userAvatar;
    this._userId = userId;
  }

  getInfo() {
    return {
      name: this._userName.textContent,
      about: this._userAbout.textContent,
      avatar: this._userAvatar.src,
      _id: this._userId,
    };
  }

  setInfo(data) {
    this._userName.textContent = data.name;
    this._userAbout.textContent = data.about;
    this._userAvatar.src = data.avatar;
    this._userId = data._id;
  }
}
