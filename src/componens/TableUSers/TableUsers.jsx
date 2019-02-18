import React from "react";
import {Table} from "react-bootstrap";
import {UserRow} from "../UserRow/UserRow";

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
        <div>
            <Table striped bordered hover>

                <tbody>
                {
                    users.map((user) => {
                        return <UserRow{...user} key={user.id}/>
                    })
                }
                </tbody>
            </Table>
        </div>
    )
};