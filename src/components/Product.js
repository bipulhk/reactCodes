import React from 'react';

const Product = () => {
  const products = [
    {id: 1, name:'mobile', price:200},
    {id: 2, name:'phone', price:300},
    {id: 3, name:'mouse', price:100},
    {id: 4, name:'laptop', price:1200},


  ];
  const ProdList = products.map((product) => <h1 key={product.id}>{product.name}: ${product.price}</h1>);
  return (
    <div>
      Products
      {ProdList}
    </div>
  );
};

export default Product;
