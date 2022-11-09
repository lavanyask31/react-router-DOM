import React  from "react";
import { useRoutes } from "react-router";
import {routes} from '../../router';
import MainExpensePage from '../component/MainExpensePage'

function MainExpensePageContainer(){
const expensePageRoutes=useRoutes(routes)
return <MainExpensePage expensePageRoutes={expensePageRoutes}/>
}

export default MainExpensePageContainer;