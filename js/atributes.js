'use strict';

// Изменение атрибутов мага

(function () {
  var COAT_COLOR_WIZARD =
[
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

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

  var setupWizard = document.querySelector('.setup-wizard');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var setupFireball = document.querySelector('.setup-fireball-wrap');
  var setupFireballHidden = document.querySelector('.setup-fireball-wrap input');

  var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

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
})();
