import React, { useEffect } from "react";
import "./navbar.css";
import location from "../../assets/location.svg";
import ArrowDown from "../../assets/ArrowDown.svg";
import { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "../../apicity";
import { AsyncPaginate } from "react-select-async-paginate";
import { customStyles } from "./customstyles";

const Navbar = ({ onSearchChange }) => {
  const [showBar, setShowBar] = useState(false);
  const [search, setsearch] = useState(null);

  useEffect(() => {
    const handleclickwindow = (e) => {
      const arrow = document.querySelector(".arrow-down");
      const searchBox = document.querySelector(".search-box");
      if (
        showBar &&
        !arrow.contains(e.target) &&
        !searchBox.contains(e.target)
      ) {
        setShowBar(false);
      }
    };
    window.addEventListener("click", handleclickwindow);
    return () => {
      window.removeEventListener("click", handleclickwindow);
    };
  }, [showBar]);

  const loadOptions = (inputvalue) => {
    return fetch(
      `${GEO_API_URL}/cities?namePrefix=${inputvalue}&limit=10`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleChangeSearch = (searchData) => {
    console.log("ini set search", search);
    setsearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <nav className="navbar">
      <div className="location">
        <div style={{ display: "flex", gap: "11px" }}>
          <img src={location} alt="location" className="location-svg" />
          <h3>Fortaleza</h3>
        </div>
        <img
          src={ArrowDown}
          alt="arrow-down"
          className="arrow-down"
          onClick={() => {
            setShowBar(!showBar);
          }}
        />
      </div>
      {showBar ? (
        <div className="search-box">
          <AsyncPaginate
            placeholder="search your city..."
            debounceTimeout={600}
            value={search}
            onChange={handleChangeSearch}
            loadOptions={loadOptions}
            styles={customStyles}
          />
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
