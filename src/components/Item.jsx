import React from "react";
import { Link } from "react-router-dom";

const Item = ({ items }) => (
    <div className="product-container">
        <div className="img-responsive">
            <img src={items.img} alt="" />
        </div>
        <div className="item-keys">
            <span className="product-title">{items.title}</span>
            <span className="product-price">USD {items.price}</span>
        </div>
        <Link to={'/item/' + items.id}></Link>
    </div>
);

export default Item