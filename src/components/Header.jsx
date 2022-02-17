import React from "react";
import Img from "../../public/assets/profile.jpg";

function Header({ user }) {
  return (
    <header className="text-gray-100 bg-neutral-900 h-16 flex items-center p-10 justify-between">
      <h2 className="text-4xl font-semibold">Edvora</h2>
      <div className="flex items-center">
        <h4 className="text-xl mr-2">{user.name}</h4>
        <img src={Img} alt="profile" className="rounded" />
      </div>
    </header>
  );
}

export default Header;
