import React, { useState }from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


const NewExpense =(props)=>{
 const[isEditing, setIsEditing] =useState(false)

   const SaveExpeneseDataHandler = (enteredExpenseData)=>{ 
       const expenseData = {
           ...enteredExpenseData, 
           id: Math.random().toString()
    }
    //calling function receive throw props
    props.onAddExpense(expenseData) //lifting up state
   }
   const startEditingHandler = () => {
       setIsEditing(true)
   }

   return( 
   <div className="new-expense">
    {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
      {isEditing && <ExpenseForm onSaveExpeneseData ={SaveExpeneseDataHandler}/> }
       
   </div>
   )

}

export default NewExpense