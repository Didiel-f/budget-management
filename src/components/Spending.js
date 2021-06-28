import React from 'react';

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
