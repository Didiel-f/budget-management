import React from 'react';
import { checkBudget } from '../helpers';


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
