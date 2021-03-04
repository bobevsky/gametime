import React, { useState, useEffect } from "react";
import axios from "axios";
import StaffPickItem from "./StaffPickItem";
import { API_URL } from "../../config";

const StaffPicks = () => {
  const [staffPickGames, setStaffPickGames] = useState([]);

  useEffect(() => {
    const getStaffPicks = async () => {
      const { data } = await axios(API_URL);

      setStaffPickGames(
        data.filter(
          (game) =>
            data[8].id === game.id ||
            data[15].id === game.id ||
            data[20].id === game.id ||
            data[41].id === game.id
        )
      );
    };

    getStaffPicks();
  }, []);

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
