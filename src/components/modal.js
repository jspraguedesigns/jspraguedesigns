import React from 'react';
import {Modal, ButtonToolbar, Button} from "react-bootstrap"
import illustration from "../images/illustration.png";
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <h4>How to interpret charts</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
      
        <img className="img-fluid mt-4 mb-2" src={illustration} alt="illustration"/>
        </Modal.Body>
    
      </Modal>
    );
  }
  
  function ModalDiagram() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <ButtonToolbar>
        <Button  className="text-center btn btn-home-top btn btn-secondary" onClick={() => setModalShow(true)}>
        How to interpret charts

        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
    );
  }
  

  export default ModalDiagram;
 