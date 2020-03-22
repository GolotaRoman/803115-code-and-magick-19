'use strict';

// Создание похожих магов

(function () {
  var WIZARD_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var WIZARD_SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var COAT_COLOR = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)'
  ];

  var EYES_COLOR = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var wizards = [];

  var createRandomWizard = function (NAMES, SURNAMES, COLOR, EYESCOLOR) {
    for (var i = 0; i < 4; i++) {
      wizards.push({
        name: NAMES[Math.floor(Math.random() * NAMES.length)] + ' ' + SURNAMES[Math.floor(Math.random() * SURNAMES.length)],
        coatColor: COLOR[Math.round(Math.random() * COLOR.length)],
        eyesColor: EYESCOLOR[Math.round(Math.random() * EYESCOLOR.length)]
      });
    }
    return wizards;
  };

  wizards = createRandomWizard(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLOR, EYES_COLOR);

  window.wizards = wizards;
})();
