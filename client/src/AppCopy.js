//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

const Coder = (props) => {
  //no render() in functional component
  return (
    <div>
        <h1>Coder Name : {props.name}</h1>
        <h1>Coder Age : {props.age}</h1>
    </div>
  
  )
}

function MyCoder(){
  return (
    <h1>MyCoder</h1>
  )
}

class MyCoder1 extends React.Component {
  //state contains dynamic/class variables
  state = {
    title : "MyCoder1 title",
    status : "Programmer"
  }

  changeStatus(status){
      //do not mutate state directly, use setState()
      this.setState({
       // status === "Programmer" ? "Coder" : "Programmer"
       // status : "Coder"
          status
      })
  }

  changeTitle = (newTitle) =>{
    this.setState({
      title : newTitle
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.age}</h2>
        <h2>{this.props.children}</h2>
        <h3>{this.state.title}- {this.state.status}</h3>
        <button onClick={() => this.changeStatus("coder")}>Change State</button>
        {/* onClick direct called method should be arrow function */}
        <button onClick={this.changeTitle.bind(this, "new title")}>Change Title</button>
      </div>
    )
  }
}

class AppCopy extends React.Component {
  state = {
    title : "loading"
  }

  componentDidMount(){
    // will get called after render()
    console.log("App - componentDidMount()")
    //fetch
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(res2 => {
      console.log(res2)
      this.setState({
        title : res2.title
      })
    })
  }

  render(){
    console.log("App - render()")
    const arr = ['eat', 'sleep', 'code'];
    const data = arr.map((item, idx) => {
      return <li>
        <ul key={'mykey-'+idx}>{item}-{idx}</ul>
      </li>
    })
    return (
      <div className="App">
        <h1>Hello Everyone!!</h1>
        <h2>{Math.random()*100}</h2>
        <h3>{data}</h3>
        <h3>{this.state.title}</h3>
        {
          "Hello" + {data}
        }
        <Coder name="Amrit" age="30"/>
        <Coder name="Monty" age="31"/>
        <MyCoder />
        <MyCoder1 name="Honey" age="28">SE</MyCoder1>
        <MyCoder1 name="Buney" age="29">SK</MyCoder1>
      </div>
    );
  }
}

export default App;
