const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();
var date = addDays(new Date(), 100);
app.get("/", (request, response) => {
  response.send(
    `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  );
});
app.listen(3000);
module.exports = app;
