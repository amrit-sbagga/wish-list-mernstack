const initialState = {
    text : '',
    resp : '',
    mywishes : [{_id : 1, wish:"loading"}]
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case "UPDATE_INPUT":
            return {
                ...state,
                text : action.payload
            }

        case "GET_WISH":
            return {
                ...state,
                mywishes : action.payload
            }
    }
    
    return state;
}

export default reducer;