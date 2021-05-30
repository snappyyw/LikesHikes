import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Button } from 'semantic-ui-react'
import {useHistory} from 'react-router-dom';

import {MainHeder, MainFooter, BlogList} from '../components';
import {getBlog} from '../action/blog';

function BlogPage() {
    const dispatch = useDispatch();
    const page = useSelector(state => state.blog);
    const isAdmin = useSelector( state => state.user.isAdmin);
    const history = useHistory();

    React.useEffect(() => {
        dispatch(getBlog(1));
    }, []);


    return(
        <>
            <MainHeder/>
            <div className = "blog">
                <div className = "blog__body">
                    {
                        isAdmin &&
                        <Button
                            onClick={() => {history.push({pathname: `/CreateBlog`})}}
                            variant="contained"
                            color="green"
                        >
                            Создать
                        </Button>
                    }
                    <BlogList />
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                            <Grid item>
                                {
                                    page.posts.length > 0&&
                                    <Button
                                        onClick={() => {
                                            page.pageModel.hasPreviousPage &&
                                            dispatch(getBlog(page.pageModel.pageNumber - 1))
                                        }}
                                        variant="contained"
                                        color="green"
                                    >
                                        Предыдущая страниц
                                    </Button>
                                }
                            </Grid>
                            <Grid item>
                                {
                                    page.posts.length > 0 &&
                                    <span style={{height: "50px", lineHeight: "50px"}}>{page.pageModel.pageNumber} из {page.pageModel.totalPages}</span>
                                }
                            </Grid>
                            <Grid item>
                                {
                                    page.posts.length > 0 &&
                                    <Button
                                        onClick={() => {
                                            page.pageModel.hasNextPage &&
                                            dispatch(getBlog(page.pageModel.pageNumber + 1))
                                        }}
                                        variant="contained"
                                        color="green"
                                    >
                                        Следующая страница
                                    </Button>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <MainFooter/>
        </>
    )
}

export default BlogPage;