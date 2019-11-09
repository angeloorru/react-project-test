import React from "react";
import {Button} from "react-bootstrap";

const Dropdown = ({locations}) => {
  if (locations.length === 0) {
    return (
      <div>Loading Data...</div>
    );
  }

  const locationsItems = Object.values(locations.data).map(location => {
    const BUTTONS = ["Default"];
    return (
      <option key={location.locationId}>{location.locationInfo.country}</option>
    );
  });

  return (
    <div className="drop-down">
      <div>AND Clubs Location</div>
      <select className="col-md-4 list-group">{locationsItems}</select>
    </div>
  );
};

export default Dropdown;
