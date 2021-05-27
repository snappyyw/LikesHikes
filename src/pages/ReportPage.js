import React from 'react';
import {useDispatch} from 'react-redux'

import {MainHeder, MainFooter} from '../components';
import * as yup from "yup";
import {createRoute} from "../action/creatingRoutes";
import {Formik} from "formik";


function ReportPage(prop) {
    const dispatch = useDispatch()
    const id = prop.location.customData;
    const validationsSchema = yup.object().shape({
        title: yup.string()
            .required('Обязательное поле'),

        description: yup.string()
            .required('Обязательное поле'),

    });

    return(
        <>
            <MainHeder/>
            <div className="report">
                <div className="report__body">
                    <Formik
                        initialValues = {
                            {
                                title: '',
                                description: '',
                            }
                        }
                        validateOnBlur
                        validationSchema = {validationsSchema}
                        onSubmit = {(values) => dispatch(createRoute(values))}
                    >
                        {({values, errors, touched, handleChange, handlBlur, handleSubmit}) => (
                            <>
                                <h3 className="creating-route__title">Название отчета</h3>
                                <input
                                    className = "creating-route__input"
                                    onChange = {handleChange}
                                    onBlur = {handlBlur}
                                    value = {values.name}
                                    name = "routeName"
                                    type = "text"
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
                                >
                                </textarea>
                                {
                                    touched.description && errors.description && <p className="creating-route__error">{errors.description}</p>
                                }
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

export default ReportPage;