import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.action';
import { initialState } from './counter.state';

export const counterReducer = (
  state: { counter: number } | undefined,
  action: Action
) => {
  return __counterReducer(state, action);
};

const __counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  })
);
