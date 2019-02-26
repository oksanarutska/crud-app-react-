import React from 'react';
import './TableHeaderCell.css'
import * as classNames from 'classnames';

export const TableHeaderCell = (props) => {
    const { order, title } = props;
    let arrowUpClassName = classNames('fas fa-sort-up table-header-cell__arow i_button',{'table-header-cell__arrow_active': order === 'asc'});
    let arrowDownClassName = classNames( 'fas fa-sort-down table-header-cell__arow i_button',{'table-header-cell__arrow_active': order === 'desc'} );




    return (
        <td>
            <div className="table-header-cell">
                <span className="table-header-cell__title">{title}</span>
                <div className="table-header-cell__arows arrow_button">
                    <i className={arrowUpClassName}  />
                    <i className={arrowDownClassName} />
                </div>
            </div>
        </td>

    );

};