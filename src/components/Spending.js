import React from 'react';
import PropTypes from 'prop-types'


export const Spending = ({ spending }) => {
    
    return (
        <li className="gastos">
            <p>
                { spending.name }

                <span className="gasto">$ {spending.spendingAmount}</ span>
            </p>
        </li>
    )
}

Spending.propTypes = {
    spending: PropTypes.object.isRequired
}