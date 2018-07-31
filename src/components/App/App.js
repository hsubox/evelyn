import React, { Component } from 'react';
import logo from './../../logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {fetchExperiments} from 'data/experiments/actions.js';
import {experimentsSelector} from 'data/experiments/selectors.js';
import { ExperimentList } from '../ExperimentList/ExperimentList';

class App extends Component {
  componentDidMount() {
    this.props.fetchExperiments();
  }

  render() {
    return (
      <div className="App">
        {
          this.props.experiments.err ?
          (
            <span>Error: {this.props.experiments.err.message}</span>
          ) :
          this.props.experiments.fetching ?
            (<span>Loading</span>) :
            (
              <ExperimentList
                records={this.props.experiments.records}
              />
            )
        }
      </div>
    );
  }
}

const mapStateToProps = experimentsSelector;
const mapDispatchToProps = {
  fetchExperiments
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);