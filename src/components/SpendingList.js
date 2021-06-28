import React from 'react';
import { Spending } from './Spending';
import PropTypes from 'prop-types'

export const SpendingList = ({ spendingHistory }) => {
    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            { spendingHistory.map( spending => (
                <Spending 
                    key={ spending.id }
                    spending={ spending }
                />
            ) ) }
            
        </div>
    )
}

SpendingList.propTypes = {
    gastos: PropTypes.array.isRequired
}