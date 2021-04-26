import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import {useSelector, useDispatch} from 'react-redux';

import {MainHeder, MainFooter} from '../components';
import {createRoute} from '../action/creatingRoutes';

function CreatingRoute() {
    const validationsSchema = yup.object().shape({

        title: yup.string()
        .required('Обязательное поле')
        .matches(/^[^\s][0-9a-zA-Zа-яА-я!@#$%^&*]{3,}$/,'Название должен содержать более 3 символов и не содержать пробелов'),

        discription: yup.string()
        .required('Обязательное поле'),

        region: yup.string()
        .required('Обязательное поле'),

        duration: yup.string()
        .required('Обязательное поле'),

        complexity: yup.string()
        .required('Выберите сложность маршрута'),
    });
    const coordinates = useSelector(state => state.creatingRoutes.coordinates);
    const dispatch = useDispatch();

    return(
        <>
            <MainHeder/>
            <div className = "creating-route">
                <div className="creating-route__body">
                    <Formik
                        initialValues = {
                            {
                                coordinates: coordinates,
                                title: '',
                                discription: '',
                                complexity: '',
                                region: '',
                                keyPoints: '',
                                duration: '',
                            }
                        }
                        validateOnBlur
                        validationSchema = {validationsSchema}
                        onSubmit = {(values) => dispatch(createRoute(values))}
                    >
                        {({values, errors, touched, handleChange, handlBlur, handleSubmit}) => (
                            <>
                                <h3 className="creating-route__title">Название маршрута</h3>
                                <input 
                                    className = "creating-route__input" 
                                    onChange = {handleChange} 
                                    onBlur = {handlBlur} 
                                    value = {values.name}
                                    name = "title"
                                    type = "text" 
                                    placeholder = "Медведь-Камень"
                                >
                                </input>
                                {
                                    touched.title && errors.title && <p className = "creating-route__error">{errors.title}</p>
                                }
                                <h3 className="creating-route__title">Описание</h3>
                                <textarea 
                                    style={{height: "250px", width: "90%", resize: "none"}}
                                    className = "creating-route__input" 
                                    onChange = {handleChange} 
                                    onBlur = {handlBlur} 
                                    value = {values.name}
                                    name = "discription"
                                    placeholder = "Гора Медведь-Камень пользуется большой популярностью..."
                                >
                                </textarea>
                                {
                                    touched.discription && errors.discription && <p className="creating-route__error">{errors.discription}</p>
                                }
                                <div className="creating-route__row">
                                    <div className="creating-route__col">
                                        <h3 className="creating-route__title">Сложность</h3>
                                        <select 
                                            className = "creating-route__input" 
                                            onChange = {handleChange} 
                                            onBlur = {handlBlur} 
                                            value = {values.name}
                                            name = "complexity"
                                        >
                                            <option disabled selected="selected">Выберите сложность</option> 
                                            <option>Легкий</option>
                                            <option>Средний</option>
                                            <option>Сложный</option>
                                        </select>
                                        {
                                            touched.complexity && errors.complexity && <p className="creating-route__error" >{errors.complexity}</p>
                                        }
                                    </div>
                                    <div className="creating-route__col">
                                        <h3 className="creating-route__title">Регион</h3>
                                        <input 
                                            className = "creating-route__input" 
                                            onChange = {handleChange} 
                                            onBlur = {handlBlur} 
                                            value = {values.name}
                                            name = "region"
                                            type = "text" 
                                            placeholder = "Кострома"
                                        >
                                        </input>
                                        {
                                            touched.region && errors.region && <p className="creating-route__error" >{errors.region}</p>
                                        }
                                    </div>
                                </div>
                                <div className="creating-route__row">
                                    <div className="creating-route__col">
                                        <h3 className="creating-route__title">Продолжительность(в часах)</h3>
                                        <input 
                                            className = "creating-route__input" 
                                            onChange = {handleChange} 
                                            onBlur = {handlBlur} 
                                            value = {values.name}
                                            name = "duration"
                                            type = "text" 
                                            placeholder = "25 часов">
                                        </input>
                                        {
                                            touched.duration && errors.duration && <p className="creating-route__error">{errors.duration}</p>
                                        }
                                    </div>
                                    <div className="creating-route__col">
                                        <h3 className="creating-route__title">Ключевые слова</h3>
                                        <input 
                                            style={{width: "500px"}}
                                            className = "creating-route__input" 
                                            onChange = {handleChange} 
                                            onBlur = {handlBlur} 
                                            value = {values.name}
                                            name = "keyPoints"
                                            type = "text" 
                                            placeholder = "Кострома, волга...">
                                        </input>
                                        {
                                            touched.keyPoints && errors.keyPoints && <p className="creating-route__error">{errors.keyPoints}</p>
                                        }
                                    </div>
                                </div>
                                <button className = "creating-route__btn" onClick = {handleSubmit} type = "submit">Создать</button>
                            </>
                        )}
                    </Formik>
                </div>
            </div>
            <MainFooter/>
        </>
    )
}

export default CreatingRoute;