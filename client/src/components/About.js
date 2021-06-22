//import logo from './logo.svg';
import React from 'react';

class About extends React.Component {

  render(){
    console.log("About props = ", this.props);
    // setTimeout(()=>{
    //   //navigate to home page
    //   this.props.history.push("/");
    // }, 3000)
    return (
      <div>
         <h3>This is from About component</h3>
         <button onClick={()=>{
              this.props.history.push("/")
           }}>Go to Home</button>
      </div>
    );
  }
}

export default About;
