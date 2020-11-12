import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import data from '../mockData/itemData.json'
import { CircularProgress } from '@material-ui/core';
import ItemListSkeleton from './ItemListSkeleton';

//Fetch data promise
const getItems = () => {
    return new Promise((res, rej) => {
        setTimeout(() => res(data), 2000);
    });
}

function ItemListContainer({ title, onAdd }) {

    const [loading, setLoading] = useState(false);
    const [itemList, setItemList] = useState([])

    useEffect(() => {
        setLoading(true);
        getItems().then(result => {
            setItemList(result);
        }, err => {
            console.log(err);
        }).finally(result => {
            setLoading(false);
        });
    }, []);

    return (
        <>
            { loading ? <ItemListSkeleton/> : <ItemList title="Productos" itemDataList={itemList} onAdd={onAdd} />}
        </>
    );
}

export default ItemListContainer