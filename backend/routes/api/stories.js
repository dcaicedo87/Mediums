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
      include: [Comment, User],
      order: [["createdAt", "DESC"]],
    });
    return res.json(data);
  })
);

const validatePost = [
  check("title")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a title that is longer than 4 characters."),
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
    const { authorId, imageUrl, title, body } = req.body;
    // console.log(`\n\n\n\n ${authorId} \n\n\n\n`);
    // console.log(`\n\n\n\n ${imageUrl} \n\n\n\n`);
    // console.log(`\n\n\n\n ${title} \n\n\n\n`);
    // console.log(`\n\n\n\n ${body} \n\n\n\n`);

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
    const comment = await Comment.findAll({
      where: {
        storyId: id,
      },
      include: {
        model: User,
      },
    });

    res.json({ singleStory, comment });
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
    await story.destroy();
    return res.json(story);
  })
);

const validateStoryPut = [
  check("title")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a title that is longer than 4 characters."),
  check("body")
    .isLength({ min: 4 })
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a story with at least 4 characters."),
  handleValidationErrors,
];

router.put(
  "/:id",
  validateStoryPut,
  asyncHandler(async (req, res) => {
    console.log(`ROUTER.PUT PARAMS:`, req.params);
    const storyId = parseInt(req.params.id);
    const { imageUrl, title, body } = req.body;
    const story = await Story.findOne({
      where: {
        id: storyId,
      },
    });

    if (story) {
      await story.update({
        imageUrl,
        title,
        body,
      });
    }
    return res.json(story);
  })
);

module.exports = router;
