import React, { Component } from "react";
import { Layout } from "../components";
import { Container, Row } from "reactstrap";
//import { NavLink } from "react-router-dom";
 
class AboutPage extends Component{
  render(){
    return (
      <Layout>
        <Container>
          <Row>
            <h1>
              Welcome to my Personal page!
            </h1>
            <p>
              My name is Boljobekova Nurzat. You can find more information about me by clicking other links.
            </p>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default AboutPage;