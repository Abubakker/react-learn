import React from "react";
// import React, {useState} from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

    // const [title, setTitle] = useState(props.title)

    // const clickHandler = () => {
    //     setTitle("Updated by bakker")
    // }

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}/>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                    {/*<button onClick={clickHandler}>*/}
                    {/*    Change Title*/}
                    {/*</button>*/}
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;