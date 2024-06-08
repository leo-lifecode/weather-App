import "./navbar.css";
import location from "../../assets/location.svg";
import ArrowDown from "../../assets/ArrowDown.svg";
import { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "../../services/apicity";
import { AsyncPaginate } from "react-select-async-paginate";
import { customStyles } from "./customstyles";
import { useAnyWindow } from "../../hooks/useAnyWindow";

const Navbar = ({ onSearchChange }) => {
  const [showBar, setShowBar] = useState(false);
  const [search, setsearch] = useState(null);
  const clikcwindow = useAnyWindow(showBar, setShowBar);
  const getcityname = localStorage.getItem("namecity");


  const loadOptions = async (inputvalue) => {
    try {
      const api = await fetch(`${GEO_API_URL}/cities?namePrefix=${inputvalue}&limit=10`, geoApiOptions);
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

  let name = getcityname ? getcityname : "";
  if (getcityname === name) {
    name = getcityname.split(" ");
  }
  // if (search !== null) {
  //   name = search.label.split(" ");
  // }

  return (
    <nav className="navbar">
      <div className="location">
        <div style={{ display: "flex", gap: "11px" }}>
          <img src={location} alt="location" className="location-svg" />
          <h4>
            {name[0] || "Kota Medan"} {name[1] || ""} {name[2] || ""}
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
