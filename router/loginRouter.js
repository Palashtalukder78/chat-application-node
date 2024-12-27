//External import
const express = require("express");

//Internal Emport
const { getLogin } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

// Login Page
router.get("/", decorateHtmlResponse("Login"), getLogin);

module.exports = router;
