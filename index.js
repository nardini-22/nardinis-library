const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const app = express();

const UsersRoutes = require("./routes/users");
const BooksRoutes = require("./routes/books");

app.use(morgan("dev"));

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Accept, Authorization, Content-Type"
  );
  ("");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Method", "GET, POST, PUT, DELETE");
    return res.status(200).send({});
  }
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));
app.use(express.json());

app.use("/", UsersRoutes, BooksRoutes);

app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build"));
});

app.use((req, res, next) => {
  const erro = new Error("Rota não encontrada!");
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      message: error.message,
    },
  });
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
