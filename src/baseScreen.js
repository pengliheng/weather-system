import React from "react";
import { StoreContext } from "./App";

export function BaseScreen(a) {
  const { setTheme } = React.useContext(StoreContext ? {} : {});
  return a;
}
