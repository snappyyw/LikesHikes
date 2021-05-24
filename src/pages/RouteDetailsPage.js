import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import {MainHeder, MainFooter, DetailsMap, ListComments} from '../components';
import {getRoute} from '../action/route';
import {difficultyTranslation} from '../utils/helpFuncion';

function RouteDetailsPage(prop) {
    const id = prop.location.pathname.split('/')[2];
    const date = useSelector(state => state.routes);
    const user = useSelector(state => state.user);
    const [value, setValue] = React.useState(0);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getRoute(id))
    }, []);

    return(
        <>
            <MainHeder/>
                <div className = "route-details">
                    <div className="route-details__body">
                        <DetailsMap
                                routes={date}
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,place&key=AIzaSyCm18OXr7nUO_hsYpActf9Dwjc0_jmpK9g`}  
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `400px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                        />
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
                                    <span className="route-details__text">{date.rating}</span>
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <span className="route-details__headers">Регион: </span>
                                </Grid>
                                <Grid item xs={12} sm={9}    >
                                    <span className="route-details__text">{date.region}</span>
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <span className="route-details__headers">Длительность: </span>
                                </Grid>
                                <Grid item xs={12} sm={9}    >
                                    <span className="route-details__text">{Math.round(date.length)} км</span>
                                </Grid>
                            </Grid>
                        }
                        {
                            date.name &&
                            // user.userName &&
                            <div className="estimation">
                                <p className="estimation__text">
                                        Оцените маршрут
                                </p>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    precision={0.5}
                                    size="large"
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </div>
                        }
                        {
                            date.name &&
                            // user.userName &&
                            <div className="comments">
                                <ListComments />
                            </div>
                        }
                    </div>
                </div>
            <MainFooter/>
        </>
    )
}

export default RouteDetailsPage;