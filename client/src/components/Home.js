//import logo from './logo.svg';
import React from 'react';
import {connect} from 'react-redux';
import {handleInputAction, fetchWishAction} from '../myactions/action';

class Home extends React.Component {

  state = {
    text : '',
    resp : '',
    mywishes : [{_id : 1, wish:"loading"}]
  }

  componentDidMount(){
    console.log("Home - componentDidMount()");
    //this.loadWishesData()
    this.props.fetchWish();
  }

  loadWishesData(){
    //loading data from server <-> db
    // fetch('/data').then(res => res.json())
    // .then(res2 => {
    //   console.log(res2)
    //   if(res2.length === 0){
    //     console.log("here data is 0");
    //     setTimeout(() => {
    //       this.setState({resp : "No data available in db, add few using Add button."})
    //       //this.setState({mywishes : []})
    //     }, 3000)
    //     this.setState({mywishes : []})  
    //   }else{
    //     this.setState({mywishes : res2})
    //   }  
   // });
  }

  handleSubmit(e){
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
           this.setState({resp : "Wish added successfully!!"})
           
           //initial array copy using spread operator
           this.setState({
             mywishes : [...this.state.mywishes, res2]
           })
           
           setTimeout(() => {
            this.setState({resp : ""})
           }, 3000)
        }
      });

  }

  handleDelete(itemId){
    console.log("delete for this itemId = ", itemId);
    fetch('/remove/' + itemId, {
      method : "delete"
    })//.then(res => res.json())
    .then(res2 => {
      console.log("delete res2 = ", res2);

      const wishesAfterDelete = this.state.mywishes.filter(item => {
        return item._id !== itemId;
      });
      
      this.setState({mywishes : wishesAfterDelete})

    }).then(res => {
      //console.log("load wishes again after delete..!!");
      //this.loadWishesData()
    })
  }

  render(){

    console.log("Home - render()");

    const wisheslist = this.props.mywishes.map(item => {
        return <a className="collection-item"
           key={item._id}
           onClick={()=>this.handleDelete(item._id)}
           >{item.wish}</a>
    });

    return (
      <div>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input type="text" 
                 name="item"
                 value={this.props.text} 
                 onChange={(e)=>{
                   //console.log(e.target.value);
                  //  this.setState({text : e.target.value})
                  // now instead of state, communication will be through central store
                  this.props.handleInput(e.target.value)
                 }}/>
                 <button type="submit" className="waves-effect waves-light btn">Add</button>
        </form>
        <h4>{this.state.resp}</h4>
        <div className="collection">
          { wisheslist }
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text : state.text,
    resp : state.resp,
    mywishes : state.mywishes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInput : (input) => {dispatch(handleInputAction(input))},
    fetchWish : () => {dispatch(fetchWishAction())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
