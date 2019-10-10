import React from "react"
import $ from "jquery"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import exclamation from '../images/exclamation-triangle-solid.svg'



function slideOut() {
  $(".comments").toggleClass("activeShow")
}

const Trouble = () => {

  return (

    <div className='comments'>
      <button className="comment-btn" onClick={slideOut}>排除故障</button>
      <div className="w-100 p-4">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center">排除故障</h2><img className="warning" src = {exclamation} />
            <hr/>


            <ol>
              <li>Trouble Shooting tips</li>
            </ol>

            
          </div>
        </div>


      </div>

    </div>
  )
}


export default Trouble