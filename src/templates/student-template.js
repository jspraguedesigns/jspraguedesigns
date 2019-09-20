import React from "react"
import Layout from '../components/layout'
import {Table, Card} from 'react-bootstrap'
import AudioPlayer from '../components/audio-player';

export default ({ pageContext: { students } }) => (
  <div>
    <Layout>
      <div className="container">
      <div className="row mt-4 mb-4 d-flex align-items-center">
        <div className="col-md-12">
        <h1>Test Examinee Placement Report</h1>
        </div>
      </div>
        <div className="row mt-4 d-flex align-items-center">
        
          <div className="col-md-12">
          <Table striped bordered hover>
            <thead>
            <th class="text-center">
              Name
              </th>
              <th class="text-center">
              DOB
              </th>
              <th class="text-center">
              Test Taker ID: 
              </th>
              <th class="text-center">
              Test Date: 
              </th>
              <th class="text-center">
              Grade
              </th>
            </thead>
            <tr>
            <td class="text-center"> {students.name}</td>
            <td class="text-center"> {students.dob}</td>
              <td class="text-center"> {students.id}</td>
              <td class="text-center"> {students.date}</td>
              <td class="text-center"> {students.grade}</td>
            </tr>
          </Table>
         
         
          </div>
          </div>
          <hr/>
          <div className="row mt-4">
          <div className="col-md-6">
          <div className="card results">
            <div className="card-body d-flex align-items-center">
              <div className="score">
                <h5 className="text-center">Score:</h5>
                <h1 className="text-center"><strong>{students.score}</strong></h1>
                <p className="text-center">Possible scores: 110 - 170</p>
              </div>
            </div>
          </div>
          </div>
          <div className="col-md-6">
            <div className="card results">    
            <div className="card-body d-flex align-items-center justify-content-center">
            <div className="card-title audio-title">
              <div className="score text-center">
                <h4 className="audio mb-2">Audio Sample</h4>
             
                <AudioPlayer/>
                </div>
                <div className="score text-center">
                <button className="btn btn-home-top btn btn-secondary text-center mt-4">Click to View Writing Sample</button>
             
                </div>
                </div>
            </div>                                       
               </div>
              
          </div>
          </div>
          <div className ="row">
          <div className="col-md-12 mt-4">
          <h4>Performance Summary</h4>
          <hr/>
          <p>{students.performance}</p>
          </div>
          </div>
       

      
  </div>
  </Layout>
  </div>

)