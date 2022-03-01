import React from "react";
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Nav activeKey="/main" className="header d-flex justify-content-between my-5">
            <div>
                <Link to="main">Транзакции</Link>
                <Link to="table" className="ms-5">Таблица</Link>
            </div>
            <Link to="/" className="ms-5">Выйти</Link>
        </Nav>
    )
}

export default Header;