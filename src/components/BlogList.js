import React from 'react';
import { useSelector } from 'react-redux';
import {Col, Row, Card} from 'react-bootstrap';


function BlogList() {
    const blog = useSelector(state => state.blog.posts);

    return(
        <Row className = "d-flex">
            {
                blog &&
                blog.map( ({heading, id, text, publishingDate}) =>
                <Col md = {4} key = {id} className = {"mt-3"}>
                    <Card style = {{width: 430}} border = {"ligth"}>
                        <h4 className = "blog__title">{heading}</h4>
                        <p className = "blog__subtitle">
                            {text}
                        </p>
                        <p className = "blog__date">
                            {publishingDate}
                        </p>
                    </Card>
                </Col>
            )}
        </Row>
    )
}

export default BlogList;