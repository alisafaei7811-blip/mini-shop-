import { Product } from "../getData/Response";

export type Action =
  | {
      type: "add";
      payload: Product;
    }
  | {
      type: "delete";
      payload: number;
    };

type CartItem = Product & {
  quantity: number;
};

type state = {
  items: CartItem[];
};

export const list: state = {
  items: [],
};

export default function reducer(state: state, action: Action): state {
  switch (action.type) {
    case "add":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

    case "delete":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
}
