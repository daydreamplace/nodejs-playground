// import express ===
const express = require("express");
const cors = require("cors");

const createApp = () => {
  //express 실행한다!
  const app = express();
  app.use(cors(), express.json());

  return app;
};

module.exports = { createApp };
