import React, { Component } from 'react';
import './App.css';
import FeedbackForm from './components/FeedbackForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tiny Feedback</h2>
        </div>
        <FeedbackForm/>
      </div>
    );
  }
}

export default App;
