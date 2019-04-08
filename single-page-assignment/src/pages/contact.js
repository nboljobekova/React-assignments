import React, { Component } from "react";
//import PropTypes from "prop-types";
import { Container, Form, Label, Input, FormGroup } from "reactstrap";
//import {Redirect} from "react-router-dom";
//
import { Layout } from "../components";

class ContactPage extends Component{
  render(){
    return (
      <Layout>
        <Container>
        <h1>
          ContactPage
        </h1>
        <Form>
          <FormGroup>
            <Label for="EmailInput">Email address</Label>
            <Input type="email" class="form-control" id="EmailInput" placeholder="name@example.com" />
          </FormGroup>
          <FormGroup>
            <Label for="Textarea">Example textarea</Label>
            <Input type="textarea" class="form-control" id="Textarea" rows="5" cols="15"/>
          </FormGroup>
        </Form>
      </Container>
    </Layout>
    )
  }
}


export default ContactPage;