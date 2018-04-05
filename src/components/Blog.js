import React, { Component } from 'react';
import { Container,Card, CardImg, CardText, CardBody, CardTitle, Button, Row, Col } from 'reactstrap';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './css/blog.css';

class Blog extends Component {

  constructor(props){
    super(props);
    this.state ={modal: false};

    this.toggle = this.toggle.bind(this);

    }

toggle() {this.setState({modal: !this.state.modal});}


  render() {
    return (
      <Container>
        <div className="rowPublicaciones">

          <div className="col-md-12">

        <div className="col-md-12">
          <div className="categoryCard">

            <Card style={{background: "rgba(255, 255, 255, 0.94)",cursor: "pointer"}} onClick={() => {this.toggle()}}>
                <Row style={{color: "black"}}>
                <Col xs="12"><p className="fecha">fecha</p></Col>
                <Row><Col><h4>here goes the title</h4></Col></Row>
                </Row>
            </Card>

          </div>
        </div>

          </div>

          <Modal isOpen={this.state.modal} toggle={this.toggle}>

            <ModalHeader toggle={this.toggle}>Here goes the title</ModalHeader>
              <ModalBody>
                <Row><Col><h5>Descripcion:</h5></Col></Row>
                <Row><Col>Here goes the content</Col></Row>
                <hr></hr>
              </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </Modal>
              </div>
      </Container>
    );
  }
}

export default Blog;
