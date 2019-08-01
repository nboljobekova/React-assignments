import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from '../img/logo.png'


class Header extends Component {

    render(){
        return (
            <div className="wrapper">
                <div className="header">
                    <div className="container">
                        <div className="header__content">
                            <img src={logo} alt="logo" className="header__logo" />
                            <div className="header__navigation">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/about">About us</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner" />
            </div>
        )
    }
}

export default Header;