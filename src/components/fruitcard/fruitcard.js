import React from "react";
import "./fruitcard.css";

function FruitCard(props) {
    return (
        <div className="fruitCard col-3 text-center">
            <img onClick={props.onClick} alt={props.name} src={props.image} />
            <div className="img-text">{props.name}</div>
        </div>
    );
};

export default FruitCard;