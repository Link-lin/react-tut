import actionType from "./actionType";

export const increment = (id) => {
  return {
    type: actionType.ADD_CART_AMOUNT,
    payload: {
      id,
    },
  };
};

export const decrement = (id) => {
  return {
    type: actionType.MINUS_CART_AMOUNT,
    payload: {
      id,
    },
  };
};
