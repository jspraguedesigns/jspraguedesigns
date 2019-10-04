import React from "react";

import Launch from "../components/school/launch"

import Footer from "../components/shared/footer";
import HeaderPublic from "../components/shared/headerPublic";


const LaunchPage = () =>{
    return(
        <div>
            <HeaderPublic/>
           <Launch/>
           <Footer/>
        </div>
    )
};
export default LaunchPage;