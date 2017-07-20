import { combineReducers } from 'redux'

export function reducerCnt(state = 0, action)
{
    if (action.type === "ADD_CNT")
    {
        return  state + action.payload;
    }
    return state;
}

export function userName(state = "", action)
{
    if (action.type === "LAST_USER")
    {
        return   action.payload;
    }
    return state;
}

const allReducers = combineReducers({
  cnt : reducerCnt,
  user : userName
});
export default allReducers