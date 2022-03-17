import React, {useState}  from "react"
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"
import "./ExpenseItem.css";

const ExpenseItem =(props) => {
      
 const [title , setTitle] =  useState(props.title)  //title tai ka norime keisti, setTitle nauja reiksme bus pritraikyta
  

  const ClickHandler = () => {
  setTitle('Updated') //uzstatom nauja reiksme po paspaudimo click
}
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={ClickHandler} >Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

// props parametras laikantis visas reiksmes is elementu
