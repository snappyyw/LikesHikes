import React from 'react';

import {MainHeder, MainFooter, CarouselBox} from '../components';

function MainPage() {
    return(
        <>
            <MainHeder/>
            <CarouselBox/>
            <section className = "service">
                <div className = "service__body">
                    <b className = "service__title">О нас</b>
                    <p className = "service__subtitle">LikesHikes - это сервис для любителей туризма и различных походов. Он позволяет вам создать свой собственный маршрут и делиться им с остальными. На сайте также присутствует блог с различной полезной информацией где вы можете узнать много нового и поделиться своими впечатлениями.</p>
                    <b className = "service__title">Особенности</b>
                    <p className = "service__subtitle">На нашем сайте вы можете делать отчёты для каждого своего пройденного маршрута, чтобы они всегда были у вас под рукой.</p>
                </div>
            </section>
            <section className = "section-comments">
            </section>
            <MainFooter/>
        </>
    )
}

export default MainPage;