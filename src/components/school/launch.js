import React from "react"
import "jquery/dist/jquery.js"
import {osName, osVersion} from "react-device-detect"

//import openWithWin from "../../images/openWithSEBWin.PNG"
//import DownloadBlock from "../shared/downloadblock"

const Launch = () => {
    console.log(osName);
    let supportedOS = false;
    let downloadLink;
    downloadLink = "";
    let downloadText = "Step 1: Download & Install Secure Browser on your ";
    switch (osName) {
        case "Windows":
            // code block
            console.log("windows" + osName);
            downloadLink =
                "https://github.com/SafeExamBrowser/seb-win/releases/download/v2.3/SafeExamBrowserInstaller.exe";
            downloadText = downloadText + osName + " " + osVersion + " device";
            supportedOS = true;
            break;
        case "Mac OS":
            // code block
            downloadLink =
                "https://github.com/SafeExamBrowser/seb-mac/releases/download/2.1.3/SafeExamBrowser-2.1.3.dmg";
            downloadText = downloadText + osName + " " + osVersion + " device";
            supportedOS = true;
            break;
        default:
            // code block
            console.log("Not Supported" + osName);
            downloadText =
                "ELC Entry is only supported on Windows and Mac. Your OS is " + osName
    }
  return (

  

    <div div className="container bodyelc">
      <main role="main">
        <div className="row text-center">
            <div className="col-md-12 mb-4">
                <h1 className="jumbotron-heading">
                <b>欢迎登入ELC Entry 测试界面。</b>
                </h1>
            </div>
          </div>
         
          <div className="test-day">
      
          <div className="row mt-4">
            <div className="col-md-12 text-center">
            <h2>
            Before Test Day 
          </h2>
          <strong>Technical Co-Ordinator:</strong>
          <br />
          <p><i>On each computer that the student will use for testing:</i></p>
            </div>
          </div>
        
          <div className="row d-flex justify-content-center mt-4">
        <div className="col-md-6 d-flex align-items-stretch">
            <div className="card">
                <div className="card-body text-center">
                <h5>{downloadText}</h5>
              <a href={downloadLink} className="btn btn-home-top btn btn-secondary mt-4">
                 Click to Download
            </a>
       
                </div>
            </div>
        </div>


        <div className="col-md-6 d-flex align-items-stretch">
            <div className="card">
                <div className="card-body text-center">
                <h5>Step 2:</h5>
                <a
               href="https://researchtech1.ets.org/c3.net/Falcon/FalconStartProd.seb"
               className="btn btn-home-top btn btn-secondary mb-4 mt-2"
             >
             Launch Practice form
             </a>
                <p><i>Perform trial runs of practice test using a small group of students to validate that everything is ready </i></p>
                </div>
            </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 text-center">

            <p><i>After you successfully complete installation and are ready to take
                the test...</i>
                
            </p>
        </div>
      </div>
      </div>
      <div className="test-day mt-4 mb-4">
      <div className="row pb-4">
    <div className="col-md-12 text-center">

            <h2>
            On Test Day
          </h2>
            <strong>Proctor:</strong>
            <p><i>On each computer that the student will use for testing:</i> </p>
        </div>
        </div>

          <div className="row d-flex">
          <div className="col-md-4 d-flex align-items-stretch align-items-center">
          <div className="card">
          <div className="card-body text-center">
          <h5> Step 1:</h5>
             <a
               href="https://researchtech1.ets.org/c3.net/Falcon/FalconStartProd.seb"
               className="btn btn-home-top btn btn-secondary mt-2"
             >
             Click here to <strong>Start Test</strong>
             </a>
             
           </div>
          </div>
          </div>
     
          <div className="col-md-4 d-flex align-items-stretch align-items-center">
          <div className="card">
          <div className="card-body text-center">
           <h5>Step 2: Enter Student Id</h5>
           
           </div>
          </div>
          </div>
          <div className="col-md-4  d-flex align-items-stretch align-items-center">
          <div className="card">
          <div className="card-body text-center">
           <h5>Step 3: Update student activity sheet</h5>
           
           </div>
          </div>
          </div>
       
    </div>

</div>
   
<hr/>

          <div className="row mt-4">
            <div className="col-md-12 text-center mb-4">
            <h4>Required Technical Specifications</h4>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 d-flex align-items-stretch">
                <div className="card">
                    <div className="card-body">
                    <strong>Windows:</strong><br/>
            Supported operating systems:
            </div>
            
            
            <ul>
            <li>Microsoft Windows 7 </li>
            <li>Windows 8/8.1 </li>
            <li>Window 10</li>
            <li>The current version of Chrome</li> 
            </ul>
                    </div>
                </div>
            <div className="os text-center">
           
            </div>

            <div className="col-md-4 d-flex align-items-stretch">
                <div className="card">
                    <div className="card-body">
                  
            <strong>macOS:</strong><br /> 
            Supported operating systems: 
         
            
            <ul>
                <li>macOS 10.14 Mojave</li>
                <li>macOS 10.13 High Sierra</li> 
                <li>macOS 10.12 Sierra</li> 
                <li>OS X 10.11 El Capitan</li>
            </ul>
         <i><strong>On these older OS versions, modern web pages might not be rendered correctly: </strong></i>
            <ul>
                <li>OS X 10.10 Yosemite</li>
                <li>OS X 10.9 Mavericks</li>
                <li>Safari 6.2 or higher</li>
            </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch">
                <div className="card">
                    <div className="card-body">
                   
            <strong>Required hardware:</strong><br/>

            <ul>
                <li>Headsets with Microphones for each test taker</li>
            </ul>
                    </div>
                </div>
            </div>
          </div>

       
 
            {/*<p>*/}
            {/*  <img*/}
            {/*    className="openwith"*/}
            {/*    src={openWithWin}*/}
            {/*    alt="Open With Windows"*/}
            {/*  />*/}
            {/*</p>*/}
    
        
         
      </main>
 
    </div>
  )
};

export default Launch
