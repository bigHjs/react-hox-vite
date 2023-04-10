import { useState } from "react";
import { createStore, createGlobalStore } from "hox";

function useCounter() {
  const [count, setCount] = useState(0);
  const decrement = () => setCount(count - 1);
  const increment = () => {
    console.log(11111111);
    setCount(count + 1);
  };
  return {
    count,
    decrement,
    increment,
  };
}
export const [useCounterStore, getCountStore] = createGlobalStore(useCounter);
