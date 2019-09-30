import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonPage from "./pages/PokemonPage"

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PokemonPage />
        </header>
      </div>
    );
  }
}

export default App;
