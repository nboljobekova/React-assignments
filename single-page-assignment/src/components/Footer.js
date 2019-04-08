import React, { Component } from "react";
import { Container, Row } from "reactstrap";

class Footer extends Component{
  render(){
    return (
      <Container className="mt-3">
        <Row>
            <hr />
            <div className="copyright">
                <p>&copy Boljobekova Nurzat 2018</p>
            </div>       
        </Row>
      </Container>
    )
  }
}

export default Footer