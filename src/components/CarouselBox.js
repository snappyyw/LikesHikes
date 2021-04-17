import React from 'react';
import {Carousel} from 'react-bootstrap';

import forest1 from "../scss/img/сarousel/forest1.jpg";
import forest2 from "../scss/img/сarousel/forest2.jpg";
import forest3 from "../scss/img/сarousel/forest3.jpg";
import forest4 from "../scss/img/сarousel/forest4.jpg";

function CarouselBox() {
    return(
        <div className = "carousel">
            <div className = "carousel__body">
                <Carousel>
                    <Carousel.Item>
                        <img src = {forest1} alt = "Forest" className = "d-block w-100"/>
                        <Carousel.Caption>
                            <h3 className = "carousel__title">Регистрируйся</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src = {forest2} alt = "Forest" className = "d-block w-100"/>
                        <Carousel.Caption>
                            <h3 className = "carousel__title">Выбирай маршруты для путешествий</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src = {forest3} alt = "Forest" className = "d-block w-100"/>
                        <Carousel.Caption>
                            <h3 className = "carousel__title">Создавай свои собственные маршруты</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src = {forest4} alt = "Forest" className = "d-block w-100"/>
                        <Carousel.Caption>
                            <h3 className = "carousel__title">Делись своими маршрутами с другими пользователями</h3>
                        </Carousel.Caption> 
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default CarouselBox;