import React from "react";

function Card({ item }) {
  return (
    <div className="m-5 drop-shadow-2xl transition-opacity block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-green-600 dark:border-green-700 dark:hover:bg-gray-700">
      <img src={item?.image} alt={item.name} />
      {console.log(item.name)}

      <p className=" mt-2 text-white font-bold font-serif text-center text-sm">
        {item?.name}
      </p>
      <p className=" mt-2 text-white font-bold font-serif text-center text-sm">
        {item?.species}
      </p>
    </div>
  );
}

export default Card;
