const uploader = require("../../utils/singleUploader");

function avatarUpload(req, res, next) {
  const upload = uploader(
    "avatars",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "Only jpeg,jpg,png format allowed!"
  );
  console.log("Checking request headers:", req.headers);
  //call the middleware function
  upload.any()(req, res, (err) => {
    console.log(req.body);
    if (err) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err.message,
          },
        },
      });
    } else {
      console.log("File upload successful, proceeding to next middleware.");
      next();
    }
  });
}

module.exports = avatarUpload;
