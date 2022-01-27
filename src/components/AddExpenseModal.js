import { Button, Form, Modal } from 'react-bootstrap';
import React, { useRef, useState } from 'react';
import { useBudget,UNCATEGORIZED } from '../context/BudgetContext';



export default function AddExpenseModal({show,handleClose,defaultBudgetId}) {
    // const [show,setShow]=useState(true)

    const descriptionref=useRef()
    const amountref=useRef()
    const budgetIdref=useRef()

    const {addExpenses,budgets}=useBudget()

    function handleSubmit(e){
        e.preventDefault()
        const expenseAmount=parseFloat(amountref.current.value)
        addExpenses({
            description:descriptionref.current.value,
            amount:expenseAmount,
            budgetId:budgetIdref.current.value
        })
        // console.log(expenseAmount+10)
        handleClose()
    }
    return (
    <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>New Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className='mb-2'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description" className='mb-3' ref={descriptionref}/>
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" placeholder="Enter Amount" ref={amountref}  min={0} step={0.01} required className='mb-3'/>
                    <Form.Label>Budget</Form.Label>
                    <Form.Select ref={budgetIdref} defaultValue={defaultBudgetId}>
                        <option id={UNCATEGORIZED} value={UNCATEGORIZED}>Uncategorized</option>
                        {
                            
                            budgets.map((budget)=>
                                <option key={budget.id} value={budget.id} >{budget.name}</option>
                            )
                        }
                            
                    </Form.Select>
                </Form.Group>
            </Modal.Body>
            <div className='d-flex justify-content-end m-3'>
                <Button variant='primary' type='submit'>Add Expense</Button>
            </div>
        </Form>
    </Modal>
    )
}
