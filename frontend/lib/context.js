import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StatContext = ({ children }) => {
  //ADD our data for the state
  const [showCart, setShowCarts] = useState(false);
  const [cartItems, setCartItemes] = useState([]);
  const [qty, setQty] = useState(1);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalprice, setTotalPrice] = useState(0);

  //Increase product quantity
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  //Decrease product quantity
  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };
  //Add to carte itemes
  const onAdd = (product, quantity) => {
    const exist = cartItems.find((item) => item.slug == product.slug);
    //increase total quantities
    setTotalQuantities(
      (prevQuantity) => (totalQuantities = prevQuantity + quantity)
    );
    //Calcul Total price
    setTotalPrice((prevTotal) => prevTotal + product.price * totalQuantities);
    if (exist) {
      setCartItemes(
        cartItems.map((item) =>
          item.slug == product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItemes([...cartItems, { ...product, quantity: quantity }]);
    }
  };
  //Remove from cart itemes
  const removeCart = (product, quantity) => {
    const exist = cartItems.find((item) => item.slug == product.slug);
    //decrease total quantities
    setTotalQuantities((prevQuantity) => (totalQuantities = prevQuantity - 1));
    //Calcul Total price
    setTotalPrice((prevTotal) => prevTotal - product.price);

    if (exist.quantity == 1) {
      setCartItemes(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItemes(
        cartItems.map((item) =>
          item.slug == exist.slug
            ? { ...item, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        increaseQty,
        decreaseQty,
        showCart,
        setShowCarts,
        cartItems,
        onAdd,
        removeCart,
        totalQuantities,
        totalprice,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
