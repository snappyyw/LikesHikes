import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import {MainHeder, MainFooter, BlogList} from '../components';
import {getBlog} from '../action/blog';

function BlogPage() {
    const dispatch = useDispatch();
    const page = useSelector(state => state.blog.pageModel);

    React.useEffect(() => {
        dispatch(getBlog(1));
    }, []);

    const theme = createMuiTheme({
        palette: {
            primary: green,
        },
    });

    return(
        <>
            <MainHeder/>
            <div className = "blog">
                <div className = "blog__body">
                    <BlogList />
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                            <Grid item>
                                {
                                    page.hasPreviousPage &&
                                    <ThemeProvider theme={theme}>
                                        <Button
                                            onClick={() => {dispatch(getBlog(page.pageNumber - 1))}}
                                            variant="contained"
                                            color="primary"
                                        >
                                            Предыдущая страниц
                                        </Button>
                                    </ThemeProvider>
                                }
                            </Grid>
                            <Grid item>
                                <span style={{height: "50px", lineHeight: "50px"}}>{page.pageNumber} из {page.totalPages}</span>
                            </Grid>
                            <Grid item>
                                {
                                    page.hasNextPage &&
                                    <ThemeProvider theme={theme}>
                                        <Button
                                            onClick={() => {dispatch(getBlog(page.pageNumber + 1))}}
                                            variant="contained"
                                            color="primary"
                                        >
                                            Следующая страница
                                        </Button>
                                    </ThemeProvider>
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