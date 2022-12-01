import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconBotton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

const Product = ({ product }) => {
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia className={classes.media} img="" title={product.name} />
        <CardContent>
          <div className={classes.CardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {product.price}
            </Typography>
          </div>

          <Typography variant="h2" color="textSecondary">
            {product.description}
          </Typography>

          <CardActions disableSpacing className={classes.CardActions}>
            <IconBotton aria-label="Add to Cart">
              <AddShoppingCart />
            </IconBotton>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default Product;
