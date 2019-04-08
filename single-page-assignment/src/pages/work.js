import React, { Component } from "react";
import { Layout } from "../components";
import { Container, Row } from "reactstrap";

class WorkPage extends Component{
  constructor(props) {
    super(props)
    this.state = {
        items: [
          { 
          id: 1,
          date: "08/2016 – 10/2018",
          position: "Head, Department of external affairs", 
          company: "State Committee of Information Technologies and Communications of the Kyrgyz Republic"
        },
        { 
          id: 2,
          date: "04/2013 – 08/2016",
          position: "Head, Department of international relations", 
          company: "State Communications Agency under the Government of Kyrgyz Republic"
        },
        { 
          id: 3,
          date: "04/2013 – 08/2016",
          position: "Officer, Spectrum management department", 
          company: "State Communications Agency under the Government of Kyrgyz Republic"
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




export default WorkPage;