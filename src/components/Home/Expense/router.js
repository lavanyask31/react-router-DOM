import  Expense from './';
import E1 from './E1';
import E2 from './E2';

export const routes=[
    {
        index:true,
        element:<Expense/>
    },
    {
        path:"e1",
        element:<E1/>
    },
    {
        path:"e2",
        element:<E2/>
    }
]
