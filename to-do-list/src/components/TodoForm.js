import React, { createRef } from "react";
import PropTypes from "prop-types";


class TodoForm extends React.Component{
  constructor(){
    super()
    this.text_input = createRef()
    this.state = {
      text: ""
    }
    this.onTextChange = this.onTextChange.bind(this);
  }
  
  onTextChange(e){
    this.setState({
      text: e.target.value
    })
  }
  
  render(){
    return(
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.addTodo(this.state.text);
          this.setState({
            text: ""
          })
        }}
      >
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Text"
            onChange={this.onTextChange}
            value={this.state.text}
          />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="submit">Send task</button>
          </div>
        </div>
      </form>
    )
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default TodoForm;