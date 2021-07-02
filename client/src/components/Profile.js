import React from 'react';

class Profile extends React.Component {

  render(){
  console.log("profile props = ", this.props);
    return (
      <div>
         <h3>This is from Profile component</h3>
         <h4>Your profile id : {this.props.match.params.profile_id}</h4>
         <br/>
         <button onClick={()=>{
              this.props.history.push("/")
           }}>Go to Home</button>
      </div>
    );
  }
}

export default Profile;
