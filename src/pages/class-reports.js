import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import {Link} from 'gatsby' 


const classData= [
    { classes: [{ names: "English Level 1", score:"90", teacher: "Mrs. Smith" }] },
    { classes: [{ names: "English Level 2", score:"97",  teacher: "Mrs. Smith"}] },
    { classes: [{ names: "English Level 3", score:"124", teacher: "Mrs. Adams" }] }
   ];
     

const ClassScores = () => {
    return(

        <div>
               <Header/>
    <div className="container">
    <div className = "row">
    <div className="col-md-12 mt-4 text-center">
    <h1>Class Reports</h1>
    </div>
    </div>
        <div className="row">
            <div className="col-md-12">
            <table className="table table-borderless table-data3">
            <thead>
                <tr>
                <th className="text-center" scope="col">Name</th>
                <th className="text-center" scope="col">Score</th>
                <th className="text-center" scope="col">Teacher</th>
                </tr>
              
            </thead>
            {classData.map(e => {
    return (
     <tbody>
      
      {e.classes.map(item => {
     return (
        <tr>
      <td className="text-center">
      <Link to="/classIndreport">{item.names}</Link>
      </td>
      <td className="text-center">
      {item.score}
      </td>
      <td className="text-center">
      {item.teacher}
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

export default ClassScores