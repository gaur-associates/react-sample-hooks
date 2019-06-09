export function reducerCnt(state = 0, action) {
  if (action.type === "ADD_CNT") {
    return state + action.payload;
  }
  return state;
}
