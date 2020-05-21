const INITIAL_STORE = {
    searchList: [],
    query:"",
    loading:false,
    errors:{}
}


export default( store = INITIAL_STORE, action) => {
    switch(action.type) {
        default:
            return store
    }
}