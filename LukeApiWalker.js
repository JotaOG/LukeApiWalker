import React, { useState, useEffect } from "react";
import axios from "axios";
import { People } from "../Components/people";
import { Films } from "../Components/films";
import { Starships } from "../Components/starships";
import { Vehicles } from "../Components/vehicles";
import { Species } from "../Components/species";
import { Planets } from "../Components/planets";


export const LukeApiWalker = (props) => {
  const [select, setSelect] = useState("people");
  const [id, setId] = useState(1);
  const [data, setData] = useState({});
  const style = {
    width: "200px",
    height: "200px",
    border: "3px solid black",
    backgroundImage:
      "url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/obi-wan-kenobi-1602508425.jpg?crop=0.5xw:1xh;center,top&resize=980:*)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (props.id && props.word) {
      axios
        .get(`https://swapi.dev/api/${props.word}/${props.id}/`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [props.word, props.id])


  const handleChangeSelect = (e) => {
    setSelect(e.target.value);
  };
  const handleChangeId = (e) => {
    setId(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .get(`https://swapi.dev/api/${select}/${id}/`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setDisplay("");
      })
      .catch((err) => {
        setDisplay(
          <>
            <div style={style}></div>
            <p className="show-p">
              "Estos no son los droides que esta buscando"
            </p>
          </>
        );
        setData({});
      });
  };
  return (
    <>
      <form onSubmit={handleClick}>
        <label htmlFor="select">Search for: </label>
        <select
          name="select"
          id="select"
          value={select}
          onChange={handleChangeSelect}
        >
          <option value="people">People</option>
          <option value="films">Films</option>
          <option value="starships">Starships</option>
          <option value="vehicles">Vehicles</option>
          <option value="species">Species</option>
          <option value="planets">Planets</option>
        </select>
        <label htmlFor="id">Id: </label>
        <input
          type="number"
          name="id"
          id="id"
          min={1}
          value={id}
          onChange={handleChangeId}
        />
        <button type="submit" name="search">
          Search
        </button>
        <br />
        <p>selected: {select}</p>
      </form>
      {select === "people" && <People people={data} display={display} />}
      {select === "films" && <Films films={data} display={display} />}
      {select === "starships" && (
        <Starships starships={data} display={display} />
      )}
      {select === "vehicles" && <Vehicles vehicles={data} display={display} />}
      {select === "species" && <Species species={data} display={display} />}
      {select === "planets" && <Planets planets={data} display={display} />}
    </>
  );
};
