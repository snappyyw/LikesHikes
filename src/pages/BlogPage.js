import React from 'react';
import { useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom'

import {MainHeder, MainFooter, BlogList} from '../components';
import {getBlog} from '../action/blog';

function BlogPage() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getBlog())
    }, []);

    return(
        <>
            <MainHeder/>
            <div className = "blog">
                <div className = "blog__body">
                    <BlogList />
                </div>
            </div>
            <MainFooter/>
        </>
    )
}

export default BlogPage;