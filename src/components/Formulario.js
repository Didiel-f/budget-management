import React, { useState } from 'react'
import shortid from 'shortid';
import { Error } from './Error';

export const Formulario = ({ setSpending, setCreateSpending }) => {

    const [name, setName] = useState('');
    const [spendingAmount, setSpendingAmount] = useState(0);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar
        if ( spendingAmount < 1 || isNaN( spendingAmount ) || name.trim() === '' ) {
            setError(true);
            return;
        }
        setError(false);
        
        // Construir el gasto

        const spendingObject = {
            name,
            spendingAmount,
            id: shortid.generate()
        }

        // pasar el gasto al componente principal
        setSpending( spendingObject );
        setCreateSpending(true);

        // Resetear formulario
        setName('');
        setSpendingAmount(0);
        
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h2>Agrega tus gastos aquí</h2>

            { error ? <Error message="Ambos campos son obligatorios o presupuesto incorrecto" /> : null }
            
            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={ name }
                    onChange={ e => setName( e.target.value ) }
                    />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={ spendingAmount }
                    onChange={ e => setSpendingAmount( parseInt( e.target.value, 10 ) ) }
                    />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
            
        </form>
    )
}
