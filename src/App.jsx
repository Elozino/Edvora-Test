import { useState, useEffect } from "react";
import { user, Ride } from "./api/data";
import _ from "lodash";
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
      <Filter
        upcomingRides={upcomingRides}
        upcomingRide={upcomingRide}
        pastRide={pastRide}
        pastRides={pastRides}
        setShowFilter={setShowFilter}
        showFilter={showFilter}
        setData={setData}
        Ride={Ride}
        filterStateCity={filterStateCity}
      />

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
