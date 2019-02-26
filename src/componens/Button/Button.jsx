import React from "react";
import {Button, ButtonToolbar} from "react-bootstrap";
import "./Button.css"


export class ButtonUser extends React.Component {
    render() {
        const {currentPage, onPageChange} = this.props;
        return (

            <footer className="button_cell">
                <ButtonToolbar className='button_group'>
                    <Button className="pre_button" variant="primary"
                            onClick={() => onPageChange(currentPage - 1)}>Prev</Button>
                    <Button variant="primary" onClick={() => onPageChange(currentPage + 1)}>Next</Button>

                </ButtonToolbar>;
            </footer>
        )
    };
}