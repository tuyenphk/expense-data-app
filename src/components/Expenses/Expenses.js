import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
        
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found in this year.</p>
         ) : (
          filteredExpenses.map(expense => 
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
             />
         ))
        } */}
      </Card>
    </div>
  );
}

export default Expenses;
