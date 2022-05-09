// Задание
// Реализовать функцию для создания объекта "пользователь". Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

// Технические требования:

// Написать функцию createNewUser(), которая будет создавать и возвращать объект newUser.
// При вызове функция должна спросить у вызывающего имя и фамилию.
// Используя данные, введенные пользователем, создать объект newUser со свойствами firstName и lastName.
// Добавить в объект newUser метод getLogin(), который будет возвращать первую букву имени пользователя, соединенную с фамилией пользователя, все в нижнем регистре (например, Ivan Kravchenko → ikravchenko).
// Создать пользователя с помощью функции createNewUser(). Вызвать у пользователя функцию getLogin(). Вывести в консоль результат выполнения функции.

function createNewUser (params) {  
    let firstName = prompt ('What is your name?', '');
    let lastName = prompt ('What is your last name?', '');
    const newUser = {
        firstName,
        lastName,
        getLogin(){
           return`${this.firstName[0]}+${this.lastName}.toLowerCase`;      
    }
};
    return newUser;
}
createNewUser();








