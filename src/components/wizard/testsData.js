export const TEST_TYPES = {
  question: 'QUESTION',
  colors: 'COLORS',
  image: "IMAGE"
};

/**
 * Масив питань, де кожен елемент представляє собою окреме питання
 * @typedef {Object} Question
 * @property {String} text - Текст питання
 * @property {Array<Object>} variants - Масив варіантів відповіді на питання
 * @property {String} variants.value - Значення варіанту відповіді
 * @property {String} variants.label - Назва варіанту відповіді
 * @property {String?} source - Джерело зображення
 * @property {Boolean?} variantsInRow - Чи розташовувати варіанти відповіді в рядок
 * @property {Boolean?} disableShuffle - Чи заборонити перетасовку варіантів відповідей
 */

/**
 * Масив питань, де кожен елемент представляє собою окреме питання разом з ідентифікатором та типом
 * @typedef {Object} Questionnaire
 * @property {Number} id - Ідентифікатор питання
 * @property {String} type - Тип питання
 * @property {Question} question - Об'єкт питання
 */

/**
 * Масив запитань, що складається з об'єктів питань
 * @typedef {Array<Questionnaire>}
 */
const questionnaireList  = [
  {
    id: 1,
    type: TEST_TYPES.question,
    question: {
      text: "Ваш пол:",
      variants: [
        {value: 'male', label: 'Мужчина'}, {value: 'female', label: 'Женщина'}
      ],
      disableShuffle: true
    }
  },
  {
    id: 2,
    type: TEST_TYPES.question,
    question: {
      text: "Укажите ваш возраст:",
      variants: [
        {value: 0, label: 'До 18'},
        {value: 1, label: 'От 18 до 28'},
        {value: 2, label: 'от 29 до 35'},
        {value: 3, label: 'От 36'}
      ],
      disableShuffle: true
    }
  },
  {
    id: 3,
    type: TEST_TYPES.question,
    question: {
      text: "Выберите лишнее:",
      variants: [
        {value: 0, label: 'Дом'},
        {value: 1, label: 'Шалаш'},
        {value: 2, label: 'Бунгало'},
        {value: 3, label: 'Скамейка'},
        {value: 4, label: 'Хижина'}
      ]
    }
  },
  {
    id: 4,
    type: TEST_TYPES.question,
    question: {
      text: "Продолжите числовой ряд:\n18  20  24  32",
      variants: [
        {value: 0, label: '62'},
        {value: 1, label: '48'},
        {value: 2, label: '74'},
        {value: 3, label: '57'},
        {value: 4, label: '60'},
        {value: 5, label: '77'}
      ]
    }
  },
  {
    id: 5,
    type: TEST_TYPES.colors,
    question: {
      text: "Выберите цвет, который сейчас наиболее Вам приятен:",
      variants: [
        {value: 0, label: '#A8A8A8'},
        {value: 1, label: '#0000A9'},
        {value: 2, label: '#00A701'},
        {value: 3, label: '#F60100'},
        {value: 4, label: '#FDFF19'},
        {value: 5, label: '#A95403'},
        {value: 6, label: '#000000'},
        {value: 7, label: '#850068'},
        {value: 8, label: '#46B2AC'}
      ]
    }
  },
  {
    id: 6,
    type: TEST_TYPES.colors,
    question: {
      text: "Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",
      variants: [
        {value: 0, label: '#A8A8A8'},
        {value: 1, label: '#0000A9'},
        {value: 2, label: '#00A701'},
        {value: 3, label: '#F60100'},
        {value: 4, label: '#FDFF19'},
        {value: 5, label: '#A95403'},
        {value: 6, label: '#000000'},
        {value: 7, label: '#850068'},
        {value: 8, label: '#46B2AC'}
      ]
    }
  },
  {
    id: 7,
    type: TEST_TYPES.image,
    question: {
      text: "Выберите правильную фигуру из четырёх пронумерованных.",
      source: "src/assets/images/test/test7.png",
      variants: [
        {value: 0, label: '1'},
        {value: 1, label: '2'},
        {value: 2, label: '3'},
        {value: 3, label: '4'}
      ],
      variantsInRow: true,
      disableShuffle: true
    }
  },
  {
    id: 8,
    type: TEST_TYPES.question,
    question: {
      text: "Вам привычнее и важнее:",
      variants: [
        {value: 0, label: 'Наслаждаться каждой минутой проведенного времени'},
        {value: 1, label: 'Быть устремленными мыслями в будущее'},
        {value: 2, label: 'Учитывать в ежедневной практике прошлый опыт'}
      ],
    }
  },
  {
    id: 9,
    type: TEST_TYPES.image,
    question: {
      text: "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:",
      source: "src/assets/images/test/test9.png",
      variants: [
        {value: 0, label: 'Оно остроконечное'},
        {value: 1, label: 'Оно устойчиво'},
        {value: 2, label: 'Оно-находится в состоянии равновесия'},
      ]
    }
  },
  {
    id: 10,
    type: TEST_TYPES.image,
    question: {
      text: "Вставьте подходящее число",
      source: "src/assets/images/test/test10.png",
      variants: [
        {value: 0, label: '34'},
        {value: 1, label: '36'},
        {value: 2, label: '53'},
        {value: 3, label: '44'},
        {value: 4, label: '66'},
        {value: 5, label: '42'},
      ],
      variantsInRow: true,
    }
  },
];

export default questionnaireList;