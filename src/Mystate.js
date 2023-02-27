import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

let stateValue;

const useState = (initialState) => {
  if (stateValue === undefined) {
    stateValue = initialState;
  }

  const setBelhu = (newState) => {
    stateValue = newState;
    renderApp();
  };
  return [stateValue, setBelhu];
};

const useEffect = (cb, depArray) => {
  cb();
  console.log("useEffect");
  if (!depArray) {
  }
};

const Mystate = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    console.log("count", count);
  }, [count]);

  return (
    <>
      <div>
        <h1>count A : 1</h1>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)}>Subtract</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>
      <div>
        <h1>count B : -1</h1>
        <button onClick={() => setCount(count)}>Subtract</button>
        <button>Add</button>
      </div>
    </>
  );
};

const renderApp = () => {
  const domNode = document.getElementById("root");
  const root = createRoot(domNode);
  root.render(<Mystate />);
  //   root.render()
  //   ReactDOM.render(<Mystate />, document.getElementById("root"));
};
renderApp();

export default Mystate;
