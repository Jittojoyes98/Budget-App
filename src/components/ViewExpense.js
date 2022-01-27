import { Button, Modal, Stack } from 'react-bootstrap';
import React from 'react';
import { useBudget,UNCATEGORIZED } from '../context/BudgetContext';
import { currencyChange } from '../utils';



// onHide={handleClose}
export default function ViewExpense({show,handleClose,id}) {
    const {budgets,deleteExpenses,expenses,deleteBudget}=useBudget();
    const budget=(UNCATEGORIZED===id) ? {name:'Uncategorized',id:UNCATEGORIZED} : budgets.find((budget)=>budget.id===id);
    const expense=expenses.filter((expense)=>expense.budgetId===id);
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <Stack direction='horizontal' gap={2}>
                        <div>Expense-{budget?.name}
                            {
                                id!==UNCATEGORIZED && <Button variant='outline-danger' className='ms-4' onClick={()=>{
                                    deleteBudget(budget);
                                    handleClose();
                                }}>Delete</Button>
                            }
                        </div>
                    </Stack>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack direction='vertical' gap={3}>{
                    expense.map((eachExpense,index)=>{
                        return (
    
                            <Stack direction='horizontal'  key={index}>
                                <div className='me-auto fs-4'>{eachExpense.description}</div>
                                <div className='fs-5 me-1'>{currencyChange.format(eachExpense.amount)}</div>
                                <Button variant='outline-danger' onClick={()=>deleteExpenses(eachExpense)}>&times;</Button>
                            </Stack>
                        );
                    }
                    )
                }
                </Stack>
            
            </Modal.Body>
        </Modal>
    );
}
