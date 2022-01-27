import React from 'react';
import { useBudget } from '../context/BudgetContext';
import BudgetCard from './BudgetCard';

export default function TotalBudgetCard() {
    const {budgets,expenses}=useBudget();
    const max=budgets.reduce((total,budget)=>total+budget.max,0);
    const amount=expenses.reduce((total,expense)=>total+expense.amount,0);
    if(max===0){
        return null;
    }
    return <BudgetCard max={max} amount={amount} name={'Total'} hideButton/>;
}
