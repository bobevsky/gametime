import React from "react";

const Filters = ({
  toggleFilters,
  games,
  setAllActive,
  filters: { all, category, time, players },
  areFiltersVisible,
  setFiltersVisibility,
}) => (
  <div className="Filters">
    <button
      type="button"
      id="trigger-show-filters"
      className={areFiltersVisible ? "state-active" : ""}
      onClick={() => setFiltersVisibility(!areFiltersVisible)}
    >
      {areFiltersVisible ? "Сокриј" : "Покажи"} филтри
    </button>
    <div className={areFiltersVisible ? "state-active overlay" : "overlay"}>
      <div className="filters-group">
        <p className="block-title">Пребарајте преку категорија</p>
        <div className="filters-grid">
          {Object.keys(category).map((key, i) => (
            <div className="filter-trigger" key={`category-${i}`}>
              <button
                type="button"
                data-filter="category"
                data-filter-name={key}
                onClick={toggleFilters}
                className={category[key] ? "btn state-primary active" : "btn state-primary"}
              >
                {key} ({games.filter((game) => game.category === key).length})
              </button>
            </div>
          ))}
          <div className="filter-trigger">
            <button
              type="button"
              onClick={setAllActive}
              className={all ? "btn state-primary active" : "btn state-primary"}
            >
              Сите ({games.length})
            </button>
          </div>
        </div>
      </div>
      <div className="filters-group">
        <p className="block-title">Временска рамка</p>
        <div className="filters-grid">
          {Object.keys(time).map((key, i) => (
            <div className="filter-trigger" key={`time-${i}`}>
              <button
                type="button"
                data-filter="time"
                data-filter-name={key}
                onClick={toggleFilters}
                className={time[key] ? "btn state-primary active" : "btn state-primary"}
              >
                {key.slice(0, -3)}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="filters-group">
        <p className="block-title">Големина на група</p>
        <div className="filters-grid">
          {Object.keys(players).map((key, i) => (
            <div className="filter-trigger" key={`players-${i}`}>
              <button
                type="button"
                data-filter="players"
                data-filter-name={key}
                onClick={toggleFilters}
                className={players[key] ? "btn state-primary active" : "btn state-primary"}
              >
                {key}
              </button>
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="btn state-secondary"
        id="trigger-show-results"
        onClick={() => setFiltersVisibility(false)}
      >
        Покажи резултати
      </button>
    </div>
  </div>
);

export default Filters;
