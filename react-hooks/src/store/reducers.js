import match from 'conditional-expression';

const initialState = {
  backgroundColor: 'blue',
  toggleColors: null,
  toggle: () => { }
};

const types = {
  CHANGE_BACKGROUND_COLOR: 'CHANGE_BACKGROUND_COLOR',
  SET_BACKGROUND_COLOR: 'SET_BACKGROUND_COLOR'
};  // types could be in a separate file

const reducer = (state = initialState, action) =>
  match(action.type)
    .equals(types.CHANGE_BACKGROUND_COLOR).then({ ...state, backgroundColor: cycleColors(action.payload) })
    .equals(types.SET_BACKGROUND_COLOR).then({ ...state, backgroundColor: initialState.backgroundColor })
    .else(state)

const cycleColors = (stateColor) => {
  const colors = ['blue', 'red', 'green', 'yellow']
  const colorLen = colors.length;

  let index = 0;
  colors.forEach(function (color, ind) {
    if (color === stateColor) {
      index = ind + 1;
    }
  })

  if (index === colorLen) {
    index = 0;
  }
  sessionStorage.setItem('bg_color', colors[index])
  return colors[index]
}

export { initialState, types, reducer };