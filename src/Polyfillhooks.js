import React from "react";

function myuseState(initialState) {
  let state = initialState;

  let obj = {
    getState: (arg) => {
      if (arg) {
        state = arg;
      }
      console.log("state_in", state);
      return state;
    },

    setState: (newState) => {
      console.log("setState", newState);
      if (newState) {
        state = newState;
        obj.getState(newState);
      }
    },
  };

  state = obj.getState() ? obj.getState() : initialState;

  return [state, obj.setState];
}

const Polyfillhooks = () => {
  const [count, setCount] = myuseState(0);

  // const handleCount = () => ;
  console.log("count", count);
  return (
    <div>
      <h1 id="count"> state : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          document.getElementById("count").innerHTML = `state : ${count}`;
        }}
      >
        HIT me
      </button>
    </div>
  );
};

export default Polyfillhooks;
