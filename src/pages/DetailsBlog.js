import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Grid, Image } from 'semantic-ui-react'

import {
    Button,
} from 'semantic-ui-react';
import { Formik } from 'formik';
import * as yup from 'yup';

import {
    MainHeder, MainFooter,
    ListCommentsBlog,
} from '../components';
import {getDetailsBlog, addCommentBlog} from "../action/blog";


function DetailsBlog(prop) {
    const id = prop.location.pathname.split('/')[2];
    const blog = useSelector(state => state.blog);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const validationsSchema = yup.object().shape({
        text: yup.string()
            .required('Обязательное поле'),
        routeId: yup.string(),
    });

    React.useEffect(() => {
        dispatch(getDetailsBlog(id));
    }, []);

    return(
        <>
            <MainHeder/>
            <div className = "route-details">
                <div className="route-details__body">
                    {
                        blog.id &&
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <h2 className="route-details__title">{blog.heading}</h2>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Image src={`http://likeshikes.somee.com/api/images/GetImage?id=${blog.appImageId}`} width="100%" height="400px" />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                            <Grid.Column width={16}>
                                 <span className="route-details__text">
                                    {blog.text}
                                </span>
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    }
                    <div className="estimation">
                        {
                            blog.id &&
                            user.userName &&
                            <Formik
                                initialValues = {
                                    {
                                        text: '',
                                        PostId: blog.id,
                                    }
                                }
                                validateOnBlur
                                validationSchema = {validationsSchema}
                                onSubmit = {(values) => dispatch(addCommentBlog({...values}))}
                            >
                                {({values, errors, touched, handleChange, handlBlur, handleSubmit}) => (
                                    <>
                                        <textarea
                                            style={{height: "100px", width: "60%", resize: "none"}}
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
                                        <br/>
                                        <Button content='Добавить комментарий'
                                                labelPosition='left'
                                                icon='edit'
                                                primary
                                                type='submit'
                                                onClick = {handleSubmit}
                                        />
                                        </>
                                    )}
                            </Formik>
                        }
                    </div>
                    {
                        blog.comments.length > 0 &&
                        <h3>Комментарии:</h3>
                    }
                    {
                        blog.comments &&
                        blog.comments.map((data) =>
                            <ListCommentsBlog key={data.id} data={data} idBlog={blog.id} blog={true} />
                        )
                    }
                </div>
            </div>
            <MainFooter/>
        </>
    )
}

export default DetailsBlog;