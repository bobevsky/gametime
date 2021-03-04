import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Game from "../game";
import Filters from "../filters";

const Games = () => {
  const [gamesData, setGamesData] = useState([]);

  const [gamesToRender, setGamesToRender] = useState([]);

  const [filters, setFilters] = useState({
    all: true,
    category: {
      Енергија: false,
      Иновации: false,
      Лидерство: false,
      Акции: false,
      Тим: false,
    },
    time: {
      "5-30 минути": false,
      "30-60 минути": false,
      "60-120 минути": false,
      "120-240 минути": false,
    },
    players: {
      "2-10": false,
      "10-40": false,
    },
  });

  // filters handlers
  const results = useRef();

  const [areFiltersVisible, setFiltersVisibility] = useState();

  useEffect(() => {
    document.documentElement.clientWidth >= 1000 && setFiltersVisibility(true);

    areFiltersVisible === false &&
      document.documentElement.clientWidth < 1000 &&
      window.scrollTo({
        top: results.current.offsetTop - 30 - 67.85,
        behavior: "smooth",
      });
  }, [areFiltersVisible]);

  //set the initial games
  useEffect(() => {
    const getGames = async () => {
      const { data } = await axios("https://project3-server.herokuapp.com/posts");

      setGamesData(data);
      setGamesToRender(data);
    };

    getGames();
  }, []);

  //filter the games based on the active filters
  useEffect(() => {
    let activeFilters = {
      category: [],
      time: [],
      players: [],
    };

    const { category, players, time } = filters;

    for (let i in category) {
      category[i] && activeFilters.category.push(i);
    }

    for (let i in time) {
      time[i] && activeFilters.time.push(i);
    }

    for (let i in players) {
      players[i] && activeFilters.players.push(i);
    }

    const filterKeys = Object.keys(activeFilters);

    const filteredGames = gamesData.filter((game) =>
      filterKeys.every((key) => {
        if (!activeFilters[key].length) {
          return true;
        }

        return activeFilters[key].includes(game[key]);
      })
    );

    setGamesToRender(filteredGames);
  }, [filters, gamesData]);

  //toggle the all-games btn active if there are all games shown at any time
  useEffect(() => {
    if (gamesToRender.length === gamesData.length) {
      setFilters({
        ...filters,
        all: true,
      });
    }
  }, [gamesToRender.length, gamesData.length]);

  const toggleFilters = (e) => {
    let dataFilter = e.currentTarget.dataset.filter,
      dataFilterName = e.currentTarget.dataset.filterName;

    setFilters({
      ...filters,
      all: false,
      [dataFilter]: {
        ...filters[dataFilter],
        [dataFilterName]: !filters[dataFilter][dataFilterName],
      },
    });
  };

  const setAllActive = () => {
    // helper to set all the filters inside each category to false
    const wipeFilters = (filter) => {
      return Object.keys(filter).reduce(
        (attrs, key) => ({
          ...attrs,
          [key]: false,
        }),
        {}
      );
    };

    setFilters({
      all: true,
      category: wipeFilters(filters.category),
      time: wipeFilters(filters.time),
      players: wipeFilters(filters.players),
    });
  };

  return (
    <div className="games">
      <div className="inner-wrap">
        <h2 className="block-title">Достапни игри</h2>
        <Filters
          toggleFilters={toggleFilters}
          games={gamesData}
          setAllActive={setAllActive}
          filters={filters}
          areFiltersVisible={areFiltersVisible}
          setFiltersVisibility={setFiltersVisibility}
        />
        <div className="grid-container" ref={results}>
          {!gamesData.length ? (
            <img
              src={require("../../assets/img/filters_loader.gif")}
              alt=""
              className="filters-loader"
            />
          ) : !gamesToRender.length ? (
            <p className="no-results">Нема пронајдени резултати.</p>
          ) : (
            gamesToRender.map((game) => (
              <Game
                key={game.id}
                title={game.title}
                category={game.category}
                time={game.time}
                players={game.players}
                id={game.id}
                img={require(`../../assets/img/img-cards/${game.image}.png`)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Games;
