import React from 'react';
import './App.css';
import Top from './Components/Top'
import Main from './Components/Main'
import Character from './Components/Characters/Character'
import Movie from './Components/Movie/Movie'
import About from './Components/About/About'
import VarietyQuizTop from './Components/VarietyQuiz/VarietyQuizTop'
import VarietyQuizMain from './Components/VarietyQuiz/VarietyQuizMain'
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

const App:React.FC = () =>  {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path='/' component={ Top } />
          <Route exact path='/main' component={ Main } />
          <Route exact path='/character' component={ Character } />
          <Route exact path='/movie' component={ Movie } />
          <Route exact path='/about' component={ About } />
          <Route exact path='/varietyquiztop' component={ VarietyQuizTop } />
          <Route exact path='/varietyquizmain' component={ VarietyQuizMain } />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
