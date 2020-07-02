import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {datalist: props.datalist};
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    console.log(e)
    const earr = e.target.id.split(' ')
    this.setState({datalist: earr})
  }


  render() {
    return (
      <div className="App">
        <h1>Jordan's Urban Dictionary</h1>
        <p>We have all of the words.</p>
        <h2>
          <input type="button" id='the only button' onClick={this.handleClick}/>
        </h2>
      <ul>
        {this.state.datalist.map(element =>{
            return <li> {element} </li>
          })}
      </ul>
      </div>
    );
  }
}



export default App;