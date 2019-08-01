import React, {Component, Fragment} from 'react';
import './styles/style.scss'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render(){
    return (
      <Router>
        <Fragment>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
