'use strict';

// Константы
var WIZARD_NAMES = ['Иван',
  'Хуан Себастьян', 'Мария',
  'Кристоф', 'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'];

var COAT_COLOR = ['rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)'];

var EYES_COLOR = ['black',
  'red',
  'blue',
  'yellow',
  'green'];

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var COAT_COLOR_WIZARD = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];

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

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizards = [];

var createRandomWizard = function (NAMES, SURNAMES, COLOR, EYESCOLOR) {
  for (var i = 0; i < 4; i++) {
    wizards.push({
      name: NAMES[Math.floor(Math.random() * NAMES.length)] + ' ' + SURNAMES[Math.floor(Math.random() * SURNAMES.length)],
      coatColor: COLOR[Math.round(Math.random() * COLOR.length)],
      eyesColor: EYESCOLOR[Math.round(Math.random() * EYESCOLOR.length)]

var createRandomWizard = function (names, surnames, coatColor, eyesColor) {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards.push({
      name: names[Math.floor(Math.random() * names.length)] + ' ' + surnames[Math.floor(Math.random() * surnames.length)],
      coatColor: coatColor[Math.round(Math.random() * coatColor.length)],
      eyesColor: eyesColor[Math.round(Math.random() * eyesColor.length)]

    });
  }
  return wizards;
};

wizards = createRandomWizard(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLOR, EYES_COLOR);

var wizards = createRandomWizard(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLOR, EYES_COLOR);


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

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
  setupWizard.querySelector('.wizard-coat').style.fill = (COAT_COLOR_WIZARD[getRandom(0, COAT_COLOR_WIZARD.length)]);
});

setupFireball.addEventListener('click', function () {
  setupFireballHidden.value = (FIREBALL_COLOR[getRandom(0, FIREBALL_COLOR.length)]);
  setupFireball.style.background = (FIREBALL_COLOR[getRandom(0, FIREBALL_COLOR.length)]);
});
