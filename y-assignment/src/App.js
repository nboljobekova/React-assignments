import React, {Component, Fragment} from 'react';
import { Provider } from 'react-redux';
import './styles/style.scss'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store'


class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
