import React from "react"
import "jquery/dist/jquery.js"
import { graphql, Link, useStaticQuery } from "gatsby"
import $ from "jquery"
import { osName, osVersion } from "react-device-detect"
import plus from "../../images/plus.png"
import icon from "../../images/DesktopIcon.png"
import pdf from "../../pdf/ETS_ELC_Student_Activity.pdf"
import pdf2 from "../../pdf/ETS_ELC_Student_Problem_Report.pdf"

// import sebwin from "../../static/software/SafeExamBrowserInstaller.exe"
// import sebmac from "../../static/software/SafeExamBrowser2.1.3.dmg"

//import openWithWin from "../../images/openWithSEBWin.PNG"
//import DownloadBlock from "../shared/downloadblock"
function openOne() {
  $(".hidden-1").toggleClass("opened")
  $(".icon").toggleClass("active")
}

function openTwo() {
  $(".hidden-2").toggleClass("opened")
  $(".icon2").toggleClass("active")
}



function openFour() {
  $(".hidden-4").toggleClass("opened")
  $(".icon4").toggleClass("active")
}

function openFive() {
  $(".hidden-5").toggleClass("opened")
  $(".icon5").toggleClass("active")
}

function openSix() {
  $(".hidden-6").toggleClass("opened")
  $(".icon6").toggleClass("active")
}



function openBefore() {
  $("li#Before").addClass("selection").siblings().removeClass("selection")
  $("#before-testday").fadeIn('fast').siblings().fadeOut('fast')
 
}

function openTest() {
  $("li#Test").addClass("selection").siblings().removeClass("selection")
  $("#test-day").fadeIn('fast').siblings().fadeOut('fast')
}

function openSystem() {
  $("li#System").addClass("selection").siblings().removeClass("selection")
  $("#requirements").fadeIn('fast').siblings().fadeOut('fast')
}

function openTrouble() {
  $("li#Trouble").addClass("selection").siblings().removeClass("selection")
  $("#trouble-shooting").fadeIn('fast').siblings().fadeOut('fast')
}





