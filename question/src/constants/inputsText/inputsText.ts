const firstNameAsk = {
    nick: 'firstName',
    label: 'Контактна особа',
    placeholder: 'contact person',
}
const phoneNumberAsk = {
    nick: 'phoneNumber',
    label: 'Вкажіть номер телефону',
    placeholder: '+380441112233',
}
const emailAsk = {
    nick: 'email',
    label: 'Вкажіть email',
    placeholder: 'example@gmail.com',
}

const chanelSpeakAsc = {
    nick: 'chanelSpeak',
    placeholder: 'Вкажіть зручний для Вас канал зв\'язку:',
    arr: [
        { value: 'Telegram', label: 'Telegram' },
        { value: 'Email', label: 'Email' },
        { value: 'Zoom', label: 'Zoom' },
        { value: 'Спілкування по телефону', label: 'Спілкування по телефону' },
    ],
}

const visitSpeakAsk = {
    nick: 'visitSpeak',
    placeholder: 'Де вам буде зручно проводити робочі зустрічі з питань проекту?',
    arr: [
        { value: 'У офісі компанії', label: 'У офісі компанії' },
        { value: 'Віддалено', label: 'Віддалено' }
    ],
}

const companyNameAsk = {
    nick: 'companyName',
    label: 'Назва компанії або бренду',
    placeholder: 'company / brand',
}

const serviceAreaAsk = {
    nick: 'serviceArea',
    label: 'Ваші послуги чи продукт',
    placeholder: 'services or product',
}

const uniqueProductAsc = {
    nick: 'uniqueProduct',
    label: 'Унікальні переваги бренду, продукту чи послуги, для якої створюється сайт \n (що відрізняє Вас від конкурентів):',
    placeholder: 'unique advantages',
}

const currentWebAsc = {
    nick: 'currentWeb',
    required: false,
    defaultText: ' ',
    label: 'Якщо є діючий сайт - залиште посилання:',
    placeholder: 'example.com',
}

const needToDoAsk = {
    nick: 'needToDo',
    placeholder: 'Що необхідно зробити?',
    arr: [
        { value: 'Створити новий сайт', label: 'Створити новий сайт' },
        { value: 'Модернізувати існуючий сайт', label: 'Модернізувати існуючий сайт' }
    ],
}


const termAsc = {
    nick: 'term',
    label: 'Вкажіть бажаний термін розробки \n (вкажіть термін у кількості місяців)',
    placeholder: 12,
}
const budgetAsc = {
    nick: 'budget',
    label: 'Вкажіть передбачуваний бюджет на розробку \n (вкажіть у USD)',
    placeholder: 1000,
}
const startAsc = {
    nick: 'start',
    // defaultText: new Date(),
    label: 'Вкажіть дедлайн запуску інтернет-проєкту:',
    placeholder: 'deadline',
}
const aboutClientsAsc = {
    nick: 'aboutClients',
    label: 'На яких відвідувачів розрахований сайт\n (вкажіть важливі моменти, які об’єднують Ваших потенційних клієнтів)',
    placeholder: 'some about clients',
}
const aboutCompetitorsAsc = {
    nick: 'aboutCompetitors',
    label: 'Вкажіть ваших прямих конкурентів. Дайте оцінку їх сайтам (що подобається та не подобається)',
    placeholder: 'some about competitors',
}

const designWebAsk = {
    nick: 'designWeb',
    placeholder: 'Дизайн розробки чи модернізації сайту:',
    arr: [
        { value: 'Є готовий', label: 'Є готовий' },
        { value: 'Потрібна розробка індивідуального дизайну під ключ', label: 'Потрібна розробка індивідуального дизайну під ключ' },
        { value: 'Розробка чи модернізація на основі шаблонного рішення', label: 'Розробка чи модернізація на основі шаблонного рішення' },
    ],
}


const elementsWebAsc = {
    nick: 'elementsWeb',
    label: 'Вкажіть  елементи, які повинні бути присутніми на сайті:',
    placeholder: 'some elements',
}
const pagesWebAsc = {
    nick: 'pagesWeb',
    label: 'Вкажіть необхідні сторінки сайту:',
    placeholder: 'some pages',
}

const functionalWebAsc = {
    nick: 'functionalWeb',
    label: 'Вкажіть необхідний функціонал сайту:',
    placeholder: 'some functional',
}

const contentWebAsk = {
    nick: 'contentWeb',
    placeholder: 'Чи готовий контент для майбутнього сайту?',
    arr: [
        { value: 'Готовий текст', label: 'Готовий текст (для всього сайту)' },
        { value: 'Готові фото', label: 'Готові усі фото (для всього сайту)' },
        { value: 'Готові відео', label: 'Готові відео (для всього сайту)' },
        { value: 'нічого не готове', label: 'Поки що нічого не готове' },
    ],
}

const forgotAsc = {
    nick: 'forgot',
    label: 'Напишіть, що ще Ви б хотіли додати до інформації, вказаної у брифі.',
    placeholder: 'what else would you like to add...',
}



export {
    firstNameAsk,
    phoneNumberAsk,
    emailAsk,
    chanelSpeakAsc,
    visitSpeakAsk,
    companyNameAsk,
    serviceAreaAsk,
    uniqueProductAsc,
    currentWebAsc,
    needToDoAsk,
    termAsc,
    budgetAsc,
    startAsc,
    aboutClientsAsc,
    aboutCompetitorsAsc,
    designWebAsk,
    elementsWebAsc,
    pagesWebAsc,
    functionalWebAsc,
    contentWebAsk,
    forgotAsc,

}
