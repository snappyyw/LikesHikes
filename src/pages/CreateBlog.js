import React from 'react';
import {useDispatch} from 'react-redux';
import * as yup from "yup";
import {Formik} from "formik";
import {useHistory} from 'react-router-dom'

import {MainHeder, MainFooter} from '../components';
import {createBlog} from '../action/blog';



function CreateBlog() {
    const dispatch = useDispatch()
    const history = useHistory();
    const validationsSchema = yup.object().shape({
        heading: yup.string()
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
                                heading: '',
                                text: '',
                            }
                        }
                        validateOnBlur
                        validationSchema = {validationsSchema}
                        onSubmit = {(values) => dispatch(createBlog({values, history}))}
                    >
                        {({values, errors, touched, handleChange, handlBlur, handleSubmit}) => (
                            <>
                                <h3 className="creating-route__title">Название блога</h3>
                                <input
                                    className = "creating-route__input"
                                    onChange = {handleChange}
                                    onBlur = {handlBlur}
                                    value = {values.name}
                                    name = "heading"
                                    type = "text"
                                >
                                </input>
                                {
                                    touched.heading && errors.heading && <p className = "creating-route__error">{errors.heading}</p>
                                }
                                <h3 className="creating-route__title">Описание</h3>
                                <textarea
                                    style={{height: "250px", width: "90%", resize: "none"}}
                                    className = "creating-route__input"
                                    onChange = {handleChange}
                                    onBlur = {handlBlur}
                                    value = {values.name}
                                    name = "text"
                                >
                                </textarea>
                                {
                                    touched.text && errors.text && <p className="creating-route__error">{errors.text}</p>
                                }
                                <input type="file" name="f"></input>
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

export default CreateBlog;