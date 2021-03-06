import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const hideCart = () => ({
  type: CartActionTypes.HIDE_CART
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const removeSingleItem = item => ({
  type: CartActionTypes.REMOVE_SINGLE_ITEM,
  payload: item
});
