import React, { Component } from 'react';

export class ExperimentList extends Component {
  render() {
    return (
        <ul>
            {this.props.records.map((record) => (<li key={record.id}>{record.fields.Name}</li>))}
        </ul>
    );
  }
}
