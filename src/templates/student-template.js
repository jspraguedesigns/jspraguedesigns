import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
export default ({ pageContext: { students } }) => (
  <div>
    <Header/>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-12">
          <h1>{students.name}</h1> <strong>Student ID: {students.id}</strong>
          <strong>Test Date: {students.date}</strong>
          <hr/>
           <strong>Score:</strong>
           <h2>{students.score}</h2>
          
          </div>
        </div>
  </div>
  <Footer />
  </div>

)