import React from "react";
import { routes } from "../../routes";
import {useRoutes} from "react-router-dom"
import MainHomePage from "../components/MainHomePage";


function MainHomePageContainer() {
    // console.log("routes",routes);
    const homePageRoutes = useRoutes(routes)
    return <MainHomePage homePageRoutes={homePageRoutes}/>
}

export default MainHomePageContainer