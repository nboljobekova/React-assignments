import React, { Component } from "react";
import { Layout } from "../components";
import { Container, Row } from "reactstrap";

class EducationPage extends Component{
  constructor(props) {
    super(props)
    this.state = {
        items: [
          { 
          id: 1,
          date: "2018-Present", 
          title: "IT Academy", 
          content: "Front End Web Developer"
        },
        { 
          id: 2,
          date: "2013-2015",
          title: "Ritsumeikan Asia-Pacific University",
          content: "Master of Business Administration",
        },
        { 
          id: 3,
          date: "1997-2002",
          title: "Kyrgyz National University", 
          content: "Computer information systems"
        }
      ]
    }
  }
  
  render() {
    return (
      <Layout>
        <Container>
          <Row>
            <h2>Education</h2>
            <ul>
              {this.state.items.map(item => (
                <li key={item.id}>
                  <div className="item__date">
                    <p>{item.date}</p>
                  </div>
                  <div className="item__title">
                    <p>{item.title}</p>
                  </div>
                  <div className="item__content">
                    <p>{item.content}</p>
                  </div>
                </li>
              ))}
            </ul>
        </Row>
        </Container>
      </Layout>  

    )
  }
}




export default EducationPage;