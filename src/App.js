import "./App.css";
import React from "react";
import Lifecycle from "./Lifecycle";
import Functional from "./Functional";
import Debouncing from "./Debouncing";
import Polyfillhooks from "./Polyfillhooks";
import Mystate from "./Mystate";

import CDM from "./CDM";

// import PropTypes from "prop-types";

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
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidUpdate() {
    console.log("App componentDidUpdate");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <h1>Implementing useEffect</h1>
        {/* <CDM /> */}
        <Mystate />

        {/* <Polyfillhooks /> */}
        {/* <Debouncing />
        <Lifecycle counter={this.state.count} />
        <Functional counter={this.state.count} />
        <h1>React Lifecycle</h1>
        <button onClick={this.increment.bind(this)}>HIT me</button> */}
      </>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;
// #endregion

export default App;
