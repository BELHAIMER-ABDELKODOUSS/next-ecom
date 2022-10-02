import React from "react";
import styled from "styled-components";
import { ProductStyles } from "../styles/ProductStyle";
export const Product = ({ product }) => {
  const { Title, image, price, description } = product.attributes;
  return (
    <ProductStyles>
      <div>
        <img src={image.data.attributes.formats.small.url} alt='image' />
      </div>
      <h2>{Title}</h2>
      {/* <p>{description}</p> */}
      <h3>{price}</h3>
    </ProductStyles>
  );
};
