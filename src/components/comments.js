import React from "react"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import $ from "jquery"


function slideOut() {
  $(".comments").toggleClass("activeShow")
}

const Comments = () => {

  return (

    <div className='comments'>
      <button className="comment-btn" onClick={slideOut}>Comments</button>
      <div className="w-100 p-4">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center">Comments</h2>
            <hr/>


            <ol>
              <li>As an administrator, what sort of test feedback you are looking for?</li>
              <li>What is the most important thing you need to see?</li>
              <li>What was the first thing you clicked on?</li>
              <li>What was the first thing you expected to see?</li>
              <li>When you clicked, were you directed to where you wated to go?</li>
              <li>Did you find the information you were looking for on the page?</li>
              <li>Is there anything that you expected to see but didn't?</li>
            </ol>

            <Form action="https://formspree.io/mnqqawgd" method="POST">
              <FormGroup>
                <Label for="FullName">Full Name</Label>
                <Input type="text" name="_replyto" name="full name" id="FullName"/>
              </FormGroup>


              <FormGroup>

                <Label for="Email">Email</Label>
                <Input type="email" name="email" id="Email"/>
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">Comments and feedback</Label>
                <Input type="textarea" name="text" id="exampleText"/>
              </FormGroup>

              <Button className="mt-4" type="submit">Submit</Button>
            </Form>
          </div>
        </div>


      </div>

    </div>
  )
}


export default Comments