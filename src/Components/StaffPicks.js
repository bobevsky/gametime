import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StaffPick from "./StaffPick";

const StaffPicks = () => {
  const [staffPickGames, setStaffPickGames] = useState([]);

  useEffect(() => {
    getStaffPicks();
  }, []);

  const getStaffPicks = async () => {
    let games = await axios("https://json-server-heroku-aqcspxgllg.now.sh/posts");

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
    <div className="StaffPicks" id="StaffPicks">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>Препорачани од нашиот тим</h4>
            <hr />
            <hr className="purple-hr" />
          </div>
        </div>
        <div className="row">
          {staffPickGames.map((game) => (
            <Link to={`/game/${game.id}`} key={game.id} replace>
              <StaffPick
                key={game.id}
                imgSrc={{
                  backgroundImage: `url(${require(`../assets/img/img-cards/${game.image}.png`)})`,
                }}
                title={game.title}
                category={game.category}
                description={game.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffPicks;
