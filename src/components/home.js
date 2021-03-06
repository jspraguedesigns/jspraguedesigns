import React from 'react'
import {Link} from 'gatsby'
import Comments from '../components/comments'
import {getUserInfo} from "../utils/auth";

const Home = () => {
  return (

<div>
 <Comments />
  <div className="row d-flex align-items-center justify-content-center  banner">
    <div className="col-md-6 text-center animated fadeInUp">
      <h1 className="home-text">English<br/> Language<br/> Certificate</h1>
      
      <Link to="/app/about">
        <button type="button" className="btn btn-home-top btn btn-secondary mt-4">Learn more about ELC
        </button>
        </Link>
           <Link to="/app/launch">
        <button type="button" className="btn btn-home-top btn btn-secondary mt-4 ml-4">Launch Test
        </button>
      </Link>
  

    </div>
    <div className="col-md-6">
   
    </div>
  </div>


</div>

)
};

export default Home