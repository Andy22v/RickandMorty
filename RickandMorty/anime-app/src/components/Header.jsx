import React from "react";
import Paginator from "./Paginator";
import Card from "./Card";
import logo from "./logo.png";

function Header({
  characters,
  info,
  onNext,
  onPrev,
  search,
  setSearch,
  index,
}) {
  return (
    <div className="">
      <div className="title-container flex justify-center ">
        <img src={logo} alt="" />
      </div>
      <div className=" banner bg-black flex justify-center">
        <div className="search-container">
          <input
            className="py-2.5 font-medium text-lg px-8 mr-2 mb-2  text-gray-900 focus:outline-none bg-white rounded-full border border-green-400 hover:bg-green-200 focus:z-10 focus:ring-4 focus:ring-green-400 dark:focus:ring-green-200 dark:bg-green-400 dark:text-gray-900 dark:border-green-400 dark:hover:text-white dark:hover:bg-green-600"
            type="search"
            placeholder="search a Character..."
            required
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Paginator
          index={index}
          prev={info.prev}
          next={info.next}
          onNext={onNext}
          onPrev={onPrev}
        />
      </div>
      <div>
        <div className="card-container flex ">
          <div className="col-container justify-center flex flex-wrap">
            {characters
              ?.filter((value) => {
                if (search === "") {
                  return value;
                } else if (
                  value.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return value;
                }
              })
              ?.map((item, id) => (
                <div key={id}>
                  <Card item={item} search={search} />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className=" bg-black flex justify-center">
        <Paginator
          index={index}
          prev={info.prev}
          next={info.next}
          onNext={onNext}
          onPrev={onPrev}
        />
      </div>
    </div>
  );
}

export default Header;
