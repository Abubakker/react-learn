import React from 'react';
import "./NewExpense.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense__controls text-start mb-4">
                <div className="new-expense__control mb-3">
                    <label className="fw-bold">Title</label>
                    <input className="form-control" type="text"/>
                </div>
                <div className="new-expense__control mb-3">
                    <label className="fw-bold">Amount</label>
                    <input className="form-control" type="number" min="0.01" step="0.01"/>
                </div>
                <div className="new-expense__control mb-3">
                    <label className="fw-bold">Date</label>
                    <input className="form-control" type="date" min="2022-04-14" max="2050-12-31"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;