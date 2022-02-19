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

  // function to filter nearest ride
  function filterNearsestRide(value) {
    const nearRide = data
      .map((item) => item.station_path.sort((a, b) => a - b))
      .flat()
      .sort((a, b) => a - b);
    const closeRide = data.filter((item) => item.station_path.includes(value));

    const presentRides = nearRide.filter((item) => item >= value);
    const onePresentRide = [...new Set(presentRides)];
    // console.log(presentRides);
    console.log(onePresentRide);
    // console.log(nearRide);
    console.log(closeRide);
  }

  filterNearsestRide(40);

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
      />

      <main className="px-10 text-gray-100 text-opacity-60">
        {data?.map((item, i) => {
          const filteredData = item.station_path;
          // console.log(filteredData);
          // console.log(_.intersection(filteredData, filterNearsestRide(40)));
          return <Card item={item} i={i} key={item.id} />;
        })}
      </main>

      <footer className="text-center text-zinc-100">Elozino Ovedhe</footer>
    </div>
  );
}

export default App;
