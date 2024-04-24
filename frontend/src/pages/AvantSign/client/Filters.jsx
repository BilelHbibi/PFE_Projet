import React from "react";
import { Input } from "antd";
const categories = [
  {
    name: "Electronique",
    value: "electronique",
  },
  {
    name: "Alimentation",
    value: "alimentation",
  },
  {
    name: "Maison",
    value: "aaison",
  },
  {
    name: "Sports",
    value: "sports",
  },
  {
    name: "Santé",
    value: "sante",
  },
  {
    name: "Art & Collectibles",
    value: "art-collectibles",
  },
];

const etats = [
  {
    name: "Occasion",
    value: "occasion",
  },
  {
    name: "Neuf",
    value: "neuf",
  },
];

const Filters = ({ showFilters, setShowFilters, filters, setFilters }) => {
  return (
    <div className="filters">
      <div className="header">
        <h1>Filters</h1>
        <i
          className="ri-close-line"
          onClick={() => setShowFilters(!showFilters)}
        ></i>
      </div>
      <div className="content">
        <h1>Categories</h1>
        <div className="list">
          {categories.map((category) => {
            return (
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Input
                  type="checkbox"
                  name="category"
                  className="max-width"
                  checked={filters.category.includes(category.value)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFilters({
                        ...filters,
                        category: [...filters.category, category.value],
                      });
                    } else {
                      setFilters({
                        ...filters,
                        category: filters.category.filter(
                          (item) => item !== category.value
                        ),
                      });
                    }
                  }}
                />
                <label htmlFor="category">{category.name}</label>
              </div>
            );
          })}
        </div>

        <h1>Etat</h1>
        <div className="list">
          {etats.map((etat) => {
            return (
              <div
                style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
              >
                <Input
                  type="checkbox"
                  name="etat"
                  className="max-width"
                  checked={filters.etat.includes(etat.value)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFilters({
                        ...filters,
                        etat: [...filters.etat, etat.value],
                      });
                    } else {
                      setFilters({
                        ...filters,
                        etat: filters.etat.filter(
                          (item) => item !== etat.value
                        ),
                      });
                    }
                  }}
                />
                <label htmlFor="etat">{etat.name}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filters;
