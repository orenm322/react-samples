import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'george.washington'
  };

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }
  
  render() {
    const style = {
      color: 'red'
    };
    
    return (
      <div className="App">

        <UserInput 
          changed={this.usernameChangedHandler}
          username={this.state.username}
        />

        <UserOutput 
          style={style}
          username={this.state.username}
        />

        <UserOutput 
          style={style}
          username={this.state.username}
        />

        <UserOutput 
          style={style}
          username='john.doe'
        />

      </div>
    );
  }
}

export default App;
