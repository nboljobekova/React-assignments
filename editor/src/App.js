import React, { Component } from 'react';
import './App.css';
import { Sidebar, Window, Panels, EditorForm } from "./components";
// import remark from 'remark'
// import mdx from 'remark-mdx'

// import { MDXProvider } from '@mdx-js/tag';

class App extends Component {
  // eslint-disable-next-line
  constructor() {
    super();
    this.state = 
      {
        title: "",
        fname: "",
        lname: "",
        date: "",
        body: ""
      };
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleFNameChange = this.handleFNameChange.bind(this);
      this.handleLNameChange = this.handleLNameChange.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  handleTitleChange(e){
    this.setState({
      title: e.target.value
    })
  }

  handleFNameChange(e){
    this.setState({
      fname: e.target.value
    })
  }

  handleLNameChange(e){
    this.setState({
      lname: e.target.value
    })
  }

  handleDateChange(e){
    this.setState({
        date: e.target.value
    })
  }

  handleBodyChange(e){
    this.setState({
      body: e.target.value
    })
  }
  
  render() {
    return (
      <Panels
        left={
          <Sidebar>
            <EditorForm
              handleTitleChange = {this.handleTitleChange}
              handleFNameChange = {this.handleFNameChange}
              handleLNameChange = {this.handleLNameChange}
              handleDateChange = {this.handleDateChange}
              handleBodyChange = {this.handleBodyChange}
            />
          </Sidebar>

        }
        right={
          <Window>
            <div>
              <h1>{this.state.title}</h1>
              <div class="row">
                <div className="names">
                  <span class="text-muted">"> {this.state.fname}</span>
                  <span class="text-muted">"> {this.state.lname}</span>
                </div>
                <span class="text-muted">{this.state.date}</span>
              </div>
              <p>{this.state.body
                // remark()
                // .use(mdx)
                // .processSync(this.state.body).contents
}</p>
            </div>
          </Window>
        } 
      />
    );
  }
}

export default App;
