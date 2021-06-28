import React, { useState } from 'react';
import { Error } from './Error';

export const Pregunta = ({ setBudget, setWallet, setShowInputBudget }) => {

    const [amount, setamount] = useState(0);
    const [error, seterror] = useState(false);
    
    const handleBudget = (e) => {
        setamount( parseInt( e.target.value, 10 ) ); 
    };

    //Submit para definir el presupuesto
    const handleSubmit = (e) => {
        e.preventDefault();

        if ( amount < 1 || isNaN( amount )) {
            seterror(true);
            return;
        }

        // Si se pasa la validación se ejecuta lo siguiente
        seterror(false);
        setBudget( amount );
        setWallet( amount );
        setShowInputBudget(false);
        
    };
    
    return (
        <div>
            <h2>Coloca tu presupuesto</h2>

            { error ? <Error message="El presupuesto es incorrecto" /> : null }

            <form
                onSubmit={ handleSubmit }
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={handleBudget}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
                
            </form>
            
        </div>
    )
}
