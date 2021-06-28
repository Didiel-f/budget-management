import React from 'react';
import { checkBudget } from '../helpers';
import PropTypes from 'prop-types'


export const BudgetManager = ({ budget, wallet }) => {
    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: { budget }
            </div>
            <div className={ checkBudget(budget, wallet) }>
                Restante: { wallet }
            </div>
        </>
    )
}

BudgetManager.propTypes = {
    budget: PropTypes.number.isRequired,
    wallet: PropTypes.number.isRequired
}