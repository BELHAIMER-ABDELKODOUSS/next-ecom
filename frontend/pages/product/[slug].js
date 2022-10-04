import React from "react";
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
} from "../../styles/ProductDetails";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

export default function Product_Details() {
  const { query } = useRouter();

  const [result] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });
  const { data, fetching, error } = result;
  if (fetching) return <p>Loading ...</p>;
  if (error) return <p>Error ...</p>;
  console.log(data.products.data[0].attributes);
  const product = data.products.data[0].attributes;
  return (
    <DetailsStyle>
      <img
        src={product.image.data.attributes.formats.medium.url}
        alt={product.Title}
      />
      <ProductInfo>
        <h3>{product.Title}</h3>
        <p>{product.description}</p>
        <Quantity>
          <span>Quantity</span>
          <button>
            <AiFillPlusCircle />
          </button>
          <p>0</p>
          <button>
            <AiFillMinusCircle />
          </button>
        </Quantity>
        <Buy>Add To Cart</Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}
