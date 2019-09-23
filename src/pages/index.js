import React from 'react'

import Layout from '../components/layout'
import { Link } from 'gatsby'
import WeChat from "../components/image"
import QRCode from "../components/QR"

const IndexPage = () => {
    return (
        <Layout>
         <div className="row d-flex align-items-center justify-content-center  banner">
         <div className="col-md-6 text-center animated fadeInUp">
                
                <h1 className="home-text">English<br/> Learning<br /> Certificate</h1>
                <Link to="/about"><button type="button" class="btn btn-home-top btn btn-secondary mt-4">Read About What ELC Is</button></Link>
           </div>
           <div className="col-md-6 home-text">
            
            </div>
         </div>
        
            <div className="wechat">
              <div className="row">
                  <div className="col-md-12 text-center pt-4 pb-4">
                  <div className="wechat-logo">
                  <WeChat />
                  </div>
                  
                  <h2 className="home-text">Keep In Touch With Us</h2>
                  <p className="home-text">We need your feedback to make this test successful. Scan the QR code bellow to join our WeChat Group.</p>
                  <div className="qr-code">
                  <QRCode/>
                  </div>
                  
                  </div>
              </div>
           </div>
        </Layout>
           
         
         
       

    
    )
    
}

export default IndexPage