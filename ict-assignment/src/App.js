import React, { Component } from 'react';
import './App.css';
import { Sidebar, Main } from "./components"
import { connect } from "react-redux";
import { getData } from "./actions/DataActions";


class App extends Component {

  componentDidMount() {
    this.props.onGetData();
    console.log(this.props.data);
  }

  render() {
    return (
      <div className="d-flex flex-row justify-content-between">
        <Sidebar state={this.state} />
        <Main state={this.state} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = dispatch => ({
  onGetData: () => dispatch(getData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
