const express = require("express");
const app = express();
const db = require("./db/db");
const helmet = require("helmet");
const cors = require("cors");
const { port } = require("./config/index");
const routes = require("./routes/index");
const errorHandler = require("./middleware/error.middleware");

app.use(helmet());
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    service: "backend",
    timestamp: new Date().toISOString(),
  });
});

app.use(routes);

app.use(errorHandler);

app.listen(port, async () => {
  //later can add retry mechanism
  await db.query("SELECT 1");
  console.log(`server started on port ${port}`);
  console.log(`database connected`);
});

// later can add sig int methods to save data on abrupt shut down of service - boiler plate code
