import React from "react";
import styled from "styled-components";
import { ProductStyles } from "../styles/ProductStyle";
import Link from "next/link";

export const Product = ({ product }) => {
  const { Title, image, price, description, slug } = product.attributes;
  return (
    <ProductStyles>
      <Link href={`/product/${slug}`}>
        <div>
          <img src={image.data.attributes.formats.small.url} alt='image' />
        </div>
      </Link>
      <h2>{Title}</h2>
      <p>{description}</p>
      <h3>{price}</h3>
    </ProductStyles>
  );
};
