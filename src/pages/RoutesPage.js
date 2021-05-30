import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Formik} from "formik";
import * as yup from "yup";
import Typography from "@material-ui/core/Typography";
import { Rating } from 'semantic-ui-react'
import Box from "@material-ui/core/Box";

import {
    MainHeder, MainFooter,
    SharedMap
} from '../components';
import {getAllRoutes, routeFilter} from '../action/allRoutes';


function RoutesPage() {
    const routes = useSelector(state => state.allRoutes.routes);
    const dispatch = useDispatch();
    const [valueRating, setValueRating] = React.useState(null);
    const validationsSchema = yup.object().shape({
        nameRoute: yup.string(),
        complexity: yup.string(),
        region: yup.string(),
        keyPoints: yup.string(),
        rating: yup.string(),

    });

    React.useEffect(() => {
        dispatch(getAllRoutes());
    }, []);

    return(
        <>
            <MainHeder/>
            <div className = "routes">
                <div className = "routes__body">
                    <h2 className = "routes__title">Карта маршрутов</h2>
                    <div className="map">
                        <SharedMap 
                            routes={routes}
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,place&key=AIzaSyCm18OXr7nUO_hsYpActf9Dwjc0_jmpK9g`}  
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `700px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
                    <div className="section-filter">
                        <Formik
                            initialValues = {
                                {
                                    nameRoute: '',
                                    complexity: '',
                                    region: '',
                                    keyPoints: '',
                                    rating: '',
                                }
                            }
                            validateOnBlur
                            validationSchema = {validationsSchema}
                            onSubmit = {(values) => dispatch(routeFilter({...values, rating: valueRating}))}
                        >
                            {({values, errors, touched, handleChange, handlBlur, handleSubmit}) => <>
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                    <Typography variant="h5" component="legend">Рейтинг</Typography>
                                    <Rating
                                        size='huge'
                                        icon='star'
                                        defaultRating={valueRating}
                                        maxRating={5}
                                        onRate={(e) => setValueRating(e.target.ariaPosInSet)}
                                    />
                                </Box>
                                <input
                                    className = "section-filter__input"
                                    onChange = {handleChange}
                                    onBlur = {handlBlur}
                                    value = {values.name}
                                    name = "nameRoute"
                                    type = "text"
                                    placeholder = "Название"
                                >
                                </input>
                                <input
                                    className = "section-filter__input"
                                    onChange = {handleChange}
                                    onBlur = {handlBlur}
                                    value = {values.name}
                                    name = "region"
                                    type = "text"
                                    placeholder = "Регион"
                                >
                                </input>
                                <input
                                    className = "section-filter__input"
                                    onChange = {handleChange}
                                    onBlur = {handlBlur}
                                    value = {values.name}
                                    name = "keyPoints"
                                    type = "text"
                                    placeholder = "Ключевые слова"
                                >
                                </input>
                                <select
                                    className = "section-filter__input"
                                    onChange = {handleChange}
                                    onBlur = {handlBlur}
                                    value = {values.name}
                                    name = "complexity"
                                >
                                    <option disabled selected="selected">Выберите сложность</option>
                                    <option>Легкий</option>
                                    <option>Средний</option>
                                    <option>Сложный</option>
                                </select>
                                <br/>
                                <button className = "section-filter__btn" onClick = {handleSubmit} type = "submit">Искать</button>
                            </>}
                        </Formik>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </>
    )
}

export default RoutesPage;