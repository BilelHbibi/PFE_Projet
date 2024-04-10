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
    value: "maison",
  },
  {
    name: "Sports",
    value: "sports",
  },
  {
    name: "Santé",
    value: "santé",
  },
  {
    name: "Art & Collectibles",
    value: "art & collectibles",
  },
  
];

const ages = [
  {
    name: "0-2 Ans",
    value: "0-2",
  },
  {
    name: "3-5 Ans",
    value: "3-5",
  },
  {
    name: "6-8 Ans",
    value: "6-8",
  },
  {
    name: "9-12 Ans",
    value: "9-12",
  },
  {
    name: "13+ Ans",
    value: "12-20",
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

        <h1>Ages</h1>
        <div className="list">
          {ages.map((age) => {
            return (
              <div
                style={{ display: "flex", gap: "0.5rem",alignItems:"center" }}
              >
                <Input
                  type="checkbox"
                  name="age"
                  className="max-width"
                  checked={filters.age.includes(age.value)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFilters({
                        ...filters,
                        age: [...filters.age, age.value],
                      });
                    } else {
                      setFilters({
                        ...filters,
                        age: filters.age.filter(
                          (item) => item !== age.value
                        ),
                      });
                    }
                  }}
                />
                <label htmlFor="age">{age.name}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filters;
