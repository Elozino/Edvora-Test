import React from "react";
import filterIcon from "/assets/filter.svg";

function Filter({
  upcomingRides,
  upcomingRide,
  pastRide,
  pastRides,
  setShowFilter,
  showFilter,
  setData,
  Ride,
  filterStateCity,
}) {
  return (
    <main className="px-10 text-gray-100 text-opacity-60">
      <header className="md:flex justify-between items-center py-5 relative">
        <div className="flex items-center">
          <h4 className="mr-4 cursor-pointer px-2 pb-2 border-b-2 border-transparent hover:border-gray-100">
            Nearest rides
          </h4>
          <h4
            onClick={() => upcomingRides()}
            className="mr-4 cursor-pointer px-2 pb-2  border-b-2 border-transparent hover:border-gray-100"
          >
            Upcoming rides ({upcomingRide.length})
          </h4>
          <h4
            onClick={() => pastRides()}
            className="mr-4 cursor-pointer px-2 pb-2  border-b-2 border-transparent hover:border-gray-100"
          >
            Past rides ({pastRide.length})
          </h4>
        </div>
        <div
          onClick={() => setShowFilter(!showFilter)}
          className="border-b-2 border-transparent cursor-pointer flex items-center justify-end "
        >
          <img src={filterIcon} alt="image" />
          <span className="ml-2"> Filter</span>
          {showFilter && (
            <>
              <div className="absolute top-28 md:top-16 right-0 bg-neutral-900 shadow-lg p-3 md:p-5 rounded-lg w-3/5 sm:w-2/5 md:w-1/6">
                <h4>Filters</h4>
                <hr className="my-3" />
                <div
                  onClick={() => {
                    setData(Ride);
                    filterStateCity("state", "Maharashtra2");
                  }}
                  className="bg-zinc-800 py-2 px-5 rounded-lg flex items-center justify-between mb-3"
                >
                  <p>State</p>
                  {/* <p>▽</p> */}
                  <p>&#9660;</p>
                </div>
                <div
                  onClick={() => {
                    setData(Ride);
                    filterStateCity("city", "Panvel1");
                  }}
                  className="bg-zinc-800 py-2 px-5 rounded-lg flex items-center justify-between mb-3"
                >
                  <p>City</p>
                  {/* <p>▽</p> */}
                  <p>&#9660;</p>
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </main>
  );
}

export default Filter;
