import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import Spinner from "./Spinner";

export default () => {
  const sorts = { Asc: "asc", Desc: "desc" };

  const sortData = (data, sort) => {
    switch (sort) {
      case sorts.Asc:
        return data.sort();
      case sorts.Desc:
        return data.reverse();
      default:
        return data.sort();
    }
  };

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [sort, setSort] = useState(sorts.Asc);

  useEffect(() => {
    const fetchData = async () => {
      const results = await (await fetch("/api/data")).json();

      setData(results);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setData(sortData(data, sort));
    setIsLoading(false);
  }, [sort]);

  const _setSorts = (e, newSort) => {
    e.preventDefault();

    if (newSort !== sort) {
      setIsLoading(true);
      setSort(newSort);
    }

    setShowDropdown(false);
  };

  const content = (
    <>
      <div className="py-4 px-4">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Sort By
          </button>
          <div
            className={`dropdown-menu ${showDropdown ? "show" : ""}`}
            aria-labelledby="dropdownMenuButton"
          >
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => _setSorts(e, sorts.Asc)}
            >
              Title (Asc)
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => _setSorts(e, sorts.Desc)}
            >
              Title (Desc)
            </a>
          </div>
        </div>
      </div>
      <div className="col-4">
        <DataTable packages={data} sort={sort} />
      </div>
    </>
  );

  return (
    <div className="py-4">
      <h1 id="data">Data Packages</h1>
      {isLoading ? <Spinner /> : content}
    </div>
  );
};
