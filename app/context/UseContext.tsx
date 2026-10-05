"use client";

import { createContext, ReactNode, useReducer } from "react";
import reducer, { Action, list, state } from "../reducer/itemReducer";

type Children = {
  children: ReactNode;
};

type ContextType = {
  state: state;
  dispatch: React.Dispatch<Action>;
};

export const UseContext = createContext<ContextType | null>(null);

export default function Context({ children }: Children) {
  const [state, dispatch] = useReducer(reducer, list);

  return (
    <UseContext.Provider value={{ state, dispatch }}>
      {children}
    </UseContext.Provider>
  );
}
