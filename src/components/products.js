import React from 'react';
import styled from 'styled-components';
import Card from './card';

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color:black;

`;

const Products = ({ products }) => (
  <ProductsContainer>
    {products.map((product) => (
      <Card key={product.id} product={product} />
    ))}
  </ProductsContainer>
);

export default Products;