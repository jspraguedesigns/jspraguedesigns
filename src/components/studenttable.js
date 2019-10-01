import React from "react"
import ReactDOM from "react-dom"

const CreateRows = () => {
  const rows = [
    {
      _id: "56cf587fe46adb3b8960afe2",
      price: 2000,
      title: "ps3",
      url: "www.google.com",
    }, {
      _id: "56db2bd434df9046e0643d22",
      price: 499,
      title: "HENRIKSDAL",
      url: "http://www.ikea.com/se/sv/catalog/products/S59847817/",
    },
  ]


  var Hello = React.createClass({
    renderRow(props) {
      return (
        <tr>
          <td>{props._id}</td>
          <td>{props.price}</td>
          <td>{props.title}</td>
          <td>{props.url}</td>
        </tr>
      )
    },

    render: function() {
      return (
        <table>
          {this.props.rows.map(this.renderRow)}
        </table>
      )
    },
  })

  ReactDOM.render(
    <Hello rows={rows}/>,
    document.getElementById("container"),
  )

}

export default CreateRows