import type { AppDispatch, RootState } from "../stores/store";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "../stores/counter/counterSlice";
import { useState } from "react";

function Counter() {
  const [amountToAdd, setAmountToAdd] = useState<number>(0);
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementAsync(5))}>+ async</button>
      <div>
        <input
          value={amountToAdd}
          onChange={(e) => setAmountToAdd(+e.target.value)}
        />
        {/* Passing multiple payload to action */}
        <button
          onClick={() =>
            dispatch(
              incrementByAmount({ amount: amountToAdd, isPositive: true })
            )
          }
        >
          + {amountToAdd}
        </button>
        {/* if passing one payload only you can do this */}
        {/* <button onClick={() => dispatch(5)}>add 5</button>*/}
      </div>
    </div>
  );
}

export default Counter;
