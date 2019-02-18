import React from "react";
import {Button, ButtonToolbar} from "react-bootstrap";

export const ButtonUser = () => {
    return (
        <footer>
            <ButtonToolbar className='button_group'>
                <Button variant="primary">Primary</Button>
                <Button variant="warning">Warning</Button>
            </ButtonToolbar>;
        </footer>
    )
}