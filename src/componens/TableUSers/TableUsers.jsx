import React from "react";
import {Table} from "react-bootstrap";
import {UserRow} from "../UserRow/UserRow";
import './TableUser.css';
import {TableHeaderCell} from "../TableHeaderCell/TableHeaderCell";

export class TableUsers extends React.Component {



    render() {

        return (
            <div className="container">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <TableHeaderCell title="#" order="desc"/>
                        <TableHeaderCell title="Name" order="asc"/>
                        <TableHeaderCell title="Email"/>
                        <td>
                            Actions
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.users.map((user, index) => {
                            return <UserRow{...user} mode={index % 2 ? "edit" : "view"} key={user.id} {...this.props}/>
                        })
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}