import React, { useState, useEffect } from "react";
import DefenseCards from "./DefenseCards";
import Spinner from "./Spinner";

export default () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const results = await (await fetch("/api/defense")).json();

      setData(results.dataset);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="py-4">
      <h1 id="defense">Defense Datasets</h1>
      {isLoading && <Spinner />}
      <div className="container row py-5">
        {data &&
          data.map((d) => {
            return <DefenseCards dataset={d} />;
          })}
      </div>
    </div>
  );
};
