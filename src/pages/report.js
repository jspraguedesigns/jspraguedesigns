import React from 'react'
import Layout from '../components/layout'
import ClassScores from '../components/class-component'
import {Table} from 'react-bootstrap'

const Report = () =>{
    return(

         <Layout>
         <div className="container pt-4 pb-4">
         <div className="row pt-4">
        <div className="col-md-12 text-center">
          <h1>Institutional Report</h1>
  
        <p className="text-center">This test assesses student enabeling skills in English and places them into appropriate course level.</p>
        </div>

             <Table bordered varient="dark">
            <thead >
                <tr>
                <th className="text-center" scope="col">School</th>
                <th  className="text-center" scope="col">Report Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td class="text-center">Shanghai Jiading District</td>
                <td class="text-center">1-17-20</td>
                </tr>
           
               
            </tbody>
            </Table>
        </div>

 
    <div className="row pt-4 pb-4">
        <div className="col-md-12 text-center headerdark">
          <h2 className="white">Overall Institutional Performance</h2>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6">
            <div className="card results">
                <div className="card-body d-flex align-items-center">
                <div className="score">
                <h5 className="card-title text-center">Average Score:</h5>
                    <h1 className="card-text text-center"><strong>154</strong></h1>
                </div>
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="card results">
                <div className="card-body d-flex align-items-center">
                    <div className="score">
                    <h5 className="text-center">Range of scores (Minimum-Maximum):</h5>
                        <h1 className="card-text text-center"><strong>145 - 155</strong></h1>
                        <p className="text-center">Possible scores: 110 - 170</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="row pt-4">
        <div className="col-md-12">
        <p className="text-center">Average section scores (out of 20 points possible):</p>
         <Table bordered>
            <thead>
                <tr>
                <th className="text-center" scope="col">Listening</th>
                <th className="text-center" scope="col">Vocab</th>
                <th className="text-center" scope="col">Grammar</th>
                <th  className="text-center" scope="col">Reading</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="text-center"><strong>16</strong></td>
                <td className="text-center"><strong>20</strong></td>
                <td className="text-center"><strong>10</strong></td>
                <td className="text-center"><strong>15</strong></td>
                </tr>
           
               
            </tbody>
            </Table>
        </div>

    </div>
    <ClassScores />
    </div>
  
    </Layout>
     


    )
}
export default Report