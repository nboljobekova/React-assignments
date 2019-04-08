import React, { Component, Fragment } from "react";
import { Container, Row } from "reactstrap";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends Component{
  render(){
    return (
      <Fragment>
        <Header />
        <Container>
          <Row />
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

export default Layout;