import React from "react";

const Debouncing = () => {
  let counter = 0;
  const fetchData = () => {
    counter++;
    console.log("fetching data", counter);
  };

  const debounceMehtod = (fn, wait) => {
    // console.log("debounceMehtod", fn, wait);
    let timer;
    return function () {
      let context = this;
      // args = arguments;
      clearTimeout(timer);

      timer = setTimeout(() => {
        fn.apply(context, arguments);
      }, wait);
    };
  };

  const debounce = debounceMehtod(fetchData, 300);
  return (
    <div>
      <input type="text" onChange={debounce} />
    </div>
  );
};

export default Debouncing;
