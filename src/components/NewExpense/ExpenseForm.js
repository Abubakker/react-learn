import React, {useState} from 'react';
import "./NewExpense.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const ExpenseForm = () => {
    const [enterTitle, setEnterTitle] = useState("");
    const [enterAmount, setEnterAmount] = useState("");
    const [enterDate, setEnterDate] = useState("");
    const titleChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnterTitle(event.target.value);
    }
    const amountChangeHandler = event => {
        setEnterAmount(event.target.value);
    }
    const dateChangeHandler = event => {
        setEnterDate(event.target.value);
    }

    return (
        <form>
            <div className="new-expense__controls text-start mb-4">
                <div className="new-expense__control mb-3">
                    <label className="fw-bold">Title</label>
                    <input className="form-control" type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control mb-3">
                    <label className="fw-bold">Amount</label>
                    <input className="form-control" type="number" min="0.01" step="0.01"
                           onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control mb-3">
                    <label className="fw-bold">Date</label>
                    <input className="form-control" type="date" min="2022-04-14" max="2050-12-31"
                           onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;