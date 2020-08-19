const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/", (request, response) => {
  response.send(`Hello World!`);
});

router.get("/status", (request, response) => {
  response.status(200).json({ message: `ok`, status: 200 });
});

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  (request, response, next) => {
    response.status(200).json({ message: `signup successful`, status: 200 });
  }
);

router.post("/login", (request, response, next) => {
  // call authenticate with login strategy
  passport.authenticate("login", (error, user) => {
    try {
      // check for error
      if (error) return next(error);

      // ensure user object was passed
      if (!user) return next(new Error("email and password are required"));

      //
      request.login(user, { session: false }, (err) => {
        // check for error
        if (err) return next(err);

        // otherwise success
        return response.status(200).json({ user, status: 200 });
      });
    } catch (err) {
      console.log(err);
      return next(err);
    }
  })(request, response, next);
});

router.post("/logout", (request, response) => {
  if (!request.body) {
    response.status(400).json({ message: `Invalid Body`, status: 400 });
  } else {
    response.status(200).json({ message: `ok`, status: 200 });
  }
});

router.post("/token", (request, response) => {
  if (!request.body || !request.body.refreshToken) {
    response.status(400).json({ message: `Invalid Body`, status: 400 });
  } else {
    const { refreshToken } = request.body;

    response.status(200).json({
      message: `refresh requested for token: ${refreshToken}`,
      status: 200,
    });
  }
});

module.exports = router;
