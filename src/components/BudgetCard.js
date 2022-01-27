import React from 'react';
import { Card, ProgressBar,Stack,Button } from 'react-bootstrap';
import { currencyChange } from '../utils';



export default function BudgetCard({name,amount,max,id,onAddExpenseClick,onViewExpenseClick,hideButton}) {
    const classNames=[];
    if(amount>max){
        classNames.push('bg-danger','bg-opacity-10');
    }else{
        classNames.push('bg-light');
    }
    return (
        <Card style={{'width':'20rem'}} className={classNames.join(' ')} >
            <Card.Body>
                <Card.Title className='d-flex justify-content-between fw-normal mb-10 '>
                    <div className='me-2'>{name}</div>
                    <div className='d-flex align-items-baseline'>{currencyChange.format(amount)}
                        {max && <span className='text-muted fs ms-2'>/{currencyChange.format(max)}</span>}</div>
                </Card.Title>
                {max && <ProgressBar className='rounded-pill ms-1 me-1 mb-2' variant={changeProgress(amount,max)} now={amount} min={0} max={max}/>}
                {!hideButton && <Stack direction='horizontal' gap={2} className='mt-4'>
                    <Button variant='outline-primary' className='ms-auto' onClick={()=>onAddExpenseClick(id)}>Add expenses</Button>
                    <Button variant='outline-secondary' onClick={()=>onViewExpenseClick(id)}>View expenses</Button>
                </Stack>}
            </Card.Body>
          
        </Card>
    );
}

function changeProgress(budget,max){
    const ratio=budget/max;
    if(ratio<0.5) return 'primary';
    else if(ratio<0.75) return 'warning';
    else return 'danger';

}
