import React, { Component } from "react";
import CounterControl from "./../../CounterControl/CounterControl";
import CounterOutput from "./../../CounterOutput/CounterOutput";
import * as actionsTypes from "./../../../store/actions/actions";
import { connect } from "react-redux";

class Counter extends Component {
  /*state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };
  */

  render() {
    return (
      <div>
        <div>
          <CounterOutput value={this.props.ctr} />
          <CounterControl
            label="Increment"
            clicked={() => this.props.onIncrementCounter()}
          />
          <CounterControl
            label="Decrement"
            clicked={() => this.props.onDecrementCounter()}
          />
          <CounterControl
            label="Add 5"
            clicked={() => this.props.onAddCounter(5)}
          />
          <CounterControl
            label="Subtract 5"
            clicked={() => this.props.onSubstractCounter(5)}
          />
        </div>
        <hr />
        <button
          className="btn btn-success"
          onClick={() => this.props.onSaveResult(this.props.ctr)}
        >
          Save result
        </button>

        <ul>
          {this.props.results.map((item) => (
            <li
              key={item.id}
              onClick={() => this.props.onDeleteResult(item.id)}
            >
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    results: state.res.results,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionsTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionsTypes.DECREMENT }),
    onAddCounter: (value) => dispatch({ type: actionsTypes.ADD, value: value }),
    onSubstractCounter: (value) =>
      dispatch({ type: actionsTypes.SUBSTRACT, value: value }),
    onSaveResult: (value) =>
      dispatch({ type: actionsTypes.STORE_RESULT, newVal: value }),
    onDeleteResult: (value) =>
      dispatch({ type: actionsTypes.DELETE_RESULT, selectedLineId: value }),
  };
};

export default connect(mapStateToProps, mapsDispatchToProps)(Counter);
