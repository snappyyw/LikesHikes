import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Grid from '@material-ui/core/Grid';
import { Rating } from 'semantic-ui-react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
    Button,
} from 'semantic-ui-react';
import { Formik } from 'formik';
import * as yup from 'yup';


import {
    MainHeder, MainFooter,
    DetailsMap, MyComments,
    ListComments,
} from '../components';
import {getRoute, addComment} from '../action/route';
import {difficultyTranslation} from '../utils/helpFuncion';


function DetailsBlog(prop) {
    const id = prop.location.pathname.split('/')[2];
    const date = useSelector(state => state.routes);
    const user = useSelector(state => state.user);
    const [valueRating, setValueRating] = React.useState(3);
    const dispatch = useDispatch();
    const validationsSchema = yup.object().shape({
        text: yup.string()
            .required('Обязательное поле'),
        routeId: yup.string(),
    });

    React.useEffect(() => {
        dispatch(getRoute(id));
    }, []);

    return(
        <>
            <MainHeder/>
            <div className = "route-details">
                <div className="route-details__body">
                    {
                        date.name &&
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <h2 className="route-details__title">{date.name}</h2>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <span className="route-details__headers">Продолжительность: </span>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <span className="route-details__text">{date.duration} ч.</span>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <span className="route-details__headers">Сложность: </span>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <span className="route-details__text">{difficultyTranslation(date.complexity)}</span>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <span className="route-details__headers">Описание: </span>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <span className="route-details__text">{date.description}</span>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <span className="route-details__headers">Рейтинг: </span>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <span className="route-details__text">{date.rating ? date.rating : 'нет'}</span>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <span className="route-details__headers">Регион: </span>
                            </Grid>
                            <Grid item xs={12} sm={9}    >
                                <span className="route-details__text">{date.region}</span>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <span className="route-details__headers">Расстояние: </span>
                            </Grid>
                            <Grid item xs={12} sm={9}    >
                                <span className="route-details__text">{Math.round(date.length)} км</span>
                            </Grid>
                        </Grid>
                    }
                    {
                        date.name &&
                        user.userName &&
                        !date.userReview &&
                        date.isPublished &&
                        <div className="estimation">
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Typography variant="h5" component="legend">Оцените маршрут</Typography>
                                <Rating
                                    size='huge'
                                    icon='star'
                                    defaultRating={valueRating}
                                    maxRating={5}
                                    onRate={(e) => setValueRating(e.target.ariaPosInSet)}
                                />
                            </Box>
                            {
                                date.isPublished &&
                                date.name &&
                                user.userName &&
                                <Formik
                                    initialValues = {
                                        {
                                            text: '',
                                            routeId: date.id,
                                        }
                                    }
                                    validateOnBlur
                                    validationSchema = {validationsSchema}
                                    onSubmit = {(values) => dispatch(addComment({...values, rating: valueRating}))}
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
                                            <Button content='Добавить отзыв'
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
                    }
                    {
                        date.name &&
                        user.userName &&
                        date.userReview &&
                        <MyComments data={date.userReview} idRoute={id} />
                    }
                    {
                        date.routeReviews.length > 0 &&
                        <h3>Отзывы:</h3>
                    }
                    {
                        date.routeReviews &&
                        date.routeReviews.map((data) =>
                            <ListComments key={data.id} data={data} idRoute={id} />
                        )
                    }
                </div>
            </div>
            <MainFooter/>
        </>
    )
}

export default DetailsBlog;