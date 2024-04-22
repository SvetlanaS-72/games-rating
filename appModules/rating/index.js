const makeRatingFile = require("./rating-file");
const config = require ("./config");
const {PATH_TO_RATING_FILE, WEIGHT} = require("./config")
const { createRating, updateRating } = require("./calculations");

module.exports = {
    makeRatingFile,
    config,
    createRating,
    updateRating,
    PATH_TO_RATING_FILE, 
    WEIGHT
}