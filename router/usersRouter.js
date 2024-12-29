//External import
const express = require("express");

//Internal Emport
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");

const router = express.Router();

// users Page
router.get("/", decorateHtmlResponse("Users"), getUsers);
//add user
router.post("/", avatarUpload);

module.exports = router;
