import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import SVGIcon from "../components/SVGIcons";
import Popup from "../components/popup";
import Comments from "../components/comments";
const TestResults = () => {
    return(
   <Layout>
     <Popup />
  
       <div className="wrapper">
       <Comments/>
      <div className="row">
        <div className="w-100 mt-4 mb-4 text-center">
        <h1>Test Results</h1>
        </div>
      </div>
      
        <div className="track">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex flex-wrap">
                    <Link to="/report" className="squareLink">
    
    <div className="square justify-content-center text-center d-flex align-items-center justify-content-center">
            <span className="label">ELC Entry Results</span>
        </div>

       
  </Link>
  <Link className="squareLink">
  <div className="disabled justify-content-center text-center d-flex align-items-center justify-content-center">
    <div className="label-icon">
    <SVGIcon name="badge" width={200} />   
  <span className="label">ELC 1</span>
    </div>

  </div>
      
  </Link>
  <Link className="squareLink">
  <div className="disabled justify-content-center text-center d-flex align-items-center justify-content-center">
    <div className="label-icon">
    <SVGIcon name="badge" width={200} />   
  <span className="label">ELC 2</span>
    </div>

  </div>
      
  </Link>
  <Link className="squareLink">
  <div className="disabled justify-content-center text-center d-flex align-items-center justify-content-center">
    <div className="label-icon">
    <SVGIcon name="badge" width={200} />   
  <span className="label">ELC 3</span>
    </div>

  </div>
      
  </Link>
      <Link className="squareLink">
  <div className="disabled justify-content-center text-center d-flex align-items-center justify-content-center">
    <div className="label-icon">
    <SVGIcon name="badge" width={200} />   
  <span className="label">ELC 4</span>
    </div>

  </div>
      
  </Link>
                    </div>
                </div>
            </div>

  
      </div>
      </div>
      </Layout>
  
    )
}
export default TestResults