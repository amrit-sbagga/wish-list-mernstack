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

export const handleSubmitAction = (e) => {
    return (dispatch) => {
        e.preventDefault();
        // const url = "http://localhost:5000/sent-data";
   
         var data = new URLSearchParams();
         //console.log(e.target);
         for(const pair of new FormData(e.target)){
           //console.log("pair = ", pair);
           data.append(pair[0], pair[1])
         }
   
         fetch('/sent', {
           method : "post",
           body : data
         }).then(res => res.json())
         .then(res2 => {
           console.log(res2)
           if(res2._id){
              //this.setState({resp : "Wish added successfully!!"})
              
              //initial array copy using spread operator
            //   this.setState({
            //     mywishes : [...this.state.mywishes, res2]
            //   })
              
            //   setTimeout(() => {
            //    this.setState({resp : ""})
            //   }, 3000)

            dispatch({type:"ADD_WISH", payload:res2})
           }
         });
   
    }
}

export const handleDeleteAction = (itemId) => {
    return (dispatch) => {
        console.log("delete for this itemId = ", itemId);

        fetch('/remove/' + itemId, {
          method : "delete"
        })//.then(res => res.json())
        .then(res2 => {
          console.log("delete res2 = ", res2);
    
        //   const wishesAfterDelete = this.state.mywishes.filter(item => {
        //     return item._id !== itemId;
        //   });
        //   this.setState({mywishes : wishesAfterDelete})

          dispatch({type:"DELETE_WISH", payload: itemId})
    
        })
        //.then(res => {
          //console.log("load wishes again after delete..!!");
          //this.loadWishesData()
        //})
    }
}