import React from 'react'
import {Link} from 'gatsby'
import wechatimg from "../images/wechat.png"
import qrcodeimg from "../images/qrcode.jpg"
import {getUserInfo} from "../utils/auth";

const Home = () => {
  return (

<div>
  <div className="navbar-text text-wrap font-italic">
    {getUserInfo().name ? getUserInfo().name : "friend"}
  </div>
  <div className="row d-flex align-items-center justify-content-center  banner">
    <div className="col-md-6 text-center animated fadeInUp">

      <h1 className="home-text">English<br/> Learning<br/> Certificate</h1>
      <Link to="/app/about">
        <button type="button" className="btn btn-home-top btn btn-secondary mt-4">Learn more about ELC
        </button>
      </Link>

    </div>
    <div className="col-md-6 home-text">
      <Link to="/app/launch">
        <button type="button" className="btn btn-home-top btn btn-secondary mt-4">Launch Test
        </button>
      </Link>
    </div>
  </div>

  <div className="wechat">
    <div className="row">
      <div className="col-md-12 text-center pt-4 pb-4">
        <img className="wechat-logo" src={wechatimg} alt="WeChat Logo"/>
        <h2 className="home-text">Keep In Touch With Us</h2>
        <p className="home-text">We need your feedback to make this test successful. Scan the QR code bellow to
          join our WeChat Group.</p>
        <img className="wechat-logo" src={qrcodeimg} alt="QR Code"/>
      </div>
    </div>
  </div>

</div>

)
};

export default Home