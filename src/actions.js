export function incCounter() {
  return {
    type: "ADD_CNT",
    payload: 1
  };
}

export function lastUser(name) {
  return {
    type: "LAST_USER",
    payload: name
  };
}
