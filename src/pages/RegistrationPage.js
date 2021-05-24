import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch} from 'react-redux';


import {registration} from '../action/user';
import {SecondHeader} from '../components';

function RegistrationPage() {
    const dispatch = useDispatch();
    const validationsSchema = yup.object().shape({

        userName: yup.string()
        .required('Обязательное поле')
        .matches(/^[^\s][0-9a-zA-Zа-яА-я!@#$%^&*]{5,}$/,'Логин должен содержать более 4 символов и не содержать пробелов'),

        email: yup.string()
        .email('Неверный email')
        .required('Обязательное поле'),

        password: yup.string()
        .matches(/[^\s](?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
            'Пароль должен содержать 6 символов, латинские буквы, одну заглавную букву, одну прописную букву, одну цифру и один спец. символ'
          )
        .required('Обязательное поле'),

        confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'Пароли не совпадают')
        .required('Обязательное поле'),
    });

    return(
        <div className = "registration">
            <SecondHeader />
            <div className = "registration__body">
                <h4 className = "registration__title">Регистрация</h4>
                <Formik
                    initialValues = {
                        {
                            userName: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                        }
                    }
                    validateOnBlur
                    validationSchema = {validationsSchema}
                    onSubmit = {(values) => {dispatch(registration(values))}}
                >
                    {({values, errors, touched, handleChange, handlBlur, handleSubmit}) => (
                        <>
                            <input 
                                className = "registration__input" 
                                onChange = {handleChange} 
                                onBlur = {handlBlur} 
                                value = {values.name}
                                name = "userName"
                                type = "text" 
                                size = "40" 
                                placeholder = "Придумайте логин">
                            </input>
                            {
                                touched.userName && errors.userName && <p className = "registration__error">{errors.userName}</p>
                            }
                            <input 
                                className = "registration__input" 
                                onChange = {handleChange} 
                                onBlur = {handlBlur} 
                                value = {values.name}
                                name = "email"
                                type = "text" 
                                size = "40" 
                                placeholder = "Ваш Email">
                            </input>
                            {
                                touched.email && errors.email && <p className="registration__error">{errors.email}</p>
                            }
                            <input 
                                className = "registration__input" 
                                onChange = {handleChange} 
                                onBlur = {handlBlur} 
                                value = {values.name}
                                name = "password"
                                type = "password" 
                                size = "40" 
                                placeholder = "Придумайте пароль">
                            </input>
                            {
                                touched.password && errors.password && <p className="registration__error">{errors.password}</p>
                            }
                            <input 
                                className = "registration__input" 
                                onChange = {handleChange} 
                                onBlur = {handlBlur} 
                                value = {values.name}
                                name = "confirmPassword"
                                type = "password" 
                                size = "40" 
                                placeholder = "Повторите пароль">
                            </input>
                            {
                                touched.confirmPassword && errors.confirmPassword && <p className="registration__error">{errors.confirmPassword}</p>
                            }
                            <button className = "registration__btn" onClick = {handleSubmit} type = "submit">Регистрация</button>
                        </>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default RegistrationPage;