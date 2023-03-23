import React from "react";

export default function Paginator({ prev, next, onPrev, onNext, index }) {
  const handlePrev = () => {
    onPrev();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="container paginator flex m-2 justify-center ">
      {prev ? (
        <button
          onClick={handlePrev}
          type="button"
          className="text-green-700 border border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:focus:ring-green-800"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            classNamel="mr-2 w-4 h-4 font-bold"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            ></path>
          </svg>
          <span class="sr-only">Icon description</span>
          Prev
        </button>
      ) : null}
      <p className="text-green-400 m-2">
        Page <span>{index}</span> of <span>42</span>
      </p>
      {next ? (
        <button
          onClick={handleNext}
          type="button"
          className="text-green-700 border border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:focus:ring-green-800"
        >
          {" "}
          Next
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="ml-2 w-4 h-4 font-semibold"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
            ></path>
          </svg>
          <span className="sr-only">Icon description</span>
        </button>
      ) : null}
    </div>
  );
}
