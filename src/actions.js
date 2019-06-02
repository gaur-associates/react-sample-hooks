export function incCounter() {
  return {
    type: "ADD_CNT",
    payload: 1
  };
}

export function nonThunkUserName(name) {
  return {
    type: "LAST_USER",
    payload: name
  };
}

export function userName(name) {
  return (dispatch, getState) => {
    console.log(getState());

    fetch("https://www.google.com", {
      mode: "no-cors"
    }).then(dispatch(nonThunkUserName(name)));
  };
}
