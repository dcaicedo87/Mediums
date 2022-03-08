const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { User, Story, Comment } = require("../../db/models");

// GET all stories
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const data = await Story.findAll({});
    res.json({ data });
  })
);

module.exports = router;
