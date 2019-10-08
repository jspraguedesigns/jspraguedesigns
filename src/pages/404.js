import React from 'react'
import Footer from '../components/shared/footer'
import HeaderPublic from "../components/shared/headerPublic";

const PageNotFound = () => {
    return (
        <div>
                <HeaderPublic/>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
                <Footer/>
        </div>
    )


}

export default PageNotFound 