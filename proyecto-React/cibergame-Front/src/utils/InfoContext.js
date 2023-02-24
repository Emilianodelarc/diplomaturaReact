import React, { useState, useEffect, useContext } from "react";

export const InfoContext = React.createContext([]);

export const useInfoContext = () => useContext(InfoContext);

export function InfoProvider({ children }) {
  const [items, setItems] = useState([]);
  const itemsFetch = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "91ec1535b4msh741d09130615402p149daajsnd8d41dc50963",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      options
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    setTimeout(() => {
      itemsFetch();
    }, 4000);
  }, []);

  return (
    <InfoContext.Provider value={{ items }}>
      {children}
    </InfoContext.Provider>
  );
}
