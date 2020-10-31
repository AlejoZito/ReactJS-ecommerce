import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function Item({ data, onAdd, cols, ...other }) {
    const [itemData, setItemData] = useState({});

    useEffect(() => {
        console.log("Init item");
        setItemData(data);
    }, []);

    const classes = useStyles();
    return (
         <GridListTile key={itemData.id} cols={cols || 1} {...other}>
            <img src={itemData.img} alt={itemData.title} />
            <GridListTileBar
                title={itemData.title}
                subtitle={<span>$: {itemData.price}</span>}
                actionIcon={
                    <IconButton
                        aria-label={`info about ${itemData.title}`}
                        className={classes.icon}
                        onClick={onAdd}>
                        <AddShoppingCartIcon />
                    </IconButton>
                }
            />
        </GridListTile>
    );
}