const Launch = () => {
  console.log(osName)
  let supportedOS = false
  let downloadLink
  downloadLink = ""
  let downloadText = "Download & install Secure Browser on your "
  switch (osName) {
    case "Windows":
      // code block
      console.log("windows" + osName)
      downloadLink =
        "https://github.com/SafeExamBrowser/seb-win/releases/download/v2.3/SafeExamBrowserInstaller.exe"
      downloadText = downloadText + osName + " " + osVersion + " device by clicking this link." 
      supportedOS = true
      break
    case "Mac OS":
      // code block
      downloadLink =
        "https://github.com/SafeExamBrowser/seb-mac/releases/download/2.1.3/SafeExamBrowser-2.1.3.dmg"
      downloadText = downloadText + osName + " " + osVersion + " device by clicking this link."
      supportedOS = true
      break
    default:
      // code block
      console.log("Not Supported" + osName)
      downloadText =
        "ELC Entry is only supported on Windows and Mac. Your OS is " + osName
  }
  const data = useStaticQuery(graphql`
      query {
          allFile(filter: {sourceInstanceName: {eq: "software"}}) {
              edges {
                  node {
                      publicURL
                      name
                  }
              }
          }
      }
  `)
  return (
    <div className="container-fluid bodyelc">
      <main role="main">
        <div className="row text-center head-banner">
          <div className="col-md-12 d-flex align-items-center justify-content-center">
            <h1 className="jumbotron-heading">欢迎登入ELC Entry 测试界面。</h1>
            <div className="section-menu">

               <ul id="nav-tab">
             <li id="Before" className="selection" onClick={openBefore}><a href="#0">Before Test Day</a></li>
             <li id="Test"  onClick={openTest}><a href="#0">On Test Day</a></li>
             <li id="System" onClick={openSystem}><a href="#0">System And Bandwidth Requirements</a></li>
             <li id="Trouble" onClick={openTrouble}><a href="#0">Troubleshooting</a></li>
             
           </ul>
            </div>
        
          </div>
        </div>

      <ul className="page mb-4">
        <li id="before-testday">
        <div className="container">
        
          <div className="row d-flex justify-content-center mt-4">
            <div className="col-md-12 d-flex align-items-stretch ">
            
              
                <div className="instruction">
                <h2 className="mb-4">Tech Co-Ordinator's Initial Setup And Technical Check</h2>
                <p><strong>Before test day,</strong> please go through the following steps to ensure your technical equipment is optimal for running the ELC Entry Test and to ensure a smooth testing experience for students.</p> <br/>
                <p>On each computer that the student will use for testing, quit <u>all programs</u> and complete the following steps:</p>
                
                </div>
                </div>
                </div>
                </div>
            
                <div className="container-fluid">
                <div className="row d-flex justify-content-center mb-4">
            <div className="col-md-12 d-flex align-items-stretch ">
              <div className="w-100 p-2 d-flex align-items-center">
              <div className="instruction">
                <ul className="launch mt-4">
                  <li ><div className="steps"> 1</div> <p><a href={downloadLink} className="screenlink">{downloadText}</a></p>
                     <br/>
                  
                      <p><i>If you have trouble with the download, try the alternate download link for your device.</i> &nbsp;
                      {data.allFile.edges.map((file, index) => {
                        return (

                          <a className="screenlink" href={file.node.publicURL} download>
                            {file.node.name === "SafeExamBrowserInstaller" ? "Windows" : "Mac"}
                          </a>


                        )
                      })}</p>
                
             
                  
                   </li>
                   <li className="inactive-step">
                   <p><div className="steps">2</div> <a
                    href="https://researchtech1.ets.org/c3.net/Falcon/FalconStartProd.seb"
                    className="screenlink"
                  > Click this link to download test launch file.
                  </a> </p>
                   </li>
                   <li>
                   <div className="steps">3</div> Drag and drop the Test Launch file from
                      your computer's Download folder onto the desktop. The icon will look similar to the icon bellow.
                      <div className="icon-box pt-2 text-center">
                <img className="icon-pic mt-4" src={icon} alt="icon"/>
                <br/>
                <small>
                  <i>elcTestStart.seb</i>
                </small>
              </div>
                  
                   </li>
                   <li>
                   
                  <p>
                    <div className="steps">4</div>To open the Test Launch file, double click the icon <i>"elcTestStart.seb"</i> on your desktop that you copied to your desktop. 
                  </p>

                    
                   </li>
                   <li>
                   
                   <p>
                     <div className="steps">5</div>Log into the Tech Check by entering the ID provided to you by your
                    school’s ELC Assessment Coordinator. <br/> <br/>Complete the
                    Tech Check.
                   </p>
 
                     
                    </li>
                   
                </ul>
       
              <p className="mb-2">
                <strong> Recommended for Proctor:</strong> Use the practice test
                IDs provided to you by your school's ELC coordinator to launch
                the practice test and familiarize yourself with the test items.
                This will help you better guide your students. Follow the test
                day procedures below.
              </p>
              <p>
                <strong> Recommended: </strong>Perform trial runs of the
                practice test using a small group of students to validate that
                everything is ready.
                <br/>
              </p>
                </div>
            
                
                  
              

           

              </div>


            </div>

        


  
      
          </div>
        </div>
        </li>
<li id="test-day" className="inactive-field">
 <div className="container mt-4 mb-4">
          <div className="row pb-4">
            <div className="col-md-12">
              <h2>ELC Entry Test</h2>

              <p>
                <strong>Proctor: </strong>
          
                  Confirm that you have login ID for all students taking the
                  test today.
           
                  Download and print:{" "}
                  <a target="_blank" rel="noopener noreferrer" className="green" href={pdf}>
                    Student Activity Sheet
                  </a>{" "}
                  and{" "}
                  <a target="_blank" rel="noopener noreferrer" className="green" href={pdf2}>
                    Student Problem Report
                  </a>
               
              </p>
              <br/>
 
              <p>
                <i>On each computer that the student will use for testing:</i>
              </p>
            </div>
          </div>
</div>
<div className="container-fluid">
          <div className="row d-flex">
        <ul className="launch mt-4">
          <li>
          <div className="steps">
          1
          </div>
                <p>
                  Double click the ELC Test Launch File from the desktop to
                  start the test.
                </p>
                <div className="icon-box text-center mt-4">
                <img className="icon-pic" src={icon} alt="icon"/>
                <br/>
                <small>
                  <i>Launch icon depicted above</i>
                </small>
              </div>
          </li>
          <li>
          <div className="steps">
          2
          </div>
                <p>
                  Ask students to enter their Login ID provided by ETS to your
                  school’s ELC Assessment Coordinator.
                </p>
          </li>
           <li>
           <div className="steps">
          3
          </div>
                <p>
                  Complete the Student Activity Sheet, listing all students who
                  take or attempt to take the test
                </p>
           </li>
              <li>
              <div className="steps">
          4
          </div>
                <p>
                  Update the Student Problem Report if any student experiences a
                  technical problem.
                </p>
              </li>
             
            
          </ul>
          <p>
            <strong>
              At the end of the testing session, return all Student Activity and
              Problem Reports to your school's Assessment Coordinator.
            </strong>
          </p>
        </div>
 </div>
</li>

<li id="requirements" className="inactive-field">
        <div className="container test-day mb-4">
          <div className="row mt-4">
            <div className="col-md-12 text-center mb-4">
              <h2>ETS ELC System And Bandwidth Requirements</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h3>Student Testing Requirements</h3>
              <p>
                Here are the minimum system requirements for the ETS ELC suite:
              </p>
              <div className="testing-req mt-4">
                <div
                  className=" head-btn text-center d-flex justify-content-between align-items-center"
                  onClick={openOne}
                >
                  <h5>Secure Testing</h5>
                  <div className="icon">
                    <img className="open-plus" src={plus} alt="open"/>
                  </div>
                </div>
              </div>
              <div className="hidden-1">
                <p>
                  Use ETS provided secure testing browser for ETS ELC testing.
                  With proper set-up, these tools prevent students from
                  accessing other websites during testing.
                </p>

                <table className="table">
                  <thead>
                  <tr>
                    <th>Device</th>
                    <th>Operating System</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Windows PC</td>
                    <td>Windows 7, 8.1 or 10</td>
                  </tr>
                  <tr>
                    <td>Macintosh</td>
                    <td>Mac OS X v10.12 or higher</td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                    <td coldiv="2">
                      Recommended: Set up computer user accounts dedicated to
                      testing and disable digital assistants (Siri, Cortana),
                      voice dictation, and unsupported screen readers
                      (ChromeVox and VoiceOver)
                    </td>
                  </tr>
                  </tfoot>
                </table>
              </div>

              <div className="testing-req">
                <div
                  className="head-btn text-center d-flex justify-content-between align-items-center"
                  onClick={openTwo}
                >
                  <h5>Hardware Specifications </h5>{" "}
                  <div className="icon2">
                    <img className="open-plus" src={plus} alt="open"/>
                  </div>
                </div>
              </div>
              <div className="hidden-2">
                <p>
                  Computer hardware must meet the minimum requirements specified
                  by the manufacturers of the operating system and browser in
                  use. Hardware that exceeds the minimum is recommended for an
                  optimal experience. For computer display, follow these
                  specifications:
                </p>
                <ul>
                  <li>Screen Resolution Minimum: 1024 x 768</li>

                  <li>Scaling or Zoom: 100%</li>

                  <li>Color Depth: 32-bit recommended (minimum 16-bit)</li>
                </ul>

                <h4>Headphones for Students</h4>
                <p>
                  Students can hear questions through audio playback. For the
                  best experience, use headphones. In addition, there are
                  specific headphone recommendations for testing with ETS ELC:
                </p>
                <ul>
                  <li>No Bluetooth headphones</li>
                  <li>Over the ear, not buds</li>
                  <li>Noise cancellation</li>
                  <li>
                    Boom microphone, on the end of a stiff arm that extends in
                    front of the student’s mouth rather than attached to the
                    headphone cord
                  </li>
                  <li>USB connection for better sound quality</li>
                </ul>
              </div>

              <div className="testing-req">
                <div
                  className="head-btn text-center  d-flex justify-content-between align-items-center"
                  onClick={openFour}
                >
                  <h5>Network Bandwidth</h5>{" "}
                  <div className="icon4">
                    <img className="open-plus" src={plus} alt="open"/>
                  </div>
                </div>
              </div>
              <div className="hidden-4">
                <p>
                  The following bandwidth recommendations are based on best
                  estimate calculations. Test sites that do not meet these
                  recommendations will be able to deliver assessments, but they
                  may experience delays.
                </p>
                <ul>
                  <li>3 Mbps for every 30 computers concurrently testing.</li>
                  <li>
                    Look for limitation points in your internal network (such as
                    school-to-district connections when the district has the
                    main Internet connection).
                  </li>
                  <li>
                    You may need to calculate the bandwidth requirements
                    separately for each test season, depending on the tests
                    planned. The requirements increase when you test more
                    students, more subjects, or more schools.
                  </li>
                </ul>

                <p>
                  <u>Note:</u> Additional bandwidth is needed at the beginning
                  of each ETS ELC test. The initial load is approximately 3.5
                  MB, and the load time varies based on available bandwidth. To
                  perform an Internet speed test, use a website such as
                  www.speedtest.net and select Fairfax, VA (the primary location
                  of ETS ELC servers). For each building where testing will take
                  place, perform the test at different times during the school
                  day.
                </p>
              </div>
              <div className="testing-req">
                <div
                  className="head-btn text-center d-flex justify-content-between align-items-center"
                  onClick={openFive}
                >
                  <h5>Wireless Recommendations</h5>{" "}
                  <div className="icon5">
                    <img className="open-plus" src={plus} alt="open"/>
                  </div>
                </div>
              </div>
              <div className="hidden-5">
                <p>
                  Here are general guidelines for Wireless Access Points (WAPs),
                  based on 802.11 g, n, or ac:
                </p>
                <ul>
                  <li>Under 25 devices per WAP = acceptable</li>
                  <li>Between 26 to 50 devices = check the performance</li>
                  <li>
                    Over 50 devices = try to decrease the number of device
                  </li>
                  <li>WAP in the same room as the testing devices</li>
                </ul>

                <p>
                  In the WAP configuration, strive to limit connections to just
                  testing devices. Also, limit devices to connect only with the
                  closest WAP (for example, avoid overlapping channels and
                  disable promiscuous mode on devices). During testing, monitor
                  for interference from rogue WAPs, non-testing devices, and
                  non-testing activities, like iOS updates. If errors occur, try
                  disabling automatic load balancing.
                </p>
              </div>
              <div className="testing-req">
                <div
                  className="head-btn text-center  d-flex justify-content-between align-items-center"
                  onClick={openSix}
                >
                  <h5>Firewall Whitelist and Email Configuration</h5>{" "}
                  <div className="icon6">
                    <img className="open-plus" src={plus} alt="open"/>
                  </div>
                </div>
              </div>
              <div className="hidden-6">
                <p>
                  For the following URLs, you should: add to your white lists,
                  exclude from caching, and prioritize the traffic. Update both
                  hardware (such as firewall, content filter, and proxy
                  server/cache) and software (such as antivirus and anti-
                  malware). Allow the changes to propagate before testing.
                </p>
                <h5>Sites for test and administration:</h5>
                <strong>For ETS ELC suite:</strong>
                <ul>
                  <li>ets.org</li>
                  <li>researchtech1.ets.org</li>
                  <li>amplifyapp.com</li>
                  <li>innovation.ets.org</li>
                  <li>elc.innovation.ets.org</li>
                </ul>
                <strong>
                  Allow in email spam filter (both server and clients):
                </strong>
                <p>*@ets.org</p>
              </div>
            </div>
          </div>
        </div>
        </li> 
        <li id="trouble-shooting" className="inactive-field">
          <div className="container">
                    <div className="row">
                    <div className="col-md-12 pt-4 pb-4">
          <h2>Troubleshooting Guide</h2>
          
    
      </div>

             <div className="col-md-12 border-bottom pb-4 pt-4">
              <h5>My computer crashed.</h5>

              <p>Move to another computer and login with your ID. The test will restart where you left off.</p>
            </div>

               <div className="col-md-12 border-bottom pb-4 pt-4">

<h5>I cannot copy and paste the Student's Login ID to the secure browser.</h5>

<p>Copy and paste is disabled during testing. Student Login ID must be typed in manually.</p>
</div>

  <div className="col-md-12 border-bottom pb-4 pt-4">
              <h5>Error Message: Recieved an error message “Can't open this type of file (.seb)."</h5>
              <p>Make sure you installed the <strong>Safe Exam Browser</strong> before launching the test.</p>
            </div>

                <div className="col-md-12 border-bottom pb-4 pt-4">
              <h5>The Safe Exam Browser is not installed.</h5>
              <p>Ask your tech coordinator to install the browser.</p>
            </div>

            <div className="col-md-12 border-bottom pb-4 pt-4">
              <h5>When I clicked on “Download Safe Exam Browser for Windows/Mac” and then clicked on “Run”, I received a
                message to enter admin username and password.</h5>

              <p><strong>Log out </strong>of computer and log back in with admin credentials.</p>

            </div>

               <div className="col-md-12 border-bottom pb-4 pt-4">
              <h5>Student Login ID provided did not work.</h5>

              <p>Double check to make sure you entered your Student Login ID correctly. If your ID still is not working,
                enter in <strong>Student Problem Report</strong>.</p>
            </div>
            <div className="col-md-12 border-bottom pb-4 pt-4">
              <h5>When I launch the test I received a message "Permitted or Prohibited Processes Are Running".</h5>

              <p><strong>Click Cancel</strong> and close all running programs, then re-launch.</p>
            </div>

                <div className="col-md-12 border-bottom pb-4 pt-4">
              <h5>I cannot hear the audio.</h5>

              <p>Make sure volume is set correctly. If you still cannot hear any audio, try a different pair of
                headphones.</p>
            </div>

              <div className="col-md-12 border-bottom pb-4 pt-4">
              <h5>My microphone is not working</h5>

              <p>Make sure your are using a supported microphone (bluetooth microphones may not work).</p>
            </div>
            <div className="col-md-12 border-bottom pb-4 pt-4">
            <h5> When I enter the Student Login ID, I recieve a notification that says "loading activities…“ that lasts for 1-5 minutes. </h5>

           <div className="jumplink" onClick ={openSystem} >Click here to review all system and bandwidth requirements.</div>
        
            <ol>
              <li>Test the Speed test on one computer that will be used in your testing lab at <a className="green" href="https://www.speedtest.net/">speedtest.net</a></li>
              <li>Conduct a latency test using <a  className="green" href="https://www.cloudping.info/">cloudping.info</a> </li>
              <li>Conduct a detailed bandwidth test using <a className="green" href="https://cloudharmony.com/speedtest-for-aws">https://cloudharmony.com/speedtest-for-aws</a>   This test will take atleast 40 minutes to complete.</li> 
              <li> Email the results to ETS.</li>
            </ol>
            
            </div>

                    </div>
          </div>
      

                    </li>
        </ul>
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
}

export default Launch
