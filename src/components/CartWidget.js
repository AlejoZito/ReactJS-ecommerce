import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Link from '@material-ui/core/Link';
import Badge from '@material-ui/core/Badge'


const badgeStyles = {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "red",
    position: "relative"
}

function CartWidget({itemCount}) {
    return (
        <Link variant="button" style={{ marginLeft:"auto" }} href="#">
            <Badge badgeContent={itemCount} color="secondary">
                <ShoppingCartIcon color="primary" />
            </Badge>
        </Link>
    )
}

export default CartWidget