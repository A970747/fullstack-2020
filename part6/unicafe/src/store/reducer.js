const initialState = {
  good: 0,
  okay: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return {...state, good: state.good + 1};
    case 'OKAY':
      return {...state, okay: state.okay + 1};
    case 'BAD':
      return {...state, bad: state.bad + 1};
    case 'ZERO':
      return {good: 0, okay: 0, bad: 0};
    default: return state
  }
}

export default counterReducer

"528": {
  "52": {
    dayOfWeek: [1,2,3,4],
    depositAmount: [$,$,$],
  }
}