import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Form from "react-bootstrap/es/Form";

export const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col md={4}>

                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Col>
                    <Col md={{span: 4, offset: 4}}>
                        <Form.Control type="text" placeholder="Search"/>
                        <br/>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}