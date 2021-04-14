const admin = require("./models/manager.js");
const { Router } = require("express");
var bcrypt = require("bcryptjs");

const router = Router();


///////////////----manager create 
router.post('/signupManager',async(req,res)=>{
    console.log(req.body);
    var email = req.body.email ;
    var password = req.body.password ; 
    manager.create({
        username:username,
        email:email,
        password:password,
    })
    console.log('you data has been saved');
})


//////////-----------manager login
router.post("/loginManager", async (req, res) => {
    const manager = req.body;
    console.log(req.body);
    try {
      manager.findOne({ email: manager.manageremail }, (err, doc) => {
        if (!doc) {
          res.json("manager_not_found");
        } else {
          bcrypt.compare(manager.password, doc.password, function (err, result) {
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



