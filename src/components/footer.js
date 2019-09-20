import React from 'react'
import SVGIcon from "./SVGIcons";
const Footer = () => {
    return (
        <footer>
    <div className="container-fluid">
    <div className="row d-flex align-items-center">
   
      <div className="col-md-3">
      <SVGIcon name="ets-logo" width={80} />  
      </div>
      <div className="col-md-9">
      <div className="copyright">
      Copyright &copy; 2019 by Educational Testing Service. All rights reserved.
All trademarks are the property of their respective owners.
      </div>
      </div>
      
    </div>
    </div>

</footer>

    )
}

export default Footer