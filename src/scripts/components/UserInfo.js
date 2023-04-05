export default class UserInfo {
  constructor({ userName, userAbout, userAvatar, userId }) {
    this._userName = userName;
    this._userAbout = userAbout;
    this._userAvatar = userAvatar;
    this._userId = userId;
  }

  getInfo() {
    return {
      name: this._userName,
      about: this._userAbout,
      avatar: this._userAvatar,
      id: this._userId,
    };
  }

  setInfo({ name, about, avatar, id }) {
    this._userName = name;
    this._userAbout = about;
    this._userAvatar = avatar;
    this._userId = id;
  }
}
