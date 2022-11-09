import Invoice from "./"
import I1 from './I1';
import I2 from './I2';

export const routes = [
    {
    index: true,
    element: <Invoice/>
},
{
    path: "i1",
    element: <I1/>
},
{
    path: "i2",
    element: <I2/>
}
]
