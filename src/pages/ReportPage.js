import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Grid from "@material-ui/core/Grid";
import {useHistory} from 'react-router-dom';

import {MainHeder, MainFooter} from '../components';
import {getReport , deleteReport} from "../action/user";

function ReportPage(prop) {
    const id = prop.location.pathname.split('/')[3];
    const dispatch = useDispatch();
    const report = useSelector (state => state.report);
    const history = useHistory();

    React.useEffect(() => {
        dispatch(getReport(id));
    }, [])

    return(
        <>
            <MainHeder/>
            <div className="report">
                <div className="report__body">
                    {
                        report &&
                        <Grid container spacing={7}>
                            <Grid item xs={12}>
                                <h2 className="report__title">Отчет</h2>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <span className="report__text">Название: </span>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <span className="report__text">{report.name}</span>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <span className="report__text">Содержание</span>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <span className="report__text">{report.text}</span>
                            </Grid>
                            <Grid item xs={12} style={{textAlign: 'center'}}>
                                <button className="report__button" onClick={() => history.push({
                                    pathname: `/Profile/CreateRouteReport/${id}`,
                                    state: report})}
                                >
                                    Изменить
                                </button>
                                <button className="report__button" onClick={() => dispatch(deleteReport({id, history}))}>Удалить</button>
                            </Grid>
                        </Grid>
                    }
                </div>
            </div>
            <MainFooter/>
        </>
    )
}

export default ReportPage;