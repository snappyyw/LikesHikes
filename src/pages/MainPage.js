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
                    <p className = "service__subtitle"></p>
                    <b className = "service__title">Зачем нужен этот сервис</b>
                    <p className = "service__subtitle"></p>
                    <b className = "service__title">Особенности</b>
                    <p className = "service__subtitle"></p>
                </div>
            </section>
            <section className = "section-comments">

            </section>
            <MainFooter/>
        </>
    )
}

export default MainPage;