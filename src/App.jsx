import { useState, useEffect } from "react";
import { user, Ride } from "./api/data";
import _ from "lodash";
import filterIcon from "/assets/filter.svg";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Card from "./components/Card";

function App() {
  const [showFilter, setShowFilter] = useState(false);
  const [data, setData] = useState(Ride);
  const [pastRide, setPastRide] = useState(0);
  const [upcomingRide, setUpComingRide] = useState(0);
  // console.log(new Date(1645042406101));
  // console.log(new Date().getTime());
  // var d = Date.parse("2022-03-19T20:23:01.804Z");
  // console.log(d);

  // function to filter nearest ride
  function filterNearsestRide(value) {
    // const min = value;
    // const max = value + 10;
    const nearRide = data.map((item) => item.station_path);
    const flatRide = nearRide.flat();
    const sample = flatRide.filter(
      (item) => item >= value && item <= value + 10
    );
    // .sort((a, b) => a - b);
    // const sortedNearRide = nearRide.sort((a, b) => a - b);
    // const filter = nearRide.filter((item) => item);
    // const filterHigh = nearRide.map((item) =>
    //   item.filter((item) => item > value && item < value + 10)
    // );

    // console.log(nearRide.flat());
    // console.log(sortedNearRide);
    // console.log(filter);
    // console.log(filterHigh);
    // console.log(sample);
    return sample;
  }

  filterNearsestRide();

  //Ride Event
  let currentDate = new Date().getTime();
  const filterByPastRide = Ride.filter((item) => item.date < currentDate);
  const filterByUpcoimingRide = Ride.filter((item) => item.date > currentDate);

  // Upcoming rides
  function upcomingRides() {
    setData(filterByUpcoimingRide);
  }

  // Past rides
  function pastRides() {
    setData(filterByPastRide);
  }

  // Function to filter both by city and state
  function filterStateCity(search, value) {
    let stateOrCity = Ride?.map((item) => item);
    let filteredStateOrCity = stateOrCity.filter(
      (item) => item[`${search}`] == value
    );
    setData(filteredStateOrCity);
  }

  useEffect(() => {
    setUpComingRide(filterByUpcoimingRide);
    setPastRide(filterByPastRide);
  }, []);

  return (
    <div className="bg-zinc-800 pb-5">
      <Header user={user} />
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
      {/* <Filter
        upcomingRides={upcomingRides}
        upcomingRide={upcomingRide}
        pastRide={pastRide}
        pastRides={pastRides}
        setShowFilter={setShowFilter}
        showFilter={showFilter}
        setData={setData}
        Ride={Ride}
        filterStateCity={filterStateCity}
      /> */}

      <main className="px-10 text-gray-100 text-opacity-60">
        {data?.map((item, i) => {
          const filteredData = item.station_path;
          // console.log(filteredData);
          // console.log(_.intersection(filteredData, filterNearsestRide(40)));
          return <Card item={item} i={i} />;
        })}
      </main>

      <footer className="text-center text-zinc-100">Elozino Ovedhe</footer>
    </div>
  );
}

export default App;
