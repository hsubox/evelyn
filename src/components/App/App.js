import React, { Component } from 'react';
import logo from './../../logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {fetchExperiments} from 'data/experiments/actions.js';
import {fetchPlanning} from 'data/planning/actions.js';
import {experimentsSelector} from 'data/experiments/selectors.js';
import {planningSelector} from 'data/planning/selectors.js';
import { ExperimentList } from '../ExperimentList/ExperimentList';

class App extends Component {
  componentDidMount() {
    this.props.fetchExperiments();
    this.props.fetchPlanning();
  }

  render() {
    console.log(this.props);
    const err = this.props.experiments.err || this.props.planning.err;
    const fetching = this.props.experiments.fetching || this.props.planning.fetching;

    return (
      <div className="App">
        {
          err ?
          (
            <span>Error: {err.message}</span>
          ) :
          fetching ?
            (<span>Loading</span>) :
            (
              <ExperimentList
                experiments={this.props.experiments.records}
                planning={this.props.planning.records}
              />
            )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...experimentsSelector(state),
    ...planningSelector(state)
  };
};
const mapDispatchToProps = {
  fetchExperiments,
  fetchPlanning
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);