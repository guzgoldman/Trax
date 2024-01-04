import React from 'react'
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { db } from '../firebase'
import { collection, getDoc, doc } from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams()
    useEffect(() => {
        const itemsCollection = collection(db, "items")
        const ref = doc(itemsCollection, id)
        const fetch = getDoc(ref)
        fetch
            .then((res) => {
                const item = res.data()
                setItem(item)
                setLoading(false)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return (
            <div className="cart-empty">
                <div class="spinner-border text-secondary" style={{width:'6rem', height:'6rem'}} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    };

    if (error) {
        return (
            <p>Error: {error.message}</p>
        )
    };

    return (
        <ItemDetail item={item} />
    )

}

export default ItemDetailContainer