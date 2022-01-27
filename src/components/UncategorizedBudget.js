import React from 'react';
import { UNCATEGORIZED,useBudget } from '../context/BudgetContext';
import BudgetCard from './BudgetCard';

export default function UncategorizedBudget(props) {
    const {getBudgetExpenses}=useBudget();
    const amount=getBudgetExpenses(UNCATEGORIZED).reduce((total,expense)=>total+expense.amount,0);
    if(amount===0){
        return null;
    }
    return <BudgetCard {...props} name={'Uncategorized'} amount={amount}/>;
}
