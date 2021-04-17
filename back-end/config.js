const { response } = require("express");
const express = require("express");
const router = express.Router();
const { user } = require("./models/user");
/////checking user from user component/////
router.post("/login", (req, res) => {
    user.findOne({ username: req.body.email }, (err, docs) => {
      if (!err) {
        try {
          if (req.body.pass === docs.password) {
            res.json(docs);
          }
        } catch (error) {
          console.log("user not found");
        }
      }
    });
  });
  //////geting specific user ////////////
  router.post("/users", (req, res) => {
    user.findOne({ username: req.body.username }, (err, doc) => {
      try {
        res.json(doc.points);
      } catch (error) {}
    });
  });
  
  ///////creating user 
  router.post("/adduser", (req, res) => {});
  ////////
  router.put("/:id", (req, res) => {
      if(req.params.id){
          console.log(req.params.id);

      }
  });
  
  module.exports = router;