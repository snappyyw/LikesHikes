import React from 'react';
import {Link} from 'react-router-dom';

function MainFooter() {

    return(
        <footer className='footer'>
            <div className="сontacts">
                <p className="сontacts__text">
                    E-mail для предложений и запросов: snippymr@yandex.ru
                </p>
                <hr/>
                <p className="сontacts__text">
                    Дискорд для связи с администрацией: Natus mori#7928
                </p>
            </div>
            <div className="footer-nav">
                <ul>
                    <li><Link className="footer-nav__element" to='/'>Главная</Link></li>
                    <li><Link className="footer-nav__element" to='/Routes'>Маршруты</Link></li>
                    <li><Link  className="footer-nav__element" to='/Blog'>Блог</Link></li>
                    <li><Link className="footer-nav__element" to='/Profile'>Профиль</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default MainFooter;