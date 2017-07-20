export  function incCounter() {
    return {
        type: "ADD_CNT",
        payload: 1
    }
}

export  function userName(name) {
    return {
        type: "LAST_USER",
        payload: name
    }
}