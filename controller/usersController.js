const bcrypt = require("bcrypt");
// internal imports
const User = require("../models/People");

//Get Users page
async function getUsers(req, res, next) {
  // res.render("users");
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
}

async function addUser(req, res, next) {
  console.log("Request Files:", req.files);
  console.log("Request Body:", req.body);

  let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  if (req.files && req.files.length > 0) {
    newUser = new User({
      ...req.body,
      avatar: req.files[0].filename,
      password: hashedPassword,
    });
  } else {
    newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
  }
  //save user or send error
  try {
    const result = await newUser.save();
    res.status(200).json({
      message: "User added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error Occured",
        },
      },
    });
  }
}
module.exports = { getUsers, addUser };
