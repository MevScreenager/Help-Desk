import React from "react";

const PersonForm = () => {
    return (
        <form className="personForm">

            <h4 id="profile">Профиль</h4>
            <label for='firstName' id="1" required>Имя</label>
            <label for='secondName' id="2">Фамилия</label>
            <label for='patronymic' id="3">Отчество</label>
            <label for='dataOfBirth' id="4">Дата рождения</label>
            <label for='gender' id="5">Пол</label>
            <label for='status' id="6">Статус</label>
            <input id="firstName" type="text" name="firstName"/>
            <input id="secondName" type="text" name="secondName"/>
            <input id="patronymic" type="text" name="patronymic"/>
            <input id="dataOfBirth" type="data" name="dataOfBirth"/>
            <select id="gender" name="gender" required>
                <option selected>ваш пол...</option>
                <option value='male'>Мужской</option>
                <option value='female'>Женский</option>
            </select>
            <textarea id="status" name="status"/>

            <h4 id="placeWork">Место работы</h4>
            <label for='company' id="7">Компания</label>
            <label for='post' id="8">Должность</label>
            <input id="company" type="text" name="company"/>
            <input id="post" type="text" name="post"/>

            <h4 id="contacts">Контакты</h4>
            <label for='city' id="9">Город</label>
            <label for='email' id="10">Почта</label>
            <label for='phone' id="11">Телефон</label>
            <input id="city" type="text" name="city"/>
            <input id="email" type="email" name="email"/>
            <input id="phone" type="tel" name="phone"/>

            <button id="save" type="button">Сохранить</button>
        </form>
    )
}

export default PersonForm

