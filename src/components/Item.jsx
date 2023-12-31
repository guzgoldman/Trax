import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => (
    <div>
        <div className="img-responsive">
            <img src={item.img} alt="" />
        </div>
        <span className="product-title">{item.name}</span>
        <span className="product-price">USD {item.price}</span>
        <Link to={'/item/' + item.id}></Link>
    </div>
);

export default Item