import React from "react";
// eslint-disable-next-line
import PropTypes from "prop-types";
import "./Panels.css"


class Panels extends React.Component{ 
    render(props){
    return (
      <div className="Panels">
        <div className="Panels-left">
          {this.props.left}
        </div>
        <div className="Panels-right">
          {this.props.right}
        </div>
      </div>
    )
    }
}

export default Panels