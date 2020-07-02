import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button} from 'react-bootstrap';
/*
const express = require('express');
const request = require('request');
const bp = require('body-parser');

const app = express();

var user = 'car';

app.use(bp());
*/


class App extends React.Component 
{
  constructor(props){
    super(props)
    this.state = {datalist: props.datalist};
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e)
  {
    console.log(e)
    const earr = e.target.id.split(' ')
    this.setState({datalist: earr})

    /*app.get('/api/demo', function (req, res) {



      ///JORDAN"S EXAMPLE
      var options = {
          method: 'GET',
          url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
          qs: { term: user },
          headers: {
              'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com',
              'x-rapidapi-key': 'f8df2a770emsh8d994358338f8a7p181a4ajsn17c2ef979adc',
              useQueryString: true
          }
      };
  
      request(options, function (error, response, body) {
          if (error) throw new Error(error);
          res.status(200).send(body)
      });
  
  })
  
  
  app.post('/api/sendstuff/:id', (req, res) => {
  
      console.log(req)
      if (req.params.id) {
          console.log(`request recieved, printing params now...`)
          console.log(req.params.id)
          res.status(200).send({ message: 'request recieved' });
      }
      else
          res.status(500).send({ message: 'error: was expecting a message body' })
  })
  */
  }


  render() {
    return (
      <div className="App"
          style=
          {{
            backgroundColor: 'lightblue'
          }}>
        <h1>Jordan's Urban Dictionary</h1>
        <p>We have all of the words.</p>
        <p>Please enter a word in the box below:</p>
        <h2><input type='text' id='userWord' placeholder='Type Here...'></input></h2>
        <Button variant='primary' onClick={this.handleClick}>Search</Button>{' '}
        <p>Definition (probably):</p>
      </div>
    );
  }
}
//const PORT = 9000
//app.listen(PORT, () => console.log(`server is up at port ${PORT}`))




export default App;