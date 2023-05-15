import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
    if (props.expensesList.length === 0) {
        return <h2 className="expenses-list-fallback">Found no Expense item for this year.</h2>;
    }
    return (
        <ul className="expenses-list">
            {props.expensesList.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>);
};

export default ExpensesList;