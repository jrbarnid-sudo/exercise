import React, { useState, useEffect } from "react";
import DefenseCards from "./DefenseCards";

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await (
        await fetch("http://localhost:3000/api/defense")
      ).json();

      setData(results.dataset);
    };

    fetchData();
  }, []);

  return (
    <div className="py-4">
      <h1 id="defense">Defense Datasets</h1>
      {data &&
        data.map((d) => {
          return <DefenseCards dataset={d} />;
        })}
    </div>
  );
};
