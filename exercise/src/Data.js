import React, { useState, useEffect } from "react";

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await (await fetch("/api/data")).json();

      setData(results.dataset);
    };

    fetchData();
  }, []);

  return (
    <div className="py-4">
      <h1 id="defense">Data Packages</h1>
    </div>
  );
};
