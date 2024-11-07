"use client";

import { getCookie, hasCookie, setCookie } from "cookies-next";

export const getShoppingCart = (): { [id: string]: number } => {
  if (hasCookie("cart")) {
    return JSON.parse(getCookie("cart") as string);
  } else {
    return {};
  }
};

export const addProductToCart = (id: string) => {
  const cart = getShoppingCart();
  if (cart[id]) {
    cart[id] += 1;
  } else {
    cart[id] = 1;
  }
  setCookie("cart", JSON.stringify(cart));
};

export const removeProductFromCart = (id: string) => {
  const cart = getShoppingCart();
  if (cart[id]) {
    delete cart[id];
    setCookie("cart", JSON.stringify(cart));
  }
};
