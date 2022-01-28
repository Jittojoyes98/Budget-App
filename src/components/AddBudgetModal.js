import { Button, Form, Modal } from 'react-bootstrap';
import React, { useRef } from 'react';
import { useBudget } from '../context/BudgetContext';



export default function AddBudgetModal({show,handleClose}) {
    // const [show,setShow]=useState(true)

    const nameref=useRef();
    const maxref=useRef();

    const {addBudgets}=useBudget();

    function handleSubmit(e){
        e.preventDefault();
        const name=(nameref.current.value);
        const max=parseFloat(maxref.current.value);
        addBudgets({name,max});
        handleClose();
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className='mb-2'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" className='mb-3' ref={nameref}/>
                        <Form.Label>Maximum Expense</Form.Label>
                        <Form.Control type="number" placeholder="Enter Expense" ref={maxref}  min={0} step={0.01} required/>
                    </Form.Group>
                </Modal.Body>
                <div className='d-flex justify-content-end m-3'>
                    <Button variant='primary' type='submit'>Add Budget</Button>
                </div>
            </Form>
        </Modal>
    );
}
