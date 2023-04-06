(()=>{"use strict";var t=document.forms["popup-form_edit"],e=t.querySelector('[name="name"]'),n=t.querySelector('[name="job"]'),r=document.querySelector(".profile__profession"),o=document.querySelector(".profile__edit-button"),i=document.querySelector(".profile__name"),u=document.querySelector(".profile__avatar"),a=document.querySelector(".profile__add-button"),c=document.forms["popup-form_photo"],l=document.forms["popup-form_avatar"],s=document.querySelector(".profile__avatar-wrapper"),f={formElement:".popup__form",inputElement:".popup__text",buttonElement:".popup__submit",inputErrorClass:"popup__text_type_error",inactiveButtonClass:"popup__submit_disabled"};function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var h=function(){function t(e,n){var r=e.data,o=e.userData,i=e.handleCardClick,u=e.handleLikeClick,a=e.handleDeleteClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=r.name,this._link=r.link,this._templateSelector=n,this._handleCardClick=i,this._data=r,this._userData=o,this._handleLikeClick=u,this._handleDeleteClick=a}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".gallery__element").cloneNode(!0)}},{key:"createCard",value:function(){this._element=this._getTemplate(),this._setEventListeners();var t=this._element.querySelector(".gallery__img");return t.src=this._link,t.alt=this._name,this._element.querySelector(".gallery__title").textContent=this._name,this.updateLikesCounter(this._data),this.removeTrashButton(),this._element}},{key:"checkUserLike",value:function(){var t=this;return!!this._data.likes.some((function(e){return e._id===t._userData._id}))}},{key:"updateLikesCounter",value:function(t){this._likeCounter.textContent=t.likes.length,this.checkUserLike()?this._btnLike.classList.add("btn-like_active"):this._btnLike.classList.remove("btn-like_active")}},{key:"removeTrashButton",value:function(){this._data.owner._id!==this._userData._id&&this._trashBtn.remove()}},{key:"_setEventListeners",value:function(){var t=this;this._likeCounter=this._element.querySelector(".gallery__like-counter"),this._image=this._element.querySelector(".gallery__img"),this._trashBtn=this._element.querySelector(".btn-trash"),this._trashBtn.addEventListener("click",(function(){t._handleDeleteClick(t._element,t._data._id)})),this._btnLike=this._element.querySelector(".btn-like"),this._btnLike.addEventListener("click",(function(){t._handleLikeClick(t._data._id)})),this._image.addEventListener("click",(function(){t._handleCardClick(t._link,t._name)}))}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}var m=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.config=e,this._currentForm=n}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._currentForm.querySelector(".".concat(t.id,"-error"));t.classList.add(this.config.inputErrorClass),n.textContent=e}},{key:"_hideInputError",value:function(t){var e=this._currentForm.querySelector(".".concat(t.id,"-error"));t.classList.remove(this.config.inputErrorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled","disabled"),this._buttonElement.classList.add(this.config.inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this.config.inactiveButtonClass))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_setEventListeners",value:function(){var t=this;this._inputList=Array.from(this._currentForm.querySelectorAll(this.config.inputElement)),this._buttonElement=this._currentForm.querySelector(this.config.buttonElement),this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._toggleButtonState(),t._checkInputValidity(e)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}var k=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"_clear",value:function(){this._container.innerHTML=""}},{key:"addItem",value:function(t){this._container.append(t)}},{key:"addNewItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;this._clear(),this._renderedItems.forEach((function(n){e._renderer(n,t)}))}},{key:"updateRenderedItems",value:function(t){this._renderedItems=t}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}var w=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var e,n;return e=t,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose),this._popup.addEventListener("click",this._handleOverlayClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose),this._popup.removeEventListener("click",this._handleOverlayClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.closePopup()}},{key:"_handleOverlayClose",value:function(t){t.target.closest(".popup__overlay")||this.closePopup()}},{key:"setEventListeners",value:function(){var t=this;this._closeButton=this._popup.querySelector(".popup__btn-close"),this._closeButton.addEventListener("click",(function(){return t.closePopup()}))}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},C.apply(this,arguments)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}const L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,n=t.popupSelector,r=t.handleSubmitClick;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._inputList=Array.from(e._popup.querySelectorAll(".popup__text")),e._form=e._popup.querySelector(".popup__form"),e._handleSubmitClick=r,e}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputListValues={},this._inputList.forEach((function(e){return t._inputListValues[e.name]=e.value})),this._inputListValues}},{key:"closePopup",value:function(){C(O(u.prototype),"closePopup",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var t=this;C(O(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmitClick(t._getInputValues()),t.closePopup()}))}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(w);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},A.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}const D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(r);if(o){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,n=t.popupSelector,r=t.handleConfirmDelete;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._handleConfirmDelete=r,e}return e=u,(n=[{key:"openPopup",value:function(t){A(q(u.prototype),"openPopup",this).call(this),this._card=t}},{key:"setEventListeners",value:function(){var t=this;A(q(u.prototype),"setEventListeners",this).call(this),this._submitBtn=this._popup.querySelector(".popup__submit"),this._submitBtn.addEventListener("click",(function(e){e.preventDefault(),t._handleConfirmDelete(t._card)}))}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(w);function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var x=function(){function t(e){var n=e.userName,r=e.userAbout,o=e.userAvatar,i=e.userId;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=n,this._userAbout=r,this._userAvatar=o,this._userId=i}var e,n;return e=t,(n=[{key:"getInfo",value:function(){return{name:this._userName,about:this._userAbout,avatar:this._userAvatar,id:this._userId}}},{key:"setInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar,o=t.id;this._userName=e,this._userAbout=n,this._userAvatar=r,this._userId=o}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}function z(){return z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=H(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},z.apply(this,arguments)}function F(t,e){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},F(t,e)}function H(t){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},H(t)}const J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&F(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=H(r);if(o){var n=H(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===U(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".popup__img"),e._caption=e._popup.querySelector(".popup__caption-img"),e}return e=u,(n=[{key:"openPopup",value:function(t,e){z(H(u.prototype),"openPopup",this).call(this),this._image.src=t,this._image.alt=e,this._caption.textContent=e}}])&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(w);function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function $(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==M(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===M(o)?o:String(o)),r)}var o}var G=new(function(){function t(e){var n=e.baseUrl,r=e.token;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._token=r}var e,n;return e=t,(n=[{key:"_checkValidAnswer",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"_showError",value:function(t){console.log(t)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._token}}).then(this._checkValidAnswer).catch(this._showError)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token}}).then(this._checkValidAnswer).catch(this._showError)}},{key:"editProfile",value:function(t){var e=t.name,n=t.job;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:n})}).then(this._checkValidAnswer).catch(this._showError)}},{key:"addNewCard",value:function(t){var e=t.name,n=t.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:n})}).then(this._checkValidAnswer).catch(this._showError)}},{key:"addLikeCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkValidAnswer).catch(this._showError)}},{key:"removeLikeCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkValidAnswer).catch(this._showError)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkValidAnswer).catch(this._showError)}},{key:"editAvatarProfile",value:function(t){var e=t.link;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._checkValidAnswer).catch(this._showError)}}])&&$(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-63",token:"cadaf3e6-12d4-47e6-8927-b77a2c64004a"});function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Q=new x({userName:i,userAbout:r,userAvatar:u}),W=new m(f,t);W.enableValidation();var X=new m(f,c);X.enableValidation(),new m(f,l).enableValidation();var Y=new L({popupSelector:".popup_add-photo",handleSubmitClick:function(t){G.addNewCard({name:t["popup-place"],link:t["popup-link"]}).then((function(t){var e=rt(t,Q.getInfo(),"#card-template");ot.addNewItem(e)})).catch((function(t){return console.log(t)}))}});Y.setEventListeners();var Z=new L({popupSelector:".popup_edit-profile",handleSubmitClick:function(t){G.editProfile({name:t.name,job:t.job}).then((function(t){Q.setInfo({name:t.name,about:t.about,avatar:t.avatar,id:t._id}),i.textContent=Q._userName,r.textContent=Q._userAbout})).catch((function(t){return console.log(t)}))}});Z.setEventListeners();var tt=new J(".popup_fullscreen-photo");tt.setEventListeners();var et=new D({popupSelector:".popup_delete-card",handleConfirmDelete:function(t){var e=t.element,n=t.idCard;G.deleteCard(n).then((function(){e.remove(),e=null,et.closePopup()})).catch((function(t){return console.log(t)}))}});et.setEventListeners();var nt=function(t,e){tt.openPopup(t,e)},rt=function(t,e,n){var r=new h({data:t,userData:e,handleCardClick:nt,handleLikeClick:function(t){r.checkUserLike()?G.removeLikeCard(t).then((function(t){return r.updateLikesCounter(t)})).catch((function(t){return console.log(t)})):G.addLikeCard(t).then((function(t){return r.updateLikesCounter(t)})).catch((function(t){return console.log(t)}))},handleDeleteClick:function(t,e){et.openPopup({element:t,idCard:e})}},n);return r.createCard()},ot=new k({items:{},renderer:function(t,e){var n=rt(t,e,"#card-template");ot.addItem(n)}},".gallery"),it=[G.getInitialCards(),G.getUserInfo()];Promise.all(it).then((function(t){var u,c,l=(c=2,function(t){if(Array.isArray(t))return t}(u=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(u,c)||function(t,e){if(t){if("string"==typeof t)return K(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(t,e):void 0}}(u,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=l[0],p=l[1];Q.setInfo({name:p.name,about:p.about,avatar:p.avatar,id:p._id}),ot.updateRenderedItems(f),ot.renderItems(p),o.addEventListener("click",(function(){e.value=i.textContent,n.value=r.textContent,Z.openPopup(),W.resetValidation()})),a.addEventListener("click",(function(){Y.openPopup(),X.resetValidation()})),s.addEventListener("click",(function(){}))}))})();
//# sourceMappingURL=main.js.map