//External import
const express = require("express");

//Internal Emport
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

// Login Page
router.get("/", decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;
