import styled from "styled-components";
import { FiShoppingBag } from "react-icons/fi";
import Link from "next/link";
import { NavStyles, NavItems } from "../styles/NavStyles";
import React from "react";

export const Nav = () => {
  return (
    <NavStyles>
      <Link href={"/"}>Simple</Link>
      <NavItems>
        <div>
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
    </NavStyles>
  );
};
