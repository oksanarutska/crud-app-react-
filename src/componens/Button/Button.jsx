import React from "react";
import {Button, ButtonToolbar} from "react-bootstrap";
import "./Button.css"
export const ButtonUser = () => {
    return (
        <footer className="button_cell">
            <ButtonToolbar className='button_group'>
                <Button variant="primary">Primary</Button>
                <Button variant="warning">Warning</Button>
            </ButtonToolbar>;
        </footer>
    )
};