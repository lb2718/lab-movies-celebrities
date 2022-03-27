const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/celebrities/create", (req, res, next) =>
  res.render("celebrities/new-celebrity")
);
router.post("/celebrities/create", async (req, res, next) => {
  try {
    const celebCreated = await Celebrity.create(req.body);
    res.redirect("/celebrities");
  } catch (err) {
    console.log(err);
    res.render("celebrities/new-celebrity");
  }
  router.get("/celebrities", async (req, res, next) => {
    const foundCeleb = await Celebrity.find();
    res.render("celebrities/celebrities", { foundCeleb });
  });
});

module.exports = router;
