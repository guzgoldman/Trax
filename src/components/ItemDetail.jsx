import { useState } from 'react'
import { useCart } from './CartProvider'
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {
    if (!item) {
        return (
            <div className="cart-empty">
                <div class="spinner-border text-secondary" style={{width:'6rem', height:'6rem'}} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="img-box">
                        <img src={item.img} alt="" className="product-img" />
                    </div>
                </div>
                <div className="product-info col-md-6">
                    <h1>{item.title}</h1>
                    {/* <p className="product-description">{item.desc}</p> */}
                    <div className="product-keys">
                        <span className="price">USD {item.price}</span>
                        <ItemCount item={item} stock={item.stock} /> {/* Aquí es donde pasas las props */}
                    </div>
                    <div className='units-left'>
                        <div className='counter'>
                            {item.stock}
                        </div>
                        <span>units left</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail
