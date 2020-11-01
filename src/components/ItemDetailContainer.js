import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import data from '../mockData/itemData.json'

const fetchDetailData = function(id){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(data.find((item) => item.id == id))
        }, 1500);
    });
}

export default function ItemDetailContainer({itemId}){

    const [detailData, setDetailData] = useState({})

    useEffect(()=>{
        fetchDetailData(itemId).then(
            (res) => {                
                console.log("Fetch data result: ");
                console.log(res);
                setDetailData(res);
            },
            (rej) => console.log("Hubo un error: " + rej)
        )
    }, []);

    return <ItemDetail data={detailData} />
}