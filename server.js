const { createApp } = require("./app");

const app = createApp();

//
app.get("/ping", (req, res) => {
  res.status(200).json("pong");
});

// 서버 열어주기
app.listen(8080, () => {
  console.log("서버는 열렸따");
});
