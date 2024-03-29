import React, {useState} from 'react';
// import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";
import NewExpense from "../NewExpense/NewExpense";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 3, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
    {
        id: 'e5',
        title: 'A book',
        amount: 33.30,
        date: new Date(2023, 6, 12),
    },
];

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const addExpenseHandler = expenses => {
        // console.log('In expense');
        // console.log(expenses);

        setExpenses((prevExpenses) => {
            return [expenses, ...prevExpenses];
        });
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <>
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpenseChart expenses={filteredExpenses}/>
                <ExpensesList expensesList={filteredExpenses}/>
                {/*{expensesNotFoundDataContents}*/}
                {/*{filteredExpenses.length === 0 ? (*/}
                {/*    <p>No Expense item found for this year.</p>) : filteredExpenses.map((expense) => (*/}
                {/*    <ExpenseItem*/}
                {/*        key={expense.id}*/}
                {/*        title={expense.title}*/}
                {/*        amount={expense.amount}*/}
                {/*        date={expense.date}*/}
                {/*    />*/}
                {/*))}*/}
                {/*{expenses.map((expense) => (*/}
                {/*    <ExpenseItem*/}
                {/*        key={expense.id}*/}
                {/*        title={expense.title}*/}
                {/*        amount={expense.amount}*/}
                {/*        date={expense.date}*/}
                {/*    />*/}
                {/*))}*/}
                {/*<ExpenseItem*/}
                {/*    title={expenses[0].title}*/}
                {/*    amount={expenses[0].amount}*/}
                {/*    date={expenses[0].date}*/}
                {/*/>*/}
                {/*<ExpenseItem*/}
                {/*    title={expenses[1].title}*/}
                {/*    amount={expenses[1].amount}*/}
                {/*    date={expenses[1].date}*/}
                {/*/>*/}
                {/*<ExpenseItem*/}
                {/*    title={expenses[2].title}*/}
                {/*    amount={expenses[2].amount}*/}
                {/*    date={expenses[2].date}*/}
                {/*/>*/}
                {/*<ExpenseItem*/}
                {/*    title={expenses[3].title}*/}
                {/*    amount={expenses[3].amount}*/}
                {/*    date={expenses[3].date}*/}
                {/*/>*/}
            </Card>
        </>
    );
}

export default Expenses;