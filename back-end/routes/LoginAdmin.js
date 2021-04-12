const admin = require("./models/admin.js");
const { Router } = require("express");
var bcrypt = require("bcryptjs");

const router = Router();


//////////-----------admin login
router.post("/loginAdmin", async (req, res) => {
    const admin = req.body;
    console.log(user);
    try {
      users.findOne({ email: admin.adminemail }, (err, doc) => {
        if (!doc) {
          res.json("user_not_found");
        } else {
          bcrypt.compare(user.password, doc.password, function (err, result) {
            if (result !== false) {
              res.status(200).json(doc);
            } else {
              res.status(500).json("wrong infos");
            }
          });
        }
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });







module.exports = router ;



