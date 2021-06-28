import React, { useEffect, useState } from 'react';
import { BudgetManager } from './components/BudgetManager';
import { Formulario } from './components/Formulario';
import { Pregunta } from "./components/Pregunta";
import { SpendingList } from './components/SpendingList';

function App() {
  const [budget, setBudget] = useState(0);
  const [wallet, setWallet] = useState(0);
  const [showInputBudget, setShowInputBudget] = useState(true);
  const [spendingHistory, setSpendingHistory] = useState([]);
  const [spending, setSpending] = useState({});
  const [createSpending, setCreateSpending] = useState(false);

  useEffect(() => {
    if (createSpending) {
      setSpendingHistory([
        ...spendingHistory,
        spending
      ]);

      const newBudget = wallet - spending.spendingAmount;
      setWallet(newBudget);

      setCreateSpending(false);
    }
  }, [setSpendingHistory, spendingHistory, spending, createSpending, wallet]);
  
  
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">

          { showInputBudget 
            ? (
                <Pregunta 
                  setBudget={setBudget} 
                  setWallet={setWallet}
                  setShowInputBudget={setShowInputBudget}
                />
              )
            :
              (
                <div className="row">
                  <div className="one-half column">
                    <Formulario 
                      setSpending={ setSpending }
                      setCreateSpending={ setCreateSpending }
                    />
                  </div>

                  <div className="one-half column">
                    <SpendingList 
                      spendingHistory={ spendingHistory }
                    />

                    <BudgetManager 
                      budget={ budget } 
                      wallet={ wallet } 
                    />
                    
                  </div>
                </div>
              )
          }
          
        </div>
      </header>
    </div>
  );
}

export default App;
