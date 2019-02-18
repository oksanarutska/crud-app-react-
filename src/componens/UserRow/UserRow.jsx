import React from "react";

export const UserRow = (props) => {
    const {id, name, email, mode} = props;
const isEditMode = mode=== 'edit';

    return (
        <tr>
            <td>{id}</td>
            <td>{isEditMode ? <input type="text" value={name}/>:name}</td>
            <td>{email}</td>

        </tr>
    )
};