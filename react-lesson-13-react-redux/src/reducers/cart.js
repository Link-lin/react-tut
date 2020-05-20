import actionType from "../actions/actionType";
const initState = [
  {
    id: 1,
    title: "Apple",
    price: 43,
    amount: 10,
  },
  {
    id: 2,
    title: "Orange",
    price: 3,
    amount: 13,
  },
];

export default (state = initState, action) => {
  switch (action.type) {
    case actionType.ADD_CART_AMOUNT:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          item.amount++;
        }
        return item;
      });
    case actionType.MINUS_CART_AMOUNT:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          item.amount--;
        }
        return item;
      });
    default:
      return state;
  }
};
