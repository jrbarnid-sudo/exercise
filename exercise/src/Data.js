import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await (await fetch("/api/data")).json();

      setData(results.result);
    };

    fetchData();
  }, []);

  return (
    <div className="py-4">
      <h1 id="data">Data Packages</h1>
      <DataTable packages={data} />
    </div>
  );
};
