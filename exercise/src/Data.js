import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import Spinner from "./Spinner";

export default () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const results = await (await fetch("/api/data")).json();

      setData(results.result);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="py-4">
      <h1 id="data">Data Packages</h1>
      {isLoading && <Spinner />}
      <DataTable packages={data} />
    </div>
  );
};
