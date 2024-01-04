import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => {
    return (
        <div className="container container--fluid">
            <div className="row justify-content-center">
                <div className="com-sm-12 col-md-11 col-12">
                    <div className="row justify-content-center">
                        <div className="product-aside d-flex col-md-3 col-12">
                            <div className="aside">
                                <div className="aside-content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Labore officiis provident laborum beatae quae doloremque 
                                    numquam minima ullam voluptatibus at porro rem nostrum, 
                                    totam distinctio quis veniam dolor reprehenderit possimus 
                                    autem assumenda ex optio ipsa. Nulla fugiat, asperiores 
                                    quibusdam nam velit tempore consectetur iste similique 
                                    dolorem, esse, atque ex accusantium?
                                </div>
                            </div>
                        </div>
                        <div className="product-column col-md-9 col-12">
                                <div className="row">
                                    {items.map((item) => {
                                        return (
                                            <div className="col-sm-4 col-md-4 col-12 product-card">
                                                <Item item={item} key={item.id}/>
                                            </div>
                                        )
                                    })}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemList