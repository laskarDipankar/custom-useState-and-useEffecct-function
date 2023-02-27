import React from "react";
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
class Lifecycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  ////// LIFECYCLE METHODS //////

  // Mounting
  // constructor() : to initialize state before component is mounted.

  // static getDerivedStateFromProps()
  // render() : to render the component.
  // componentDidMount()

  componentDidMount() {
    console.log("componentDidMount");
  }

  // Updating
  // static getDerivedStateFromProps()
  // shouldComponentUpdate()
  // render()
  // getSnapshotBeforeUpdate()
  // componentDidUpdate()

  // Unmounting
  // componentWillUnmount()

  // Error Handling
  // static getDerivedStateFromError()
  // componentDidCatch()

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>
        {/* <button
          onClick={() => this.setState({ count: this.props.counter + 1 })}
        >
          Click Me
        </button> */}
        {/* <button onClick={this.increment.bind(this)}>HIT me</button> */}
        {/* <button onClick={this.increment}>HIT me</button>
        <button onClick={() => this.increment()}>zor se</button> */}
        <h1>{this.props.counter}</h1>
      </div>
    );
  }
}

Lifecycle.propTypes = propTypes;
Lifecycle.defaultProps = defaultProps;
// #endregion

export default Lifecycle;
