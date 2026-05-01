const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const { port } = require("./config/index");
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

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
