import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonPage from "./pages/PokemonPage"
import Login from './pages/Login'
import {Route} from 'react-router-dom'

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          < Route exact path="/teams/new" component={PokemonPage} />
          < Route exact path="/login" component={Login} />
        </header>
      </div>
    );
  }
}

export default App;
