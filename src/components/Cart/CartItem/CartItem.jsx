import React from 'react';

import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@material-ui/core';

import useStyles from './styles'

const CartItem = ({item, handleRemoveFromCart, handleUpdateCartQty}) => {

    const classes = useStyles();

    return (
      <Card className={classes.root}>
        <CardMedia
          image={item.media.source}
          alt={item.name}
          className={classes.media}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant='h4' className={classes.name}>{item.name}</Typography>
          <Typography variant='h5' className={classes.price}>
            {item.line_total.formatted_with_symbol}
          </Typography>
        </CardContent>
        <CardActions className={classes.cartActions}>
          <div className={classes.buttons}>
            <button
              type='button'
              size='small'
              onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
            >
              -
            </button>
            <Typography>{item.quantity}</Typography>
            <button
              type='button'
              size='small'
              onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>
          <Button variant='contained' type='button' color='secondary' onClick={() => handleRemoveFromCart(item.id)}>
            Remove
          </Button>
        </CardActions>
      </Card>
    );
}

export default CartItem
