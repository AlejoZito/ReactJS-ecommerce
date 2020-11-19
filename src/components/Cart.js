import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import '@firebase/firestore';
import { Button, Grid, Paper } from '@material-ui/core';
import CartItemList from './CartItemList'
import { getFirestore } from '../firebase';
import { useCartContext } from '../context/cartContext';


export default function Cart() {

    const { itemsInCart, cartTotal } = useCartContext();

    async function createOrder() {
        const newOrder = {
            buyer: { name: 'Alejo', phone: '+1154645544', email: 'test@mail.com' },
            items: itemsInCart.map(item => ({ id: item.id, quantity: item.quantity, price: item.price })),
            total: cartTotal,
            date: firebase.firestore.FieldValue.serverTimestamp(),
        };

        const db = getFirestore();
        const batch = db.batch();

        //Get a firestore items
        const itemQueryByManyIds = await db.collection('items')
            .where(firebase.firestore.FieldPath.documentId(), 'in', itemsInCart.map(item=>item.id))
            .get();
        //const items = itemQueryByManyIds.docs.map(d => ({ id: d.id, ...d.data() }));

        const itemDoc = itemQueryByManyIds.docs[0];
        const res = await itemDoc.ref.update({ stock: itemDoc.data().stock - 1})

        // itemQueryByManyIds.docs.forEach(itemDoc => {
        //     itemDoc.update({ stock: itemDoc.data().stock - 1}) //toDo menos la cantidad del carrito
        // });

        const orders = db.collection('orders');

        //batch.update(doc1, { field: 'newField' })

        // try {
        //     const { id } = await orders.add(newOrder);
        //     console.log('Order created with id: ' + id);
        // } catch (error) {
        //     console.log('error creating order');
        //     console.log(error);
        // }
    }

    const styles = {
        cartListContainer: {
            minHeight: '60vh',
            padding: 20,
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }
    }

    return (
        <Grid
            container
            spacing={0}
            alignItems="center"
            justify="center">
            <Grid item xs={12} sm={8}>
                <Paper elevation={3} style={styles.cartListContainer}>
                    <CartItemList />
                </Paper>
                <Paper>
                    <Button onClick={createOrder}>Crear orden</Button>
                </Paper>
            </Grid>
        </Grid>
    );
}
