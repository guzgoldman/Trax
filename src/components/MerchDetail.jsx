import React from 'react'
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { db } from '../firebase'
import { collection, getDoc, doc } from 'firebase/firestore'


const MerchDetail = () => {
    const [item, setItem] = useState({})
    const { id } = useParams()
    useEffect(() => {
        const productsCollection = collection(db, "merch")
        const ref = doc(productsCollection, id)
        const fetch = getDoc(ref)
        fetch
            .then((res) => {
                const item = res.data()
                setItem(item)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])
    return (
        <ItemDetail item={item} />
    )

}

export default MerchDetail