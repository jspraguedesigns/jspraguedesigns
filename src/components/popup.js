import React from 'react';
import  $ from 'jquery';


function hide () {
    $('.popup').fadeOut('fast');
}

const Popup =() =>{  
  
  return (  
  <div className='popup'>  
  <div className="container insidepop">
    <div className="row">
        <div className="col-md-12">
        <h1 className="overlay">Thank You For Participating</h1>  
        <br />
            <p className="white">We are currently in the process of developing the User Experience of the ELC program. Your feedback is critical at this early development stage.</p> 
            <p className="white">Please take a moment to look try out our newly designed interface. We will ask you to comment as you navigate through our site in our WeChat group.</p>

           <h2 className="white">The Scenario</h2> 
           <br />
           <p className="white">Imagine your school just completed the ELC Entry; navigate to ELC Entry results and tell us: <br />
           <ol>
               <li>As an administrator, what sort of test feedback you are looking for?</li>
               <li>What is the most important thing you need to see?</li>
               <li>What was the first thing you clicked on?</li>
               <li>What was the first thing you expected to see?</li>
               <li>When you clicked, were you directed to where you wated to go?</li>
               <li>Did you find the information you were looking for on the page?</li>
               <li>Is there anything that you expected to see but didn't?</li>
           </ol>
           </p>
        <button onClick={hide}>Test Our Site</button>  
        </div>
    </div>


  </div>

  </div>  
  )
  }  
 
  
  export default Popup;