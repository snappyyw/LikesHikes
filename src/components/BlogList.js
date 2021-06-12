import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Col, Row, Card} from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
import {useHistory} from 'react-router-dom';

import {deleteBlog} from '../action/blog'

function BlogList() {
    const blog = useSelector(state => state.blog);
    const isAdmin = useSelector( state => state.user.isAdmin);
    const history = useHistory();
    const dispatch = useDispatch();

    return(
        <Row className = "d-flex">
            {
                blog.posts &&
                blog.posts.map( ({heading, id, text, publishingDate, appImageId}) =>
                <Col md = {4} key = {id} className = {"mt-3"} >
                    <Card style = {{width: 450}} border = {"ligth"} >
                        {
                            appImageId &&
                            <Card.Img className="blog__img" onClick={()=> history.push(`/Blog/${id}`)} variant="top" src={`http://likeshikes.somee.com/api/images/GetImage?id=${appImageId}`} />
                        }
                        <Card.Body>
                            <Card.Title>{heading}</Card.Title>
                            <Card.Text>
                                {text}
                            </Card.Text>
                        </Card.Body>
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