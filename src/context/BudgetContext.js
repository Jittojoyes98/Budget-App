import { createContext,React, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

const BudgetContext=createContext()

export const UNCATEGORIZED="uncategorized"

export  function useBudget(){
    return useContext(BudgetContext)
}


export const BudgetProvider=({children})=>{
    const [budgets,setBudgets]=useLocalStorage("budgets",[])
    const [expenses,setExpenses]=useLocalStorage("expenses",[])

    function getBudgetExpenses(budgetId){
        return expenses.filter((expense)=>expense.budgetId===budgetId)
    }
    
    function addExpenses({description,amount,budgetId}){
        setExpenses(prevExpenses=>{
            return [...prevExpenses,{id:uuidv4(), description,amount,budgetId}]
        })
    }
    
    function addBudgets({name,max}){
        setBudgets(prevBudgets=>{
            if(prevBudgets.find((budget)=> budget.name===name)){
                return prevBudgets
            }
            return [...prevBudgets,{id:uuidv4(), name,max}]
        })
    }
    
    function deleteBudget({id}){
        setExpenses(prevExpenses=>{
            return (
                prevExpenses.map((expense)=>{
                    if(expense.budgetId!==id) return expense
                    else{
                        return {...expense,budgetId:UNCATEGORIZED}
                    }
                })
            )
        })
        setBudgets(prevBudgets=>{
            return  prevBudgets.filter(budget=>budget.id!==id)
        })
    }
    
    function deleteExpenses({id}){
        setExpenses(prevExpenses=>{
            return  prevExpenses.filter(expense=>expense.id!==id)
        })
    } 




    return (
        <BudgetContext.Provider value={{
            budgets,expenses,getBudgetExpenses,addExpenses,addBudgets,
            deleteExpenses,deleteBudget
            
            }}>
            {children}
        </BudgetContext.Provider>
    )
}