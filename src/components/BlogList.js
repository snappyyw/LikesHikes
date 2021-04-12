import React from 'react'
import { useSelector } from 'react-redux'
import {Col, Row, Card} from 'react-bootstrap'


function BlogList() {

    const blog = useSelector(state => state.blog)

    return(
        <Row className = "d-flex">
            {blog.list && blog.list.map( ({title, id, subtitle, date}) => 
                <Col md = {4} key = {id} className = {"mt-3"}>
                    <Card style = {{width: 430}} border = {"ligth"}>
                        <h4 className = "blog__title">{title}</h4>
                        <p className = "blog__subtitle">
                            {subtitle}
                        </p>
                        <p className = "blog__date">
                            {date}
                        </p>
                    </Card>
                </Col>
            )}
        </Row>
    )
}

export default BlogList;