import React from 'react';
import './App.css';
import PokemonPage from "./pages/PokemonPage"
import Login from './pages/Login'
import {Route} from 'react-router-dom'
import TeamPage from "./pages/TeamPage"
import OneTeamPage from "./pages/OneTeamPage"
import Home from "./pages/Home"
import {POKEMONPAGE, TEAMPAGE, TEAMSPAGE, LOGINPAGE, HOMEPAGE} from './routePaths'


class App extends React.Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          < Route exact path={HOMEPAGE} component={Home} />
          < Route exact path={POKEMONPAGE} component={PokemonPage} />
          < Route exact path={LOGINPAGE} component={Login} />
          < Route exact path={TEAMPAGE} component={OneTeamPage} />
          < Route exact path={TEAMSPAGE} component={TeamPage} />
        </header>
      </div>
    );
  }
}

export default App;
