const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// Set up GET by ID, UPDATE and DELETE at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// Set up ADD Reactions
router
    .route('/:thoughtId/reactions/')
    .post(addReaction)

// Set up DELETE Reactions
router
    .route.route('/:thoughtId/reactions/:reactionsId')
    .delete(removeReaction);

module.exports = router;