import React, { Fragment, Component } from "react";
import AboutPage from "./pages/about";
import EducationPage from "./pages/education";
import WorkPage from "./pages/work";
import ContactPage from "./pages/contact";
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" exact component={AboutPage} />
          <Route path="/education" component={EducationPage} />
          <Route path="/work" component={WorkPage} />
          <Route path="/contact" component={ContactPage} />
        </Fragment>
      </Router>
    );
  }
}

export default App;