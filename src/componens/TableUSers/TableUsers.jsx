import React from "react";
import { Table} from "react-bootstrap";
import {UserRow} from "../UserRow/UserRow";
import './TableUser.css'
import {TableHeaderCell} from "../TableHeaderCell/TableHeaderCell";

export const TableUsers = () => {
    const users= [{
        id:'1',
            name:'Ksu',
            email: 'jdkf@gmail.com'
    },
        {
        id:'2',
            name:'Ksu2',
            email: 'jdkf@gmail.com'
    },
        {
        id:'3',
            name:'Ksu3',
            email: 'jdkf@gmail.com'
    },
    ];
    return (
        <div className="container">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <TableHeaderCell title="#" order="desc"/>
                    <TableHeaderCell title="Name" order="asc" />
                    <TableHeaderCell title="Email"/>
                    <td>
                       Actions
                    </td>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user, index) => {
                        return <UserRow{...user} mode={ index % 2 ? "edit" : "view"} key={user.id}/>
                    })
                }
                </tbody>
            </Table>
        </div>
    )
};