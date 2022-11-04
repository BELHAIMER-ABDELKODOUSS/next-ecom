import styled from "styled-components";
import { FiShoppingBag } from "react-icons/fi";
import Link from "next/link";
import { NavStyles, NavItems } from "../styles/NavStyles";
import Cart from "./Cart";
import React from "react";
import { useStateContext } from "../lib/context";
import User from "./User";
import { useUser } from "@auth0/nextjs-auth0";

export const Nav = () => {
  const { showCart, setShowCarts, totalQuantities } = useStateContext();
  const { user, error, isLoading } = useUser();
  console.log(user);
  return (
    <NavStyles>
      <Link href={"/"}>Simple</Link>
      <NavItems>
        <User />
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
