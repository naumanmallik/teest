require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
var bodyParser = require("body-parser");
const createError = require("http-errors");
const { success } = require("./utils/messages.util");

const hosts = process.env.ALLOWED_HOSTS;
const allowed_hosts = hosts.split(",");

const corsOptions = {
  origin: (origin, cb) => {
    if (origin == undefined || allowed_hosts.includes(origin)) {
      cb(null, true);
    } else {
      cb(new Error("Unauthorized access"));
    }
  },
};

const app = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("uploads"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT;

// Initailize routes
app.get("/", (req, res) => {
  return res.json({
    status: 200,
    message: success,
  });
});

require('./utils/cron-job')
// Routes
app.use(require("./routes"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.log(err);
  res
    .status(err.status || 500)
    .send({ status: err.status, message: err.message, data: {} });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
