import React from "react";
import PropTypes from "prop-types";
import "./TodoItem.css";

class TodoItem extends React.Component {
  constructor(){
    super()
    this.state = {
      editable: false,
      alt_text: ""
    }
    this.toggleEditable = this.toggleEditable.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  shouldComponentUpdate(newProps){
    if (newProps.text !== this.props.text || newProps.completed !== this.props.completed){
      return true
    } else {
      return false
    }
  }
  
  componentDidMount(){
    console.log("componentDidMount; Task:", this.props.text)
  }
  
  componentDidUpdate(prevProps, prevState){
    if (prevProps.completed !== this.props.completed){
      console.log("Та! Дам! Изменился то text!!!");
    }
    console.log("componentDidUpdate; Task:", this.props.text)
  }
  
  componentWillUnmount(){
    console.log("componentWillUnmount; Task:", this.props.text)
  }
  
  toggleEditable(){
    this.setState({
      editable: !this.state.editable
    })
  }
  
  handleChange(e){
    this.setState({
      alt_text: e.target.value
    })
  }

  render() {
    const { text, completed, toggleTodo, removeTodo } = this.props;
    const { alt_text, editable } = this.state
    return (
      <li
        onDoubleClick={this.toggleEditable}
        style={{ marginBottom: "10px" }}
        className={`${this.props.className || ""} todo_item ${
          completed ? "completed" : ""
        }`}
      >
        {
          this.state.editable ? 
            <input onChange={this.handleChange} value={alt_text || text}></input>
            :
            <span>{text}</span>
        }
        <button className="btn btn-danger btn-sm" onClick={removeTodo}><span role="img" aria-label="delete">❌</span></button>
        <button className="btn btn-primary btn-sm"onClick={toggleTodo}><span role="img" aria-label="check">✅</span></button>
      </li>
    );
  }
}


TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  // changeTodo: PropTypes.func.isRequired
};

export default TodoItem;

//${completed ? "completed" : ""}`}> - если completed то completed, иначе ""