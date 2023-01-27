import cryptoRandomString from 'crypto-random-string';

export const randomString = (len:number): string => {
    return cryptoRandomString({length: len, characters: 'abcdefghijklmnopqrstuvwxyz '})
}

export const randomStringWithoutSpace = (len:number): string => {
    return cryptoRandomString({length: len, characters: 'abcdefghijklmnopqrstuvwxyz'})
}

export const randomNumber = (len:number): number => {
    return +cryptoRandomString({length: len, type: 'numeric'})
}

export const fillRandomForm = async (setValue: any) => {
    await setValue('firstName', randomString(5));
    await setValue('phoneNumber', '+' + randomNumber(12));
    await setValue('email', randomStringWithoutSpace(5) + '@gmail.com');
    await setValue('chanelSpeak', ['Telegram', 'Спілкування по телефону']);
    await setValue('visitSpeak', 'Віддалено');
    await setValue('companyName', randomString(10));
    await setValue('serviceArea', randomString(20));
    await setValue('uniqueProduct', randomString(20));
    await setValue('currentWeb', randomStringWithoutSpace(5) + '.com');
    await setValue('needToDo', 'Створити новий сайт');
    await setValue('term', randomNumber(2));
    await setValue('budget', randomNumber(4));
    await setValue('start', '2023-11-11');
    await setValue('aboutClients', randomString(20));
    await setValue('aboutCompetitors', randomString(20));
    await setValue('designWeb', 'Є готовий');
    await setValue('elementsWeb', randomString(50));
    await setValue('pagesWeb', randomString(50));
    await setValue('functionalWeb', randomString(50));
    await setValue('contentWeb', ['Готовий текст', 'Готові фото']);
    await setValue('forgot', randomString(50));
}

export const clearRandomForm = async (setValue: any) => {
    await setValue('firstName', '');
    await setValue('phoneNumber', '');
    await setValue('email', '');
    await setValue('chanelSpeak', '');
    await setValue('visitSpeak', '');
    await setValue('companyName', '');
    await setValue('serviceArea', '');
    await setValue('uniqueProduct', '');
    await setValue('currentWeb', '');
    await setValue('needToDo', '');
    await setValue('term', '');
    await setValue('budget', '');
    await setValue('start', '');
    await setValue('aboutClients', '');
    await setValue('aboutCompetitors', '');
    await setValue('designWeb', '');
    await setValue('elementsWeb', '');
    await setValue('pagesWeb', '');
    await setValue('functionalWeb', '');
    await setValue('contentWeb', '');
    await setValue('forgot', '');
}
