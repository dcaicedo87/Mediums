const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { User, Story, Comment } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

// GET all stories
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const data = await Story.findAll({
      order: [["createdAt", "DESC"]],
    });
    return res.json(data);
  })
);

const validatePost = [
  check("title")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a title."),
  check("body")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a story with at least 4 characters."),
  handleValidationErrors,
];

// POST a new story
router.post(
  "/",
  validatePost,
  asyncHandler(async (req, res) => {
    const { authorId, imageUrl, title, body } = req.body.story;

    const newStory = {
      authorId,
      imageUrl,
      title,
      body,
    };

    await Story.create(newStory);
    res.json(newStory);
  })
);

// GET a single story
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;

    const singleStory = await Story.findByPk(id);

    res.json(singleStory);
  })
);

// GET stories by authorId
router.get(
  "/author/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;

    const authorStories = await Story.findAll({
      where: { authorId: id },
    });

    res.json(authorStories);
  })
);

// DELETE stories
router.delete(
  "/:id",
  asyncHandler(async function (req, res) {
    const story = await Story.findByPk(req.params.id);
    if (!story) throw new Error("Cannot find Story");

    //can use req.params.id or story.id
    await Story.destroy({ where: { id: req.params.id } });
    return res.json({ id: story.id });
  })
);

module.exports = router;
