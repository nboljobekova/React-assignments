import React from "react";
import PropTypes from "prop-types";

class TodoList extends React.Component{
  render(){
    return (
      <ul>
        {this.props.children}
      </ul>
    )
  }
}

TodoList.propTypes = {
  children: PropTypes.element.isRequired
}

export default TodoList;