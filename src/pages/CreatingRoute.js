import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import {useSelector, useDispatch} from 'react-redux';

import {MainHeder, MainFooter} from '../components';
import {createRoute} from '../action/creatingRoutes';

function CreatingRoute() {
    const validationsSchema = yup.object().shape({
        routeName: yup.string()
        .required('Обязательное поле')
        .matches(/^[^\s][0-9a-zA-Zа-яА-я!@#$%^&*]{3,}$/,'Название должен содержать более 3 символов и не содержать пробелов'),

        description: yup.string()
        .required('Обязательное поле'),

        region: yup.string()
        .required('Обязательное поле'),

        duration: yup.string()
        .required('Обязательное поле')
        .matches(/[0-9]$/,'Продолжительность должна содержать число'),

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
                                routeName: '',
                                description: '',
                                complexity: '',
                                region: '',
                                keyPoints: '',
                                duration: '',
                                createdById: null,
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
                                    name = "routeName"
                                    type = "text" 
                                    placeholder = "Медведь-Камень"
                                >
                                </input>
                                {
                                    touched.routeName && errors.routeName && <p className = "creating-route__error">{errors.routeName}</p>
                                }
                                <h3 className="creating-route__title">Описание</h3>
                                <textarea 
                                    style={{height: "250px", width: "90%", resize: "none"}}
                                    className = "creating-route__input" 
                                    onChange = {handleChange} 
                                    onBlur = {handlBlur} 
                                    value = {values.name}
                                    name = "description"
                                    placeholder = "Гора Медведь-Камень пользуется большой популярностью..."
                                >
                                </textarea>
                                {
                                    touched.description && errors.description && <p className="creating-route__error">{errors.description}</p>
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
                                    <div className="creating-route__col" style={{ marginLeft: "25px"}}>
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
                                            placeholder = "25">
                                        </input>
                                        {
                                            touched.duration && errors.duration && <p className="creating-route__error">{errors.duration}</p>
                                        }
                                    </div>
                                    <div className="creating-route__col" style={{ marginLeft: "25px"}}>
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