import React from "react";
import "./header.css";

function Header(props) {
    return (
        <header className="mb-4 p-3 text-center">{props.message}</header>
    );
};

export default Header;