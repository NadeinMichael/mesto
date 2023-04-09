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
      _id: this._userId,
    };
  }

  setInfo(data) {
    this._userName = data.name;
    this._userAbout = data.about;
    this._userAvatar = data.avatar;
    this._userId = data._id;
  }
}
