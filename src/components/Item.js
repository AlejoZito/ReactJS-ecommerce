import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function Item({ data, onAdd, cols, ...other }) {

    const classes = useStyles();
    return (
         <GridListTile key={data.id} cols={cols || 1} {...other}>
            <img src={data.img} alt={data.title} />
            <GridListTileBar
                title={data.title}
                subtitle={<span>$: {data.price}</span>}
                actionIcon={
                    <IconButton
                        aria-label={`info about ${data.title}`}
                        className={classes.icon}
                        onClick={onAdd}>
                        <AddShoppingCartIcon />
                        <Link to={`/detail/${data.id}`}>Un link</Link>
                    </IconButton>
                }
            />
        </GridListTile>
    );
}