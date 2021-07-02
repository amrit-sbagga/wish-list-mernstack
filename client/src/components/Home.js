//import logo from './logo.svg';
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  handleInputAction, 
  fetchWishAction,
  handleSubmitAction,
  handleDeleteAction
} from '../myactions/action';

class Home extends React.Component {

  state = {
   // text : '',
    resp : '',
   // mywishes : [{_id : 1, wish:"loading"}]
   users : [
      { "id" : 20, "name" : "monty" },
      { "id" : 21, "name" : "amrit" }
    ]
  }

  componentDidMount(){
    console.log("Home - componentDidMount() props=", this.props);
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


  render(){

    console.log("Home - render()");

    const wisheslist = this.props.mywishes.map(item => {
        return <a className="collection-item"
           key={item._id}
           onClick={()=>this.props.handleDelete(item._id)}
           >{item.wish}</a>
    });

    const myusers = this.state.users.map(item => {
      return <Link to={"/" + item.id}><h3>{item.name}</h3></Link>
    });

    return (
      <div>
        <form onSubmit={(e)=>this.props.handleSubmit(e)}>
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
        
        <h4>============================</h4>
        
        <div>
          {myusers}
        </div>

      </div>
    );
  }
}

//reducer state is used as props in this component
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
    fetchWish : () => {dispatch(fetchWishAction())},
    handleSubmit : (e) => {dispatch(handleSubmitAction(e))},
    handleDelete : (id) => { dispatch(handleDeleteAction(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
