import Home from "./"
import Invoice from './Invoice/MainInvoice';
import Expense from './Expense/MainExpense';

export const routes = [
    {
    index: true,
    element: <Home/>
},
{
    path: "invoice/*",
    element: <Invoice/>
},
{
    path: "expense/*",
    element: <Expense/>
}
]