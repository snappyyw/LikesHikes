import React from 'react';
import {useDispatch} from 'react-redux';
import * as yup from "yup";
import {Formik} from "formik";
import {useHistory} from 'react-router-dom'

import {MainHeder, MainFooter} from '../components';
import {createReport} from '../action/user';



function EditReportPage(prop) {
    const dispatch = useDispatch()
    const id = prop.location.pathname.split('/')[3];
    const data = prop.location.state;
    const history = useHistory();
    const validationsSchema = yup.object().shape({
        reportName: yup.string()
            .required('Обязательное поле'),

        text: yup.string()
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
                                reportName: data ? data.name: '',
                                text: data ? data.text : '',
                                RouteId: id,
                            }
                        }
                        validateOnBlur
                        validationSchema = {validationsSchema}
                        onSubmit = {(values) => dispatch(createReport({values, history}))}
                    >
                        {({values, errors, touched, handleChange, handlBlur, handleSubmit}) => (
                            <>
                                <h3 className="creating-route__title">Название отчета</h3>
                                <input
                                    className = "creating-route__input"
                                    onChange = {handleChange}
                                    onBlur = {handlBlur}
                                    value = {values.reportName}
                                    name = "reportName"
                                    type = "text"
                                >
                                </input>
                                {
                                    touched.reportName && errors.reportName && <p className = "creating-route__error">{errors.reportName}</p>
                                }
                                <h3 className="creating-route__title">Описание</h3>
                                <textarea
                                    style={{height: "250px", width: "90%", resize: "none"}}
                                    className = "creating-route__input"
                                    onChange = {handleChange}
                                    onBlur = {handlBlur}
                                    value = {values.text}
                                    name = "text"
                                >
                                </textarea>
                                {
                                    touched.text && errors.text && <p className="creating-route__error">{errors.text}</p>
                                }
                                <button className = "creating-route__btn" onClick = {handleSubmit} type = "submit">{data ? "Сохранить" : "Создать"}</button>
                            </>
                        )}
                    </Formik>
                </div>
            </div>
            <MainFooter/>
        </>
    )
}

export default EditReportPage;