import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import data from '../mockData/itemData.json'
import { useParams } from 'react-router-dom'

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

    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        fetchDetailData(id).then(
            (res) => {
                console.log("Fetch data result: ");
                console.log(res);
                setDetailData(res);
            },
            (rej) => console.log("Hubo un error: " + rej)
        )
    }, [id]); //Refresh on id change

    return <>
        <ItemDetail data={detailData} />
    </>
}