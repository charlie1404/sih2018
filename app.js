const pino          = require("pino")();
const express       = require("express");
const cors          = require("cors");
const bodyParser    = require("body-parser");

const apiRouter = require("./controllers/api/");
const apiAuth = require("./controllers/auth/");

let app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", apiRouter);
app.use("/api/v1/auth", apiAuth);

app.listen(3000, () => {
	pino.info("Server Is Listening At 3000");
});
