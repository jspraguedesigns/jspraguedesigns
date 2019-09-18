import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import {Link} from 'gatsby' 


const studentData= [
    { student: [{ name: "Wang, Jing", id: "001", score:"145" }] },
    { student: [{ name: "Yuxi, Yao", id: "002", score:"147" }] }
   ];
     

const StudentScores = () => {
    return(

        <div>
               <Header/>
    <div className="container">
    <div className = "row">
    <div className="col-md-12 mt-4 text-center">
    <h1>Student Scores</h1>
    </div>
    </div>
        <div className="row">
            <div className="col-md-12">
            <table className="table table-borderless table-data3">
            <thead>
                <tr>
                <th className="text-center" scope="col">Name</th>
                <th className="text-center" scope="col">ID</th>
                <th className="text-center" scope="col">Score</th>
                </tr>
              
            </thead>
            {studentData.map(e => {
    return (
     <tbody>
      
      {e.student.map(item => {
     return (
        <tr>
      <td className="text-center">
      <Link to={item.name}>{item.name}</Link>
      </td>
      <td className="text-center">
      {item.id}
      </td>
      <td className="text-center">
      {item.score}
      </td>
      </tr>
      );
})}
      
     </tbody>
     );
    })}
 </table>
            </div>
        </div>
    </div>
      
        <Footer/>
        </div>
     
    )
}

export default StudentScores