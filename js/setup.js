'use strict';

// Константы
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];

var EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var FIREBALL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

// Переменные
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupUserName = setupOpen.querySelector('.setup-user-name');
var setupClose = setup.querySelector('.setup-close');
var setupWizard = document.querySelector('.setup-wizard');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var setupFireball = document.querySelector('.setup-fireball-wrap');
var setupFireballHidden = document.querySelector('.setup-fireball-wrap input');

// Дополнительные функции
var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

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

// Изменение атрибутов мага в настройках
wizardEyes.addEventListener('click', function () {
  setupWizard.querySelector('.wizard-eyes').style.fill = (EYES_COLOR[getRandom(0, EYES_COLOR.length)]);
});

wizardCoat.addEventListener('click', function () {
  setupWizard.querySelector('.wizard-coat').style.fill = (COAT_COLOR[getRandom(0, COAT_COLOR.length)]);
});

setupFireball.addEventListener('click', function () {
  setupFireballHidden.value = (FIREBALL_COLOR[getRandom(0, FIREBALL_COLOR.length)]);
  setupFireball.style.background = (FIREBALL_COLOR[getRandom(0, FIREBALL_COLOR.length)]);
});

