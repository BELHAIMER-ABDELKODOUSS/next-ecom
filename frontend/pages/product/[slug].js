import React from "react";
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";

export default function Product_Details() {
  const { query } = useRouter();

  const [result] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });
  const { data, fetching, error } = result;
  if (fetching) return <p>Loading ...</p>;
  if (error) return <p>Error ...</p>;

  console.log(data);
  return (
    <div>
      <img src='' alt='' />
      <div>
        <h3>Title</h3>
        <p>description</p>
      </div>
      <div>
        <span>quantity</span>
        <button>Plus</button>
        <p>0</p>
        <button>minus</button>
      </div>
      <button>Add To Cart</button>
    </div>
  );
}
