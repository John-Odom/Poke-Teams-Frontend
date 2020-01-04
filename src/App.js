import React from 'react';
import './App.css';
import PokemonPage from "./pages/PokemonPage"
import Login from './pages/Login'
import {Route} from 'react-router-dom'
import TeamPage from "./pages/TeamPage"
import OneTeamPage from "./pages/OneTeamPage"
import Home from "./pages/Home"


class App extends React.Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          < Route exact path="/" component={Home} />
          < Route exact path="/teams/new" component={PokemonPage} />
          < Route exact path="/login" component={Login} />
          < Route exact path="/teams" component={TeamPage} />
          < Route exact path="/teams/:id" component={OneTeamPage} />

        </header>
      </div>
    );
  }
}

export default App;
