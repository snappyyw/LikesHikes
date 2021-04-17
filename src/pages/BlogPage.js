import React from 'react';
import { useDispatch } from 'react-redux';

import {MainHeder, MainFooter, BlogList} from '../components';
import {receiveBlog} from '../action/blog';

function BlogPage() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(receiveBlog())
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