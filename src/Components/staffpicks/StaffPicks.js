import React, { useState, useEffect } from "react";
import axios from "axios";
import StaffPickItem from "./StaffPickItem";

const StaffPicks = () => {
  const [staffPickGames, setStaffPickGames] = useState([]);

  useEffect(() => {
    getStaffPicks();
  }, []);

  const getStaffPicks = async () => {
    let games = await axios("https://project3-server.herokuapp.com/posts");

    setStaffPickGames(
      games.data.filter(
        (game) =>
          games.data[8].id === game.id ||
          games.data[15].id === game.id ||
          games.data[20].id === game.id ||
          games.data[41].id === game.id
      )
    );
  };

  return (
    <div className="Staffpicks" id="staffpicks">
      <div className="inner-wrap">
        <h2 className="block-title">Препорачани од нашиот тим</h2>
        <hr />
        <div className="grid-container">
          {staffPickGames.map((game) => (
            <StaffPickItem
              key={game.id}
              title={game.title}
              category={game.category}
              id={game.id}
              img={require(`../../assets/img/img-cards/${game.image}.png`)}
              description={game.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffPicks;
