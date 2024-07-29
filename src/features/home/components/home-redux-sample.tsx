import { ChangeEvent, memo, useCallback } from "react";

import {
  handleOpen,
  highIncrement,
  increment,
  nameValue,
} from "@/shared/store/counterSlices.";
import { RootState } from "@/shared/store/store";
import { useDispatch, useSelector } from "react-redux";

const HomeHero = () => {
  const state = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const handleHighIncrement = useCallback(() => {
    dispatch(highIncrement(10));
  }, [dispatch]);

  const toggleOpen = useCallback(() => {
    dispatch(handleOpen(!state.open));
  }, [dispatch, state.open]);

  const handleNameOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(nameValue(e.target.value));
  };

  return (
    <section>
      <div>{state.value}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleHighIncrement}>High Increment</button>
      {state.open ? <h1>Open</h1> : <h1>Close</h1>}
      <button onClick={toggleOpen}>Handle Open</button>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleNameOnChange}
      />
    </section>
  );
};

export default memo(HomeHero);
