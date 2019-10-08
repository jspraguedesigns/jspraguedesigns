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
    <div>
      <main role="main">
        <div className=" px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="jumbotron-heading">
            <b>欢迎登入ELC&reg; 核心素养测试界面</b>
          </h1>
          <p className="lead text-muted">
            Something short and leading about the ELC.
          </p>
          <p>
              <a href={downloadLink} className="btn btn-primary my-2">
                  {downloadText}
            </a>
          </p>

            <p className="lead text-muted">
                After you successfully complete installation and are ready to take
                the test...
            </p>

          <p>
            <a
              href="https://researchtech1.ets.org/c3.net/Falcon/FalconStartProd.seb"
              className="btn btn-secondary my-2"
            >
              Step 2: Click here to <strong>Start Test</strong>
            </a>
          </p>
            {/*<p>*/}
            {/*  <img*/}
            {/*    className="openwith"*/}
            {/*    src={openWithWin}*/}
            {/*    alt="Open With Windows"*/}
            {/*  />*/}
            {/*</p>*/}
        </div>
          <div className="container">
              <div className="row"/>
          </div>
      </main>
    </div>
  )
};

export default Launch
