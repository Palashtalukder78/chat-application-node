//External import
const express = require("express");

//Internal Emport
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

// Login Page
router.get("/", decorateHtmlResponse("Users"), getUsers);

module.exports = router;
