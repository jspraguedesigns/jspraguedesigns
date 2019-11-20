import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">


          <div className="col-md-12 d-flex align-items-center p-4">
            <div className="copyright">
              Copyright &copy; 2019 by Educational Testing Service. All rights reserved.
              All trademarks are the property of their respective owners.
            </div>
            <div className="links ml-auto">
            <a href="https://www.ets.org/legal/privacy/" target="_blank">Privacy</a> | <a href="https://www.ets.org/legal/terms/" target="_blank">Terms Of Use</a>
            </div>
          </div>

        </div>
      </div>

    </footer>

  )
}

export default Footer