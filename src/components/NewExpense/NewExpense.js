import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () =>{
        setIsEditing(true);
    }

    const stopEdittingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {/* No edit -> button displays, otherwise the new expense form shows up */}
            {!isEditing ? (
                <button onClick={startEditingHandler}>Add New Expense</button>
            ) : (
                <ExpenseForm 
                    onSaveExpenseData={saveExpenseDataHandler} 
                    onCancel={stopEdittingHandler} />
            )}
        </div>
    )
}
