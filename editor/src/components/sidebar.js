import React from "react";
import PropTypes from "prop-types";
import "./Sidebar.css"


class Sidebar extends React.Component{ 
    render(){
        return(
             <div className="Sidebar">
                <div className="Jumbotron">
                    <h1>Редактор статьи</h1>
                    <p className="Jumbo-p">Это пример редактора, который Вам предстоит реализовать...</p>
                    <hr />
                    <p>Удачного повторения! }><span role="img" aria-label="emojis">🤘🔥</span></p>
                </div>
                <form>
                    {this.props.children}
                </form>
            </div>
        ) 
    }
}

Sidebar.propTypes = {
    children: PropTypes.element.isRequired
}
  

export default Sidebar