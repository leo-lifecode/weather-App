import { useEffect } from "react";
import "./navbar.css";
import location from "../../assets/location.svg";
import ArrowDown from "../../assets/ArrowDown.svg";
import { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "../../services/apicity";
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

  const loadOptions = async (inputvalue) => {
    try {
      const api = await fetch(
        `${GEO_API_URL}/cities?namePrefix=${inputvalue}&limit=10`,
        geoApiOptions
      );

      const response = await api.json();
      return {
        options: response.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name} ${city.countryCode}`,
          };
        }),
      };
    } catch (err) {
      console.error(err);
    }
  };

  const handleChangeSearch = (searchData) => {
    setsearch(searchData);
    onSearchChange(searchData);
  };

  let name = "";
  if (search !== null) {
    name = search.label.split(" ");
  }

  return (
    <nav className="navbar">
      <div className="location">
        <div style={{ display: "flex", gap: "11px" }}>
          <img src={location} alt="location" className="location-svg" />
          <h4>
            {`${name[0] === undefined ? "Kota Medan" : name[0]} ${
              name[1] === undefined ? " " : name[1]
            }
            ${name[2] === undefined ? " " : name[2]}`}
          </h4>
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
