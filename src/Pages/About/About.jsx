import React from 'react'
import { Typography } from 'antd';

const { Title } = Typography;
export default function About() {
    return (
        <div style={{display:'flex',flexDirection:'column',margin:'auto', width:'60%', minWidth:'300px'}}>
            <Title style={{textAlign:'center'}}>Это тестовое задание</Title>
            <Title level={3}>Требования по заданию:</Title>
            <ul>
                <li>Использовать React</li>
                <li>Использовать только функциональные компоненты</li>
                <li>В качестве state management-а использовать Redux</li>
                <li>Antd дизайн</li>
                <li>Все поля должны быть валидированными, если пользователь ввел некорректные данные вывести alert</li>
                <li>Для роутингов использовать react router dom</li>
            </ul>
            <div style={{textAlign:'center', marginBottom:'20px'}}>Выполнил Искандер</div>
            <div class="linksContainer">
                <a href="https://github.com/iskan-iskra" target="_blank"  rel="noreferrer">
                    <div class="icon githubIcon"></div>
                </a>
                <a href="https://www.instagram.com/iskan_iskra" target="_blank"  rel="noreferrer">
                    <div class="icon instagramIcon"></div>
                </a>
                <a href="https://telegram.me/iskan_iskra" target="_blank"  rel="noreferrer">
                    <div class="icon telegramIcon"></div>
                </a>
                <a href="https://vk.com/iskan_iskra" target="_blank"  rel="noreferrer">
                    <div class="icon vkIcon"></div>
                </a>
            </div>
        </div>
    )
}
