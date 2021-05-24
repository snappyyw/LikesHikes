import React from 'react';
import {useDispatch} from 'react-redux'

import {MainHeder, MainFooter} from '../components';


function ReportPage(prop) {
    const dispatch = useDispatch()
    const id = prop.location.customData

    return(
        <>
            <MainHeder/>
            <div className="report">
                <div className="report__body">

                </div>
            </div>
            <MainFooter/>
        </>
    )
}

export default ReportPage;