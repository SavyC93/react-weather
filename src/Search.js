import React from "react";

export default function Search() {
  return (
    <div>
      <form className="Search">
        <input type="search" placeholder="Type in your city..." />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
