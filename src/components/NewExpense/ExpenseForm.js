import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // galima kartoti state kiek nori kartu
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enteredAmount, setEnteredAmount] = useState("");
//   const [enteredDate, setEnteredDate] = useState("");

// ARBA galima taip
const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
});
    // Ir taip
  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
//     setUserInput({
//          ...userInput,
//         enteredTitle: event.target.value,
//     })
 
setUserInput ((prevState)=>{
    return {...prevState, enteredTitle: event.target.value}
});
};
  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput ((prevState)=>{
        return {...prevState, enteredAmount: event.target.value}
    });
}

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput({
        ...userInput,
        enteredDate: event.target.value,
    })
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* onchange galima naudoti visiems input pvz */}
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
