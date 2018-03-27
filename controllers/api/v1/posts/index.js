const express   = require("express");
const posts     = express.Router();
//const mediaCtrl = require('./media.ctrl');


posts.get("/test", (req, res) => {
	res.status(200);
	res.send("{test:test}");
});

module.exports = posts;
