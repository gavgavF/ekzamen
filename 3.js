document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращение отправки формы

    // Сброс сообщений об ошибках
    document.getElementById("nameError").textContent = "";
    document.getElementById("message").textContent = "";

    // Получаем значение из поля имени
    const name = document.getElementById("name").value.trim();

    // Проверка условий на допустимые значения
    const namePattern = /^[A-Za-zА-Яа-яЁё]+$/; 

    if (!name) {
        document.getElementById("nameError").textContent = "Введите ваше имя.";
    } else if (name.length < 2) {
        document.getElementById("nameError").textContent = "Имя должно содержать не менее 2 символов.";
    } else if (name.length > 30) {
        document.getElementById("nameError").textContent = "Имя не должно превышать 30 символов.";
    } else {
        document.getElementById("message").textContent = "Вам вышлен код на номер телефона";
    }

 
 
    /*Номер телефона*/

    document.getElementById("phoneError").textContent = "";
    document.getElementById("message").textContent = "";

    const phone = document.getElementById("phone").value.trim();
    const phonePattern = /^[+7]+[1-90]+$/;

    if (!phone) {
        document.getElementById("phoneError").textContent = "Введите ваш номер телефона."; 
    } else if (phone.length <= 11) {
        document.getElementById("phoneError").textContent = "Номер телефона должен начинаться с +7 и содержать 11 цифр.";
    } else if (phone.length >= 13) {
        document.getElementById("phoneError").textContent = "Номер телефона должен начинаться с +7 и содержать 11 цифр.";
    } else if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Номер должен начинаться с +7 и иметь в себе только цифры.";
    } else {
        document.getElementById("message").textContent = "Данные введены коректно!";
    }

})