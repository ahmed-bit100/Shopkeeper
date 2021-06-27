import React from 'react';

const ProductCard = ({product}) => {
  return (
    <div>
      <h3> {product.title} </h3>
      <h4> {product.description} </h4>
      <h5> {product.price} </h5>
      {product.quantity > 0 ? (
        <h5>Currently available ({product.quantity} in stock) </h5>
      ) : (
        <h5>Currently out of stock </h5>
      )}
    </div>
  );
};

export default ProductCard;
