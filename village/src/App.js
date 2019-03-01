import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfBar from './components/SmurfBar';
import SmurfUpDel from './components/SmurfUpDel';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){
    console.log("Gettin' smurfed");

    axios.get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res)
        this.setState({ smurfs: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

deleteSmurf = () => {

}

updateSmurf = () => {

}

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route path="/" component={SmurfBar} />
        <Route path="/smurf-form" render={props => (
          <SmurfForm 
            {...props} 
            smurfs={this.state.smurfs}
          />
        )}
        />  
        <Route exact path="/" render={props => (
          <Smurfs 
            {...props}
            smurfs={this.state.smurfs} 
          />
        )}
        />
        <Route path="/smurf/:id" render={props => (
          <SmurfUpDel
            {...props}
            smurfs={this.state.smurfs}
            deleteSmurf={this.deleteSmurf}
            updateSmurf={this.updateSmurf}
          />
        )}
        />
      </div>
    );
  }
}

export default App;
