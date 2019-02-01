import React from "react";
import "./navbar.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
            {/* <img alt="avocado" src="./avocado.png" /> */}

            <div className="navbar-brand">Fruity Clicky</div>
            <div className="mx-auto" id="score">Score: {props.score}</div>
        </nav>
    );
};

export default Navbar;