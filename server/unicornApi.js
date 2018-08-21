const router = require("express").Router();
const { Unicorn } = require("./unicorn");

router.get("/unicorns", async (req, res, next) => {
  try {
    const unicorns = await Unicorn.findAll();
    res.json(unicorns);
  } catch (err) {
    next(err);
  }
});

router.get("/unicorns/:id", async (req, res, next) => {
  try {
    const unicorn = await Unicorn.findOne({ where: { id: req.params.id } });
    res.json(unicorn);
  } catch (err) {
    next(err);
  }
});

// router.post();

module.exports = router;
