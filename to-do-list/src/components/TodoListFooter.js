import React from "react";
import PropTypes from "prop-types";
import { PrimaryButton, DangerButton } from "./Button.js";

class TodoListFooter extends React.Component {
  constructor() {
    super();
    this.all = this.all.bind(this);
    this.completed = this.completed.bind(this);
    this.active = this.active.bind(this);
  }

  all() {
    this.props.changeFilter("all");
  }

  completed() {
    this.props.changeFilter("completed");
  }

  active() {
    this.props.changeFilter("active");
  }

  render() {
    const { filter, removeAll } = this.props;
    return (
      <div className="d-flex justify-content-between">
        <div className="btn-group">
          <PrimaryButton onClick={this.all} disabled={filter === "all"}>
            All
          </PrimaryButton>
          <PrimaryButton onClick={this.completed} disabled={filter === "completed"}>
            Completed
          </PrimaryButton>
          <PrimaryButton onClick={this.active} disabled={filter === "active"}>
            Active
          </PrimaryButton>
        </div>
        <DangerButton onClick={removeAll}>
            clear
        </DangerButton>
      </div>
    );
  }
}
TodoListFooter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
  removeAll: PropTypes.func.isRequired
};

export default TodoListFooter;
