import User from "../models/user.model.js";



export const registerUser = (req, res) => {
  
    try {
      console.log("sahdsabjdkh");
      var fname = req.body.firstName;
      var lname = req.body.lastName;
      var newName = fname + " " + lname;
      const newUser = {
        name: newName,
        email: req.body.email,
        password: req.body.password,
        studentId:req.body.studentId
      };
      console.log(newUser);
        User.create(newUser, function (err, data) {
          if (err) {
            console.log(err);
          } else {
            res.status(200).json(data);
          }
        });
      
    } catch (e) {
     
      console.log(e);
    }
  };
  export const loginUser = (req, res) => {
    try {
      User.findOne({ email: req.body.email }, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          if (data !== undefined && data !== null) {
            res.status(200).json({data:data , msg:"login"});
          } else {
            res.status(200).json({msg:"incorrect username"});
          }
        }
      });
    } catch (e) {
      console.log(e);
    }
  };