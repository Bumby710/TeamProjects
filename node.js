var unirest = require("unirest");

var req = unirest(
  "POST",
  "https://gamedatabasestefan-skliarovv1.p.rapidapi.com/getGames"
);

req.headers({
  "x-rapidapi-host": "GameDatabasestefan-skliarovV1.p.rapidapi.com",
  "x-rapidapi-key": "9d9d761f07msh0ebd40fff3dd2f1p1dea65jsna12aeda2a56b",
  "content-type": "application/x-www-form-urlencoded"
});

req.form({});
req.end(function(res) {
  if (res.error) throw newError(res.error);
  console.log(res.body);
});
