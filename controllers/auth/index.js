const express = require("express");
const passport = require("passport");
const auth = express.Router();

auth.post("/login", function (req, res, next) {
	if (!req.body.user.email) {
		return res.status(422).json({ errors: { email: "can't be blank" } });
	}

	if (!req.body.user.password) {
		return res.status(422).json({ errors: { password: "can't be blank" } });
	}

	passport.authenticate("local", { session: false }, function (err, user, info) {
		if (err) { return next(err); }

		if (user) {
			user.token = user.generateJWT();
			return res.json({ user: user.toAuthJSON() });
		} else {
			return res.status(422).json(info);
		}
	})(req, res, next);
});

module.exports = auth;



/*


const jwt = require("express-jwt");
const secret = require("../config").secret;

function getTokenFromHeader(req) {
	if ((req.headers.authorization && req.headers.authorization.split(" ")[0] === "Token" )|| (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer")) {
		return req.headers.authorization.split(" ")[1];
	}
	return null;
}

const auth = {
	required: jwt({
		secret: secret,
		userProperty: "payload",
		getToken: getTokenFromHeader
	}),
	optional: jwt({
		secret: secret,
		userProperty: "payload",
		credentialsRequired: false,
		getToken: getTokenFromHeader
	})
};

module.exports = auth;
*/
