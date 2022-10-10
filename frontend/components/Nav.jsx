import styled from "styled-components";
import { FiShoppingBag } from "react-icons/fi";
import Link from "next/link";
import { NavStyles, NavItems } from "../styles/NavStyles";
import Cart from "./Cart";
import React from "react";
import { useStateContext } from "../lib/context";

export const Nav = () => {
  const { showCart, setShowCarts, totalQuantities } = useStateContext();
  return (
    <NavStyles>
      <Link href={"/"}>Simple</Link>
      <NavItems>
        <div onClick={() => setShowCarts(true)}>
          <FiShoppingBag />
          <h3>Cart</h3>
          {totalQuantities >= 1 && <span>{totalQuantities}</span>}
        </div>
      </NavItems>
      {showCart && <Cart />}
    </NavStyles>
  );
};
