import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => {
    return (
        <div className="container container--fluid">
            <div className="row justify-content-center">
                    {items.map((items) => {
                        return (
                            <div className="col-md-12 col-lg-3 col-12 product-card">
                                <Item items={items} key={items.id}/>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default ItemList