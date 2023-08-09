// import logo from './logo.svg';
import './App.css';
import Hello from "./myComponents/Hello";
import Welcome from "./myComponents/Welcome";
import ArrowFunction from "./myComponents/ArrowFunction";
import StateClass from "./myComponents/State";
import SetState from "./myComponents/SetState";
import ConditionalIfElse from "./myComponents/ConditionalIfElse";
import VariableElement from "./myComponents/VariableElement";
import Refresh from "./myComponents/Refresh";
import DOMrender from "./myComponents/DOMrender";
import FindDomNode from "./myComponents/FindDOMNode";
import Form from "./myComponents/Form";
import FromOnSubmit from "./myComponents/FromOnSubmit";
import SignUpForm from "./myComponents/SignUpForm";
import Textarea from "./myComponents/Textarea";
import SelectOptionDropDown from "./myComponents/SelectOptionDropDown";
import List from "./myComponents/List";
import JsonArrayList from "./myComponents/JSONArrayList";
import StateFuntional from "./myComponents/StateFuntional";
import Expenses from "./components/Expenses/Expense";
import CourseStyling from "./components/CourseStyling/CourseStyling";
// import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    // const  addExpenseHandler = expense => {
    //     console.log("From app js")
    //     console.log(expense)
    // }
    return (
        <div className="App">
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                <p>
                    Hello world !
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React with Md. Abu Bakker Siddique
                    Sum 1 to 10 = {1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10}
                </a>
            </header>
            <Hello name="Abu Bakker" age={27}></Hello>
            <Hello name="Rubel" age={26}></Hello>
            <Hello name="Siddique" age={25}></Hello>
            <Hello name="Name" age={24}></Hello>
            <Welcome class="First class"></Welcome>
            <Welcome class="Second class"></Welcome>
            <Welcome class="Third class"></Welcome>
            <ArrowFunction/>
            <StateClass/>
            <SetState/>
            <ConditionalIfElse></ConditionalIfElse>
            <VariableElement></VariableElement>
            <Refresh></Refresh>
            <DOMrender></DOMrender>
            <FindDomNode></FindDomNode>
            <Form></Form>
            <FromOnSubmit></FromOnSubmit>
            <SignUpForm></SignUpForm>
            <Textarea></Textarea>
            <SelectOptionDropDown></SelectOptionDropDown>
            <List></List>
            <JsonArrayList></JsonArrayList>
            <StateFuntional></StateFuntional>
            {/*<NewExpense onAddExpense={addExpenseHandler}></NewExpense>*/}
            <Expenses></Expenses>
            <CourseStyling/>
        </div>
    );
}

export default App;
