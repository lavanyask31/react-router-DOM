import React from "react";
import {routes} from "../../routes";
import { useRoutes } from "react-router";

import MainInvoicePage from "../components/MainInvoicePage";

function MainInvoiceContainer(){
const invoicePageRoutes =useRoutes(routes);
return <MainInvoicePage invoicePageRoutes={invoicePageRoutes}/>
}

export default MainInvoiceContainer