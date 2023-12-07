function submitForm() {
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var phone = document.getElementById('tel').value;
    var address = document.getElementById('adress').value;
    var birthdate = document.getElementById('birth_date').value;
    var agreement1 = document.getElementById('pers_data').value;
    var patronymic = document.getElementById('patronymic').value;
    var education = document.getElementById('select').value;
    var agreement2 = document.getElementById('inform').value;
    var email = document.getElementById('email').value;
    var workPlace = document.getElementById('work_place').value;
    var bk1=document.getElementById('book_number1').value
    var bk2=document.getElementById('book_number2').value
    var bk3=document.getElementById('book_number3').value
    var bk4=document.getElementById('book_number4').value
    var bk5=document.getElementById('book_number5').value
    var bk6=document.getElementById('book_number6').value
    var bk7=document.getElementById('book_number7').value
    var bk8=document.getElementById('book_number8').value
    var bk9=document.getElementById('book_number9').value
    var N =bk1.toString()+bk2+bk3+bk4+bk5;
    var Year =bk6.toString()+bk7+bk8+bk9;

    if (name && phone && address && birthdate && document.getElementById('pers_data').checked && surname && bk1  && bk2  && bk3  && bk4  && bk5  && bk6  && bk7  && bk8  && bk9) {
        if (N.length>5) {
            alert('Пожалуйста, введите корректный номер, используя каждую ячейку для одной цифры!');
            return;
        }
        if (!validateName(name)) {
            alert('Пожалуйста, введите корректное имя, используя символы кириллицы!');
            return;
        }

        if (!validatePhone(phone)) {
            alert('Пожалуйста, введите корректный номер телефона в формате 88005553535!');
            return;
        }

        if (!validateSurname(surname)) {
            alert('Пожалуйста, введите корректную фамилию, используя символы кириллицы!');
            return;
        }
        if (patronymic.toString() =="") {patronymic="-"}
        else{if (!validateSurname(patronymic)) {
            alert('Пожалуйста, введите корректное отчество, используя символы кириллицы!');
            return;
        }}
        if (email.toString() =="") {email="-"}
        else{if (!validateEmail(email)) {
            alert('Пожалуйста, введите корректный email в формате IvanGenii2012@mail.ru!');
            return;
        }}
        if (workPlace.toString() =="") {workPlace="-"}
        else{if (!validateWorkPlace(workPlace)) {
            alert('Пожалуйста, введите корректное место работы, используя цифры и кириллицу!');
            return;
        }}
        if (document.getElementById('inform').checked==0) {agreement2="-"}
        document.getElementById('registration').reset();

        var outputDiv = document.getElementById('output');

        outputDiv.innerHTML = '№: ' + N + '  Год: ' + Year +  '<br>Фамилия: ' + surname + '  Имя: ' + name + '<br>Отчество: ' + patronymic +
            '<br>Дата рождения: ' + birthdate + '<br>Образование: ' + education + '<br>Место работы: ' + workPlace +
            '<br>Телефон: ' + phone + '<br>Адрес: ' + address + '<br>Электронная почта: ' + email + '<br>Соглашение-1: ' + agreement1 + '<br>Соглашение-2: ' + agreement2;
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
}
function validateName(name) {
    var str = /^[А-Яа-яЁё]+$/;
    return str.test(name);
}

function validateSurname(surname) {
    var str = /^[А-Яа-яЁё]+$/;
    return str.test(surname);
}
function validateWorkPlace(workPlace) {
    var str = /^[А-Яа-яЁё]+\d*$/;
    return str.test(workPlace);
}
function validatePhone(phone) {
    var str = /^8\d{10}$/;
    return str.test(phone);
}
function validateEmail(email) {
    var str = /\S+@\S+\.\S+/;
    return str.test(email);
}