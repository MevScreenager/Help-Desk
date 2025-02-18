import React from "react";

const PersonForm = (props) => {
    return (
        <form className="personForm" {...props}>

            <h4 id="profile">Профиль</h4>
            <label htmlFor='firstName' id="1" >Имя</label>
            <label htmlFor='secondName' id="2">Фамилия</label>
            <label htmlFor='patronymic' id="3">Отчество</label>
            <label htmlFor='dataOfBirth' id="4">Дата рождения</label>
            <label htmlFor='gender' id="5">Пол</label>
            <label htmlFor='status' id="6">Статус</label>
            <input id="firstName" type="text" name="firstName" required/>
            <input id="secondName" type="text" name="secondName" required/>
            <input id="patronymic" type="text" name="patronymic"/>
            <input id="dataOfBirth" type="date" name="dataOfBirth" placeholder="" required/>
            <select id="gender" name="gender" defaultValue='ваш пол' required>
                <option value=''>ваш пол...</option>
                <option value='male'>Мужской</option>
                <option value='female'>Женский</option>
            </select>
            <textarea id="status" name="status"/>

            <h4 id="placeWork">Место работы</h4>
            <label htmlFor='company' id="7">Компания</label>
            <label htmlFor='post' id="8">Должность</label>
            <input id="company" type="text" name="company"/>
            <input id="post" type="text" name="post"/>

            <h4 id="contacts">Контакты</h4>
            <label htmlFor='city' id="9">Город</label>
            <label htmlFor='email' id="10">Почта</label>
            <label htmlFor='phone' id="11">Телефон</label>
            <input id="city" type="text" name="city" required/>
            <input id="email" type="email" name="email" required/>
            <input id="phone" type="tel" name="phone" required/>

            <h4 id="entrance">Вход</h4>
            <label htmlFor='password' id="12">Пароль</label>
            <input id="password" type="text" name="password" required/>

            <button id="save" type="submit">Сохранить</button>
        </form>
    )
}

export default PersonForm

