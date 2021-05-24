import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

import {SecondHeader} from '../components';
import {login} from '../action/user'

function AuthorizationPage() {
    const dispatch = useDispatch();
    const userName = useSelector(state => state.user.userName);
    const history = useHistory();
    const validationsSchema = yup.object().shape({
        email: yup.string()
        .required('Обязательное поле'),

        password: yup.string()
        .required('Обязательное поле'),
    });

    return(
        <div className = "authorization">
            <SecondHeader />
            <div className = "authorization__body">
                <h4 className = "authorization__title">Вход</h4>
                <Formik
                    initialValues = {
                        {
                            email: '',
                            password: '',
                        }
                    }
                    validateOnBlur
                    validationSchema = {validationsSchema}
                    onSubmit = {(values) => {dispatch(login(values), userName && history.push('/'))}}
                >
                {({values, errors, touched, handleChange, handlBlur, handleSubmit}) => (
                    <>
                        <input 
                            className = "authorization__input"
                            onChange = {handleChange}
                            onBlur = {handlBlur}
                            value = {values.name}
                            name = "email"
                            type = "text"
                            size = "40"
                            placeholder = "Ваш email">
                        </input>
                        {
                            touched.email && errors.email && <p className="authorization__error">{errors.email}</p>
                        }
                        <input 
                            className = "authorization__input" 
                            onChange = {handleChange} 
                            onBlur = {handlBlur} 
                            value = {values.name}
                            name = "password"
                            type = "password" 
                            size = "40" 
                            placeholder = "Ваш пароль">
                        </input>
                        {
                            touched.password && errors.password && <p className="authorization__error">{errors.password}</p>
                        }
                        <button className = "authorization__btn" onClick = {handleSubmit} type = "submit">Авторизоваться</button>
                    </>
                )}
                </Formik>
            </div>
        </div>
    )
}

export default AuthorizationPage;