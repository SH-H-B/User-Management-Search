const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");

const apiRouter = require("./router/api-router");

const { handle404, handle500, handle405 } = require("./errors/errorHandler");

app.use(bodyParser.json());
app.use(cors());

app.use("/api", apiRouter);

app.all("/*", (req, res, next) => {
  next({ status: 404, msg: "Page not found" });
});

app.use(handle404);
app.use(handle405);
app.use(handle500);

module.exports = app;
