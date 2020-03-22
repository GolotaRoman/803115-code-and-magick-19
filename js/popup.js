'use strict';

// Открыть/закрыть диалоговое окно

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupUserName = setupOpen.querySelector('.setup-user-name');
  var setupClose = setup.querySelector('.setup-close');

  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  // Открыть попап
  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };
  setupOpen.addEventListener('click', function () {
    openPopup();
  });
  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      openPopup();
    }
  });

  // Закрыть попап
  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };
  var onPopupEscPress = function (evt) {
    if (evt.key === ESC_KEY && evt.target !== setupUserName) { // Окно всё равно закрывается при нажатии на ESC. Почему?
      closePopup();
    }
  };
  setupClose.addEventListener('click', function () {
    closePopup();
  });
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      closePopup();
    }
  });
})();
