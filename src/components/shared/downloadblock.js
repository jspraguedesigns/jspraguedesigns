import React from "react";
//import {osName} from  "react-device-detect";
//import Launch from "../school/launch";


const DownloadBlock = (props) => {
    if ({osName} === "Windows") {
        console.log("exporting windows")
        return (
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
                        <rect width="100%" height="100%" fill="#55595c"/>
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                            Download
                        </text>
                    </svg>
                    <div className="card-body">
                        <p className="card-text">
                            {" "}
                            如使用 Windows 电脑，请点击以下链接，下载并安装{" "}
                            <b>Safe Exam Browser</b>。 安装时请使用默认选项。
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="well">
                                <p>
                                    <a
                                        className="btn btn btn-primary btn-responsive btn-lg"
                                        href="https://sourceforge.net/projects/seb/files/seb/SEB_2.3/SafeExamBrowserInstaller.exe/download"
                                        alt="Download SEB for Windows"
                                    >
                                        <span className="glyphicon glyphicon-download seb-button-icon"/>
                                        <span className="seb-button-text">
                              Safe Exam Browser 2.3 for Windows
                            </span>
                                    </a>
                                </p>

                                <p>
                                    <strong>
                                        Current version of Safe Exam Browser for Windows 7,
                                        8.1 and 10
                                    </strong>
                                    <br/>
                                    <span className="codetext">
                            SHA1: 91cd48bb8bc7fd104ecff994b9215f22c9a444f2
                          </span>
                                </p>
                                <p>
                                    {" "}
                                    <a
                                        href="https://github.com/SafeExamBrowser/seb-win/releases/download/v2.3/SafeExamBrowserInstaller.exe"

                                    >
                                        Download
                                    </a>{" "}
                                    from{" "}
                                    <a
                                        href="https://github.com/SafeExamBrowser/seb-win/releases/tag/v2.3"

                                    >
                                        GitHub project site
                                    </a>
                                    . <br/>
                                </p>
                                <p>
                                    SEB 2.3 for Windows offers new features, which
                                    increase security and usability significantly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="col-md-4">
        {osName}
        </div>
        )
}

export default DownloadBlock;