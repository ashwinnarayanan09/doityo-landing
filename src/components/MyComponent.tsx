import React, { useState } from "react";
const MyComponent = () => {
  const [value, setValue] = useState(1);
  const buttons = [1, 2, 3, 4, 5];
  console.log("in MyComponent");
  return (
    <div>
      {buttons &&
        buttons.map((button, i) => (
          <button
            key={i.toString()}
            value={button}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            {button}
          </button>
        ))}
      <p>{value}</p>
      <button
        onClick={() => setValue(value + 1)}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Increment Value
      </button>
    </div>
  );
};

export default MyComponent;
