const express = require("express");
const app = express();
const axios = require("axios");

app.get("/api/defense", async (req, res) => {
  const result = await axios.get("https://www.defense.gov/data.json");

  res.send(result.data);
});

app.get("/api/data", async (req, res) => {
  // packages are datasets, so this should match the catalog in the readme
  const result = await axios.get(
    "http://demo.ckan.org/api/3/action/package_list"
  );

  res.send(result.data.result);
});

app.listen(8080);
