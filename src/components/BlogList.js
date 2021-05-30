import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Col, Row, Card} from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";

import {deleteBlog} from '../action/blog'

function BlogList() {
    const blog = useSelector(state => state.blog);
    const isAdmin = useSelector( state => state.user.isAdmin);
    const dispatch = useDispatch();

    return(
        <Row className = "d-flex">
            {
                blog.posts &&
                blog.posts.map( ({heading, id, text, publishingDate, appImageId}) =>
                <Col md = {4} key = {id} className = {"mt-3"}>
                    <Card style = {{width: 430}} border = {"ligth"}>
                        <h4 className = "blog__title">{heading}</h4>
                        {
                            appImageId &&
                            <img
                                src={`http://likeshikes.somee.com/api/images/GetImage?id=${appImageId}`}
                                className='blog__img'
                                alt="image"/>
                        }
                        <p className = "blog__subtitle">
                            {text}
                        </p>
                        <p className = "blog__date">
                            {publishingDate}
                        </p>
                        {
                            isAdmin &&
                            <Button
                                variant="contained"
                                color="#aa647b"
                                startIcon={<DeleteIcon />}
                                onClick={() => dispatch(deleteBlog({id, page: blog.pageModel.pageNumber}))}
                            >
                                Удалить
                            </Button>
                        }
                    </Card>
                </Col>
                )
            }
        </Row>
    )
}

export default BlogList;