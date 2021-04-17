import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

import {SecondHeader} from '../components';
import {login} from '../action/user'

function AuthorizationPage() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.currentUser);
    const history = useHistory();
    const validationsSchema = yup.object().shape({
        
        login: yup.string()
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
                            login: '',
                            password: '',
                        }
                    }
                    validateOnBlur
                    validationSchema = {validationsSchema}
                    onSubmit = {(values) => {dispatch(login(values), user && history.push('/'))}}
                >
                {({values, errors, touched, handleChange, handlBlur, handleSubmit}) => (
                    <>
                        <input 
                            className = "authorization__input" 
                            onChange = {handleChange} 
                            onBlur = {handlBlur} 
                            value = {values.name}
                            name = "login"
                            type = "text" 
                            size = "40" 
                            placeholder = "Ваш логин">
                        </input>
                        {
                            touched.login && errors.login && <p className="authorization__error">{errors.login}</p>
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
                        <div>
                            <button className = "authorization__btn" onClick = {handleSubmit} type = "submit">Авторизоваться</button>
                        </div>
                    </>
                )}
                </Formik>
            </div>
        </div>
    )
}

export default AuthorizationPage;