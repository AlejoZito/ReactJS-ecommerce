import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import data from '../mockData/itemData.json'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../firebase'

const fetchDetailData = function (id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(data.find((item) => item.id == id))
        }, 1000);
    });
}

export default function ItemDetailContainer() {

    //Routing params
    let { id } = useParams();

    const [loading, setLoading] = useState(false);
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        setLoading(true);

        const db = getFirestore();
        const itemCollection = db.collection("items");
        const item = itemCollection.doc(id)

        item.get().then((doc) => {
            if (!doc.exists) {
                console.log('no results');
            }
            console.log(doc.data())
            setDetailData({ id: doc.id, ...doc.data() });
        }).catch( err =>{
            console.log(err);
        }).finally(()=>{
            setLoading(false);
        })
    }, [id]); //Refresh on id change

    return <>
        <ItemDetail itemData={detailData} />
    </>
}