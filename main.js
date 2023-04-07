(()=>{"use strict";var t=document.forms["popup-form_edit"],e=t.querySelector('[name="name"]'),n=t.querySelector('[name="job"]'),r=document.querySelector(".profile__profession"),o=document.querySelector(".profile__edit-button"),i=document.querySelector(".profile__name"),a=document.querySelector(".profile__avatar"),u=document.querySelector(".profile__add-button"),c=document.forms["popup-form_photo"],l=document.forms["popup-form_avatar"],s=document.querySelector(".profile__avatar-wrapper"),f=document.querySelector(".profile__avatar"),p={formElement:".popup__form",inputElement:".popup__text",buttonElement:".popup__submit",inputErrorClass:"popup__text_type_error",inactiveButtonClass:"popup__submit_disabled"};function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}var d=function(){function t(e,n){var r=e.data,o=e.userData,i=e.handleCardClick,a=e.handleLikeClick,u=e.handleDeleteClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=r.name,this._link=r.link,this._templateSelector=n,this._handleCardClick=i,this._data=r,this._userData=o,this._handleLikeClick=a,this._handleDeleteClick=u,this._element=this._getTemplate()}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".gallery__element").cloneNode(!0)}},{key:"createCard",value:function(){this._setEventListeners(),this.removeTrashButton(),this.updateLikesCounter(this._data);var t=this._element.querySelector(".gallery__img");return t.src=this._link,t.alt=this._name,this._element.querySelector(".gallery__title").textContent=this._name,this._element}},{key:"checkUserLike",value:function(){var t=this;return!!this._data.likes.some((function(e){return e._id===t._userData._id}))}},{key:"updateLikesCounter",value:function(t){this._data=t,this._likeCounter.textContent=t.likes.length,this.checkUserLike()?this._btnLike.classList.add("btn-like_active"):this._btnLike.classList.remove("btn-like_active")}},{key:"removeTrashButton",value:function(){this._data.owner._id!==this._userData._id&&this._trashBtn.remove()}},{key:"_setEventListeners",value:function(){var t=this;this._likeCounter=this._element.querySelector(".gallery__like-counter"),this._btnLike=this._element.querySelector(".btn-like"),this._trashBtn=this._element.querySelector(".btn-trash"),this._image=this._element.querySelector(".gallery__img"),this._trashBtn.addEventListener("click",(function(){t._handleDeleteClick(t._element,t._data._id)})),this._btnLike.addEventListener("click",(function(){t._handleLikeClick(t._data._id)})),this._image.addEventListener("click",(function(){t._handleCardClick(t._link,t._name)}))}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}var b=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.config=e,this._currentForm=n}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._currentForm.querySelector(".".concat(t.id,"-error"));t.classList.add(this.config.inputErrorClass),n.textContent=e}},{key:"_hideInputError",value:function(t){var e=this._currentForm.querySelector(".".concat(t.id,"-error"));t.classList.remove(this.config.inputErrorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled","disabled"),this._buttonElement.classList.add(this.config.inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this.config.inactiveButtonClass))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_setEventListeners",value:function(){var t=this;this._inputList=Array.from(this._currentForm.querySelectorAll(this.config.inputElement)),this._buttonElement=this._currentForm.querySelector(this.config.buttonElement),this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._toggleButtonState(),t._checkInputValidity(e)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}var g=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"_clear",value:function(){this._container.innerHTML=""}},{key:"addItem",value:function(t){this._container.append(t)}},{key:"addNewItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;this._clear(),this._renderedItems.forEach((function(n){e._renderer(n,t)}))}},{key:"updateRenderedItems",value:function(t){this._renderedItems=t}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}var E=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var e,n;return e=t,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose),this._popup.addEventListener("click",this._handleOverlayClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose),this._popup.removeEventListener("click",this._handleOverlayClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.closePopup()}},{key:"_handleOverlayClose",value:function(t){t.target.closest(".popup__overlay")||this.closePopup()}},{key:"setEventListeners",value:function(){var t=this;this._closeButton=this._popup.querySelector(".popup__btn-close"),this._closeButton.addEventListener("click",(function(){return t.closePopup()}))}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}const T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(r);if(o){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e,n=t.popupSelector,r=t.handleSubmitClick;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,n))._inputList=Array.from(e._popup.querySelectorAll(".popup__text")),e._form=e._popup.querySelector(".popup__form"),e._handleSubmitClick=r,e}return e=a,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputListValues={},this._inputList.forEach((function(e){return t._inputListValues[e.name]=e.value})),this._inputListValues}},{key:"closePopup",value:function(){j(L(a.prototype),"closePopup",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var t=this;j(L(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmitClick(t._getInputValues())}))}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(E);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},q.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}const D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(r);if(o){var n=V(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e,n=t.popupSelector,r=t.handleConfirmDelete;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,n))._handleConfirmDelete=r,e}return e=a,(n=[{key:"openPopup",value:function(t){q(V(a.prototype),"openPopup",this).call(this),this._card=t}},{key:"setEventListeners",value:function(){var t=this;q(V(a.prototype),"setEventListeners",this).call(this),this._submitBtn=this._popup.querySelector(".popup__submit"),this._submitBtn.addEventListener("click",(function(e){e.preventDefault(),t._handleConfirmDelete(t._card)}))}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(E);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}var U=function(){function t(e){var n=e.userName,r=e.userAbout,o=e.userAvatar,i=e.userId;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=n,this._userAbout=r,this._userAvatar=o,this._userId=i}var e,n;return e=t,(n=[{key:"getInfo",value:function(){return{name:this._userName,about:this._userAbout,avatar:this._userAvatar,_id:this._userId}}},{key:"setInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar,o=t.id;this._userName=e,this._userAbout=n,this._userAvatar=r,this._userId=o}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==N(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===N(o)?o:String(o)),r)}var o}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=J(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},F.apply(this,arguments)}function H(t,e){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},H(t,e)}function J(t){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},J(t)}const M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&H(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=J(r);if(o){var n=J(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===N(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._image=e._popup.querySelector(".popup__img"),e._caption=e._popup.querySelector(".popup__caption-img"),e}return e=a,(n=[{key:"openPopup",value:function(t,e){F(J(a.prototype),"openPopup",this).call(this),this._image.src=t,this._image.alt=e,this._caption.textContent=e}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(E);function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==$(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==$(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===$(o)?o:String(o)),r)}var o}var K=new(function(){function t(e){var n=e.baseUrl,r=e.token;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._token=r}var e,n;return e=t,(n=[{key:"_checkValidAnswer",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"_showError",value:function(t){console.log(t)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._token}}).then(this._checkValidAnswer).catch(this._showError)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token}}).then(this._checkValidAnswer).catch(this._showError)}},{key:"editProfile",value:function(t){var e=t.name,n=t.job;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:n})}).then(this._checkValidAnswer).catch(this._showError)}},{key:"addNewCard",value:function(t){var e=t.name,n=t.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:n})}).then(this._checkValidAnswer).catch(this._showError)}},{key:"addLikeCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkValidAnswer).catch(this._showError)}},{key:"removeLikeCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkValidAnswer).catch(this._showError)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkValidAnswer).catch(this._showError)}},{key:"editAvatarProfile",value:function(t){var e=t.link;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._checkValidAnswer).catch(this._showError)}}])&&G(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-63",token:"cadaf3e6-12d4-47e6-8927-b77a2c64004a"});function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var W=new T({popupSelector:".popup_add-photo",handleSubmitClick:function(t){nt(c,!0,"Создать"),K.addNewCard({name:t["popup-place"],link:t["popup-link"]}).then((function(t){var e=ot(t,et.getInfo(),"#card-template");it.addNewItem(e),W.closePopup(),nt(c,!1,"Создать")})).catch((function(t){return console.log(t)}))}});W.setEventListeners();var X=new T({popupSelector:".popup_edit-profile",handleSubmitClick:function(e){nt(t,!0,"Сохранить"),K.editProfile({name:e.name,job:e.job}).then((function(e){et.setInfo({name:e.name,about:e.about,avatar:e.avatar,id:e._id}),i.textContent=et._userName,r.textContent=et._userAbout,nt(t,!0,"Сохранить"),X.closePopup()})).catch((function(t){return console.log(t)}))}});X.setEventListeners();var Y=new T({popupSelector:".popup_edit-avatar",handleSubmitClick:function(t){nt(l,!0,"Сохранить"),K.editAvatarProfile({link:t.link}).then((function(t){f.src=t.avatar,nt(l,!1,"Сохранить"),Y.closePopup()})).catch((function(t){return console.log(t)}))}});Y.setEventListeners();var Z=new M(".popup_fullscreen-photo");Z.setEventListeners();var tt=new D({popupSelector:".popup_delete-card",handleConfirmDelete:function(t){var e=t.element,n=t.idCard;K.deleteCard(n).then((function(){e.remove(),e=null,tt.closePopup()})).catch((function(t){return console.log(t)}))}});tt.setEventListeners();var et=new U({userName:i,userAbout:r,userAvatar:a}),nt=function(t,e,n){t.querySelector(".popup__submit").textContent=e?"Сохранение...":n},rt=function(t,e){Z.openPopup(t,e)},ot=function(t,e,n){var r=new d({data:t,userData:e,handleCardClick:rt,handleLikeClick:function(t){return r.checkUserLike()?K.removeLikeCard(t).then((function(t){return r.updateLikesCounter(t)})).catch((function(t){return console.log(t)})):K.addLikeCard(t).then((function(t){return r.updateLikesCounter(t)})).catch((function(t){return console.log(t)}))},handleDeleteClick:function(t,e){tt.openPopup({element:t,idCard:e})}},n);return r.createCard()},it=new g({items:{},renderer:function(t,e){var n=ot(t,e,"#card-template");it.addItem(n)}},".gallery");Promise.all([K.getInitialCards(),K.getUserInfo()]).then((function(t){var c,l,f=(l=2,function(t){if(Array.isArray(t))return t}(c=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(c,l)||function(t,e){if(t){if("string"==typeof t)return Q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(t,e):void 0}}(c,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=f[0],h=f[1];i.textContent=h.name,r.textContent=h.about,a.src=h.avatar,et.setInfo({name:h.name,about:h.about,avatar:h.avatar,id:h._id}),it.updateRenderedItems(p),it.renderItems(h),o.addEventListener("click",(function(){e.value=i.textContent,n.value=r.textContent,X.openPopup(),at.resetValidation()})),u.addEventListener("click",(function(){W.openPopup(),ut.resetValidation()})),s.addEventListener("click",(function(){Y.openPopup(),ct.resetValidation()}))})).catch((function(t){return console.log(t)}));var at=new b(p,t);at.enableValidation();var ut=new b(p,c);ut.enableValidation();var ct=new b(p,l);ct.enableValidation()})();
//# sourceMappingURL=main.js.map