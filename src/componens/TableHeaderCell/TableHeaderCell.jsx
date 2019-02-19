import React from 'react';
import './TableHeaderCell.css'
export const TableHeaderCell = (props) => {
    const { order, title } = props;
    let arrowUpClassName = 'fas fa-sort-up table-header-cell__arow';
    let arrowDownClassName = 'fas fa-sort-down table-header-cell__arow';



    if (order === 'asc') {
        arrowUpClassName += 'table-header-cell__arrow_active';
    }
    else if (order === 'desc') {
        arrowDownClassName += 'table-header-cell__arrow_active';

    }
    return (
        <td>
            <div className="table-header-cell">
                <span className="table-header-cell__title">{title}</span>
                <div className="table-header-cell__arows">
                    <i className={arrowUpClassName} />
                    <i className={arrowDownClassName} />
                </div>
            </div>
        </td>

    );

};