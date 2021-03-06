import React from 'react';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom';

function MainFooter() {
    const userName = useSelector(state => state.user.userName);

    return(
        <footer className = 'footer'>
            <div className = "сontacts">
                <p className = "сontacts__text">
                    E-mail для предложений и запросов: <a href="/" style={{color: "white"}}>snippymr@yandex.ru</a>
                </p>
                <hr/>
                <p className = "сontacts__text">
                    Дискорд для связи с администрацией: Natus mori#7928
                </p>
            </div>
            <div className = "footer-nav">
                <ul>
                    <li><Link className = "footer-nav__element" to = '/'>Главная</Link></li>
                    <li><Link className = "footer-nav__element" to = '/Routes'>Маршруты</Link></li>
                    <li><Link  className = "footer-nav__element" to = '/Blog'>Блог</Link></li>
                    {
                        userName &&
                        <li><Link className = "footer-nav__element" to = '/Profile'>Профиль</Link></li>
                    }
                </ul>
            </div>
        </footer>
    )
}

export default MainFooter;