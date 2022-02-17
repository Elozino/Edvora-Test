import React from "react";

function Card({ item , i}) {
  return (
    <div key={i} className="md:flex bg-zinc-900 mb-4 rounded-lg p-5">
      <img src={item.map_url} alt="map" className="w-full md:w-1/4" />
      <div className="md:ml-6 mt-4 md:mt-0">
        <p>Ride Id : {item.id}</p>
        <p>Origin Station : {item.origin_station_code}</p>
        <p>station_path : [{item.station_path}]</p>
        <p>Date : {`${new Date(item.date).toLocaleDateString()}`}</p>
        <p>Distance : {item.destination_station_code}</p>
      </div>
    </div>
  );
}

export default Card;
