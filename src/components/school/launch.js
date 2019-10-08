import React from "react"
import "jquery/dist/jquery.js"
import { osName, osVersion } from "react-device-detect"
//import DownloadBlock from "../shared/downloadblock"

const Launch = () => {
  console.log(osName)
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
            <a href="#" className="btn btn-primary my-2">
              Step 1: Download & Install Secure Browser from link below for {osName} {osVersion}
            </a>
          </p>

          <p>
            <a
              href="https://researchtech1.ets.org/c3.net/Falcon/FalconStartProd.seb"
              className="btn btn-secondary my-2"
            >
              Step 2: Click here to <strong>Start Test</strong>
            </a>
          </p>
        </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="5%" y="50%" fill="#eceeef" dy=".3em">
                      <a name="Windows" href="https://github.com/SafeExamBrowser/seb-win/releases/download/v2.3/SafeExamBrowserInstaller.exe">
                        Download Safe Exam Browser for Windows
                      </a>
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">
                      如使用 Windows 电脑，请点击以下链接，下载并安装{" "}
                      <b>Safe Exam Browser</b>。 安装时请使用默认选项。
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      Current version of Safe Exam Browser for Windows 7, 8.1
                      and 10
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div name="Mac OS" className="card mb-4 shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="5%" y="50%" fill="#eceeef" dy=".3em">
                      <a href="https://github.com/SafeExamBrowser/seb-mac/releases/download/2.1.3/SafeExamBrowser-2.1.3.dmg">
                        Download Safe Exam Browser for macOS
                      </a>
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">
                      如使用 mac 电脑，请点击以下链接，下载并安装{" "}
                      <b>Safe Exam Browser</b>。 安装时请使用默认选项。
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <p>
                        Current version of Safe Exam Browser for macOS 10.13,
                        10.12, 10.11, 10.10, 10.9,{" "}
                        <a href="#RemarkOSX10-7">10.8*</a> and{" "}
                        <a href="#RemarkOSX10-7">10.7*</a>
                        <br />.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="5%" y="50%" fill="#eceeef" dy=".3em">
                      <a name="iOS"
                        href="https://itunes.apple.com/app/safeexambrowser/id1155002964?mt=8"
                        alt="Download SEB for iOS"
                      >
                        Download SafeExamBrowser for iOS
                      </a>
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">
                      如使用 iOS 电脑，请点击以下链接， 下载并安装{" "}
                      <b>Safe Exam Browser</b>
                      。将安装文件拉入应用文件夹即可完成安装。
                    </p>
                    <p>
                      <strong>
                        Current version of SafeExamBrowser for iOS 9.3.5 and
                        newer
                        <a href="#RemarkOSX10-7" />
                      </strong>
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </main>
    </div>
  )
}

export default Launch
