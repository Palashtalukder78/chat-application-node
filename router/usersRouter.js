//External import
const express = require("express");

//Internal Emport
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const { addUserValidator } = require("../middlewares/users/usersValidator");

const router = express.Router();

// users Page
router.get("/", decorateHtmlResponse("Users"), getUsers);
//add user
router.post("/", avatarUpload, addUserValidator);

module.exports = router;
