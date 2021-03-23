import React from 'react';

import {MainHeder, MainFooter, BlogList} from '../components';

function BlogPage() {
    return(
        <>
            <MainHeder/>
            <div className="blog">
                <div className="blog__body">
                    <BlogList />
                </div>
            </div>
            <MainFooter/>
        </>
    )
}

export default BlogPage;