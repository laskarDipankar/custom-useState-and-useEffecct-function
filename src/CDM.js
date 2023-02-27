import React from "react";

// import { useEffect } from "react";

// let uf = {
//   myuseState: (initialState) => {
//     this.state = initialState;

//     console.log("getState", this.getState);

//     return [this.getState, this.setState];
//   },
//   getState: (arg) => {
//     if (arg) {
//       this.state = arg;
//     }
//     console.log("state_in", this.state);
//     return this.state;
//   },

//   setState: (newState) => {
//     if (this.state !== newState) {
//       this.state = newState;
//       this.getState(newState);
//     }
//   },
// };

// console.log("uf", uf.myuseState(1));

function myuseState(initialState) {
  let state;

  const getState = (arg) => {
    // state = initialState;
    if (arg) {
      // state = arg;
      state = arg;
    }
    console.log("state_in", state);
    return state;
  };

  const setState = (newState) => {
    if (state !== newState) {
      state = newState;
      getState(newState);
    }
  };

  console.log("state_out", state);
  return [getState, setState];
}

function myuseEffect(cb, depArray) {
  // cb();
  if (depArray) {
    let prevDeps = depArray;
    let currentDeps = depArray;
    console.log({ prevDeps: prevDeps, currentDeps: currentDeps });

    if (prevDeps !== currentDeps) {
      console.log("prevDeps", prevDeps);
      console.log("currentDeps", currentDeps);
      cb();
    }
  }
}

const CDM = () => {
  const [count, setCount] = myuseState(1);
  myuseEffect(() => {
    console.log("useEffect");
  }, [count()]);

  console.log("count", count());
  return (
    <>
      <h2>starting with useState</h2>
      <h1 id="count">{count()}</h1>
      <h1>state : {count()}</h1>
      <button
        onClick={() => {
          setCount(count() + 1);

          document.getElementById("count").innerHTML = count();
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          setCount(0);

          document.getElementById("count").innerHTML = count();
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setCount(count() - 1);

          document.getElementById("count").innerHTML = count();
        }}
      >
        decrement
      </button>
    </>
  );
};

export default CDM;

//   function changeValue(newState) {
//     console.log("newState", newState);
//     let prevState = state;

//     // myUseState(newState);
//     if (prevState !== newState) {
//       //   window.location.reload();
//       console.log("inside if");
//       state = newState;
//     }
//     return state;
//   }
//   console.log("state to return from main func ", state);
//   return [state, changeValue];
// };
