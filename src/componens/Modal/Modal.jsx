import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'

export class ModalAddUser extends Component {


    state = {
        show: false,
    };


    render() {


        return (
            <div>
                <div className="add__button">
                    <Button variant="primary" className="add__button" onClick={this.handleShow}>
                        Add User
                    </Button>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add information about user</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="name" placeholder="Name">
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="Email" placeholder="Email">
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="Description" placeholder="Description">
                                </Form.Control>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={this.handleClose}>
                                Close
                            </Button>
                            <Button variant="success"  /*onClick={(event) => onCreateChange(user)}*/ onClick={this.handleClose}>
                                Save User
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        )

    }
    handleClose = () => {
        this.setState({
            show: false
        });
    }
    handleShow = () => {
        this.setState({
            show: true
        });
    }


}