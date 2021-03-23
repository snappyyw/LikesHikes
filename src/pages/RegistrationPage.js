import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import {registration} from '../action/user';
import {SecondHeader} from '../components';

function RegistrationPage() {

    const validationsSchema = yup.object().shape({

        login: yup.string()
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
    })

    
    return(
        <div className="registration">
            <SecondHeader />
            <div className="registration__body">
                <h4 className="registration__title">Регистрация</h4>
                <Formik
                initialValues={
                    {
                        login: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                    }
                }
                validateOnBlur
                validationSchema={validationsSchema}
                onSubmit={(values)=>{registration(values)}}
                >
                    {({values, errors, touched, handleChange, handlBlur, handleSubmit})=>(
                        <>
                            <input 
                                className="registration__input" 
                                onChange={handleChange} 
                                onBlur={handlBlur} 
                                value={values.name}
                                name="login"
                                type="text" 
                                size="40" 
                                placeholder="Придумайте логин">
                            </input>
                            {touched.login && errors.login && <p className="registration__error">{errors.login}</p>}

                            <input 
                                className="registration__input" 
                                onChange={handleChange} 
                                onBlur={handlBlur} 
                                value={values.name}
                                name="email"
                                type="text" 
                                size="40" 
                                placeholder="Ваш Email">
                            </input>
                            {touched.email && errors.email && <p className="registration__error">{errors.email}</p>}

                            <input 
                                className="registration__input" 
                                onChange={handleChange} 
                                onBlur={handlBlur} 
                                value={values.name}
                                name="password"
                                type="password" 
                                size="40" 
                                placeholder="Придумайте пароль">
                            </input>
                            {touched.password && errors.password && <p className="registration__error">{errors.password}</p>}

                            <input 
                                className="registration__input" 
                                onChange={handleChange} 
                                onBlur={handlBlur} 
                                value={values.name}
                                name="confirmPassword"
                                type="password" 
                                size="40" 
                                placeholder="Повторите пароль">
                            </input>
                            {touched.confirmPassword && errors.confirmPassword && <p className="registration__error">{errors.confirmPassword}</p>}

                            <div>
                                <button className="registration__btn" onClick={handleSubmit} type="submit">Регистрация</button>
                            </div>
                        </>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default RegistrationPage;