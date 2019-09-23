import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Table } from "react-bootstrap"


const studentData = [
  { student: [{ name: "Wang, Jing", id: "001", score: "145" }] },
  { student: [{ name: "Yuxi, Yao", id: "002", score: "147" }] },
]


const StudentScores = () => {
  return (

    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-4 text-center mb-4">
            <h1>Student Scores</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Table hover bordered>
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
                    )
                  })}

                  </tbody>
                )
              })}
            </Table>
          </div>
        </div>
      </div>

    </Layout>


  )
}

export default StudentScores