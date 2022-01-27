import { useState } from 'react';
import { Button, Container, Stack } from 'react-bootstrap';
import AddBudgetModal from './components/AddBudgetModal';
import AddExpenseModal from './components/AddExpenseModal';
import BudgetCard from './components/BudgetCard';
import TotalBudgetCard from './components/TotalBudgetCard';
import UncategorizedBudget from './components/UncategorizedBudget';
import ViewExpense from './components/ViewExpense';
import { UNCATEGORIZED, useBudget } from './context/BudgetContext';
// import logo from './logo.svg';

function App() {
    const [show,setShow]=useState(false);
    const [showAddExpense,setShowAddExpense]=useState(false);
    const [showViewExpense,setShowViewExpense]=useState(false);
    const [addExpenseBudgetId,setAddExpenseBudgetId]=useState();
    const [viewExpenseBudgetId,setViewExpenseBudgetId]=useState();


    function handleCloseBudget(){
        setShow(false);
    }
    

    function handleCloseViewExpense(){
        setShowViewExpense(false);
    }
    function handleViewExpenseBudgetId(budgetId){
        setShowViewExpense(true);
        setViewExpenseBudgetId(budgetId);
    }

    function handleCloseAddExpense(){
        setShowAddExpense(false);
    }


    function handleAddExpenseBudgetId(budgetId){
        setShowAddExpense(true);
        setAddExpenseBudgetId(budgetId);
    }

    
    const {budgets,getBudgetExpenses,expenses}=useBudget();
    
    return (
        <>
            <Container>
                <Stack direction='horizontal' gap={2}>
                    <h1 className='me-auto'>Budgets</h1>
                    <Button variant='primary' onClick={()=>setShow(true)}>Add Budget</Button>
                    <Button variant='outline-primary' onClick={()=>setShowAddExpense(true)}>Add Expense</Button>
                </Stack>
                <div style={{'display':'grid','gridTemplateColumns':'repeat(auto-fill,minmax(300px,1fr))','gap':'1rem','alignItems':'start'}}>
                
                    {budgets.map((budget,index)=>{
                        const value=getBudgetExpenses(budget.id).reduce((total,expense)=>{
                            return (total+parseFloat(expense.amount));
                        },0);
                  
                        return (<BudgetCard name={budget.name}  max={budget.max} id={budget.id} amount={value} key={index} onAddExpenseClick={handleAddExpenseBudgetId} onViewExpenseClick={handleViewExpenseBudgetId}/>);
                    })}
                    <UncategorizedBudget onAddExpenseClick={handleAddExpenseBudgetId} onViewExpenseClick={handleViewExpenseBudgetId} id={UNCATEGORIZED}/>
                    <TotalBudgetCard/>
                </div>
            </Container>
            <AddBudgetModal show={show} handleClose={handleCloseBudget}/>
            <AddExpenseModal show={showAddExpense}  handleClose={handleCloseAddExpense} defaultBudgetId={addExpenseBudgetId}/>
            <ViewExpense show={showViewExpense} handleClose={handleCloseViewExpense} id={viewExpenseBudgetId} expenses={expenses}/> 
          
        </>
    );
}

export default App;
