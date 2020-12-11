import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevPrope", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //AJAX call and get the new value from ajax server
      // AJAX Call
    }
  }

  componentWillUnmount() {
    console.log("counter- unmount");
  }
  render() {
    console.log("Counters- Rendered");
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
