//import logo from './logo.svg';
import React from 'react';

class Home extends React.Component {

  state = {
    text : '',
    resp : '',
    mywishes : [{_id : 1, wish:"loading"}]
  }

  componentDidMount(){
    fetch('/data').then(res => res.json())
    .then(res2 => {
       // console.log(res2)
      this.setState({mywishes : res2})
    });

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

  render(){

    const wisheslist = this.state.mywishes.map(item => {
        return <a className="collection-item" key={item._id}>{item.wish}</a>
    });

    return (
      <div>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input type="text" 
                 name="item"
                 value={this.state.text} 
                 onChange={(e)=>{
                   //console.log(e.target.value);
                   this.setState({text : e.target.value})
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

export default Home;
