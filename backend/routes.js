const express = require("express");

function routes(app) {
  app.get("/test", (req, res) => {
    console.log("/test accesat");
    console.log(req);

    const data = {
      message: "Acesta este un JSON",
      timestamp: new Date().getTime(),
    };

    res.json(data);
  });
}

module.exports = routes;
