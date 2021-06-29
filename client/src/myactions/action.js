export const handleInputAction = (input) => {
    return {
        type : 'UPDATE_INPUT',
        payload : input
    }
}

export const fetchWishAction = () => {
    //for async operation return function
    return (dispatch) => {
        fetch('/data').then(res => res.json())
            .then(res2 => {
                console.log(res2)
            if(res2.length === 0){
                console.log("here data is 0");
                
                // setTimeout(() => {
                //     this.setState({resp : "No data available in db, add few using Add button."})
                //     //this.setState({mywishes : []})
                // }, 3000)

                // this.setState({mywishes : []})
                dispatch({type : "GET_WISH", payload: []})
            
            }else{
               // this.setState({mywishes : res2})
               dispatch({type : "GET_WISH", payload: res2})
            }
        })
    }
}