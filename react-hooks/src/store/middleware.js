import match from 'conditional-expression';
import { types } from './reducers';

export const applyMiddleware = dispatch => action =>
  match(action.type)
    .equals(types.CHANGE_BACKGROUND_COLOR).then(() => {
      dispatch({ type: types.CHANGE_BACKGROUND_COLOR, payload: action.payload })
    })
    .equals(types.SET_BACKGROUND_COLOR).then(() => {
      dispatch({ type: types.SET_BACKGROUND_COLOR, payload: action.payload })
    })
    .else(null);
  // || dispatch(action);
