import { types } from './reducers';

export const useActions = (state, dispatch) => ({
  changeBackgroundColor: data => dispatch({ type: types.CHANGE_BACKGROUND_COLOR, payload: data }),
  setBackgroundColor: data => dispatch({ type: types.SET_BACKGROUND_COLOR, payload: data })
});