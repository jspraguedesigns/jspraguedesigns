import React from "react"
import Footer from "./footer"
import HeaderPublic from "./headerPublic";

const LayoutPublic = (props) => {

    return (

        <div>
            <HeaderPublic/>

            {props.children}


            <Footer/>

        </div>
    )
};

export default LayoutPublic