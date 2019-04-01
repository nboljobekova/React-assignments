import React from "react";
import PropTypes from "prop-types";
import "./EditorForm.css"


class EditorForm extends React.Component{
  constructor(props){
    super()
    this.state = {
        title: "",
        fname: "",
        lname: "",
        date: "",
        body: ""
    }  
  }
  
  render(){
    return(
      <form
      >
        <div className="input-group">
            <label htmlFor="title">Title</label>
            <input
                type="text"
                name="title"
                className="form-control"
                onChange={this.props.handleTitleChange}
                value={this.state.title}
            />
        </div>
        <div className="row">
            <div className="names">
                <div className="input-group">
                    <label htmlFor="fname">First name</label>
                    <input
                        type="text"
                        name="fname"
                        className="form-control"
                        onChange={this.props.handleFNameChange}
                        value={this.state.fname}
                    />
                </div>
            </div>
            <div className="names">
                <div className="input-group">
                    <label htmlFor="lname">Last name</label>
                    <input
                        type="text"
                        name="lname"
                        className="form-control"
                        onChange={this.props.handleLNameChange}
                        value={this.state.lname}
                    />
                </div>
            </div>
        </div>
        <div className="input-group">
            <label htmlFor="date">Published at</label>
            <input
                type="date"
                name="date"
                className="form-control"
                onChange={this.props.handleDateChange}
                value={this.state.date}
            />
        </div>
        <div className="input-group">
            <label htmlFor="body">Body</label>
            <textarea
                type="text"
                name="body"
                className="form-control"
                rows="10"
                onChange={this.props.handleBodyChange}
                value={this.state.body}
            />
        </div>
      </form>
    )
  }
}


EditorForm.propTypes = {
    handleTitleChange: PropTypes.func.isRequired, 
    handleFNameChange: PropTypes.func.isRequired, 
    handleLNameChange: PropTypes.func.isRequired, 
    handleDateChange: PropTypes.func.isRequired,
    handleBodyChange: PropTypes.func.isRequired
};

  
export default EditorForm;