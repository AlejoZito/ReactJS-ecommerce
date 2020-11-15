import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import data from '../mockData/itemData.json'
import { useCartContext } from '../context/cartContext';
import { IconButton, Button, Box, Grid, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom';
import CartItemList from './CartItemList'


export default function Cart() {

    const styles ={
        cartListContainer:{
            minHeight: '60vh',
            padding: 20,
            marginTop: 20,
            display:'flex',
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
            </Grid>
        </Grid>
    );
}
