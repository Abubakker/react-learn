import React, {useState} from 'react';
import "./NewExpense.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnterTitle] = useState("");
    const [enteredAmount, setEnterAmount] = useState("");
    const [enteredDate, setEnterDate] = useState("");
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    const titleChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnterTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // setUserInput(prevState => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value,
        //     }
        // })

    }
    const amountChangeHandler = event => {
        setEnterAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
        // setUserInput(prevState => {
        //     return {
        //         ...prevState,
        //         enteredAmount: event.target.value,
        //     }
        // })
    }
    const dateChangeHandler = event => {
        setEnterDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
        // setUserInput(prevState => {
        //     return {
        //         ...prevState,
        //         enteredDate: event.target.value,
        //     }
        // })
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        // console.log(expenseDate);
        props.onSaveExpenseData(expenseDate);
        setEnterTitle("");
        setEnterAmount("");
        setEnterDate("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls text-start mb-4">
                <div className="new-expense__control mb-3">
                    <label className="fw-bold mb-2">Title</label>
                    <input className="form-control" type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control mb-3">
                    <label className="fw-bold mb-2">Amount</label>
                    <input className="form-control" type="number" min="0.01" step="0.01" value={enteredAmount}
                           onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control mb-3">
                    <label className="fw-bold mb-2">Date</label>
                    <input className="form-control" type="date" min="2022-04-14" max="2050-12-31" value={enteredDate}
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