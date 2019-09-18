import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Link } from 'gatsby'


const IndexPage = () => {
    return (
        <div>
         <Header />
         <div class="row d-flex align-items-center justify-content-center  banner">
         <div className="col-md-6 text-center animated fadeInUp">
                
                <h1 className="home-text">English<br/> Learning<br /> Certificate</h1>
                <Link to="/what-is-elc"><button type="button" class="btn btn-home-top btn btn-secondary mt-4">Read About What ELC Is</button></Link>
           </div>
           <div className="col-md-6 home-text">
            
            </div>
         </div>
        
            <div className="wechat">
              <div className="row">
                  <div className="col-md-12 text-center pt-4 pb-4">
                  <img className="wechat-logo" src={'img/clipart1841617.png'}/>
                  <h2 className="home-text">Keep In Touch With Us</h2>
                  <p className="home-text">We need your feedback to make this test successful. Scan the QR code bellow to join our WeChat Group.</p>
                  <img className="wechat-logo" src={'img/qrcode.jpg'}/>
                  </div>
              </div>
           </div>
        <Footer />
        </div>
           
         
         
       

    
    )
    
}

export default IndexPage