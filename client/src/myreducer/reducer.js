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
            };

        case "GET_WISH":
            return {
                ...state,
                mywishes : action.payload
            };

        case "ADD_WISH":
            return {
                ...state,
                mywishes : [ ...state.mywishes, action.payload ]
            };

        case "DELETE_WISH":
            const wishesAfterDelete = state.mywishes.filter(item => {
                return item._id !== action.payload;
            });

            return {
                ...state,
                mywishes : wishesAfterDelete
            };

        default: return state;
    }
    
}

export default reducer;