import React, { Component } from "react";

export class ExperimentList extends Component {
  render() {
    return (
      <ul>
        {Object.values(this.props.experiments).map(experiment => (
          <ExperimentListRow
            experiment={experiment}
            planning={
              experiment.fields.Planning &&
              experiment.fields.Planning.map(
                id => this.props.planning[id].fields.Status
              )
            }
            key={experiment.id}
          />
        ))}
      </ul>
    );
  }
}

function ExperimentListRow({experiment, planning}) {
  return (
    <li>
      {experiment.fields.Name}{" "}
      <ExperimentTimeline planning={planning} />
    </li>
  );
}

function ExperimentTimeline({planning}) {
  return (
    <ul>{planning && planning.map((plan) => <li>{plan}</li>)}</ul>
  );
}
