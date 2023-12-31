var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
// require('./.env').config()
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://anshuahi:Uf8YBE2VK2kFFMiC@cluster0.bol3afh.mongodb.net/LoansManager?retryWrites=true&w=majority"
    // "mongodb://localhost:27017/loan"
  )
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log("Unable to connect database");
    console.log("Error: ", err);
  });

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var customersRouter = require("./routes/customers");
var auditRouter = require("./routes/audit");
var invoicesRouter = require("./routes/invoices");
var loansRouter = require("./routes/loans");
var paymentsRouter = require("./routes/payments");
var settingsRouter = require("./routes/settings");

var app = express();
app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/customers", customersRouter);
app.use("/audits", auditRouter);
app.use("/invoices", invoicesRouter);
app.use("/loans", loansRouter);
app.use("/payments", paymentsRouter);
app.use("/settings", settingsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
