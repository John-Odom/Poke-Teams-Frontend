import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonPage from "./pages/PokemonPage"
import Login from './pages/Login'
import {Route} from 'react-router-dom'
import TeamPage from "./pages/TeamPage"

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          < Route exact path="/teams/new" component={PokemonPage} />
          < Route exact path="/login" component={Login} />
          < Route exact path="/teams" component={TeamPage} />
        </header>
      </div>
    );
  }
}

export default App;
