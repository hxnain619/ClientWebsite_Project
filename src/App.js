import React, { Component } from 'react';
import './App.css';

// AppRouter
import AppRouter from './AppRouter/appRouter';

class App extends Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}

export default App;