const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require('multer');
// const uuidv4 = require('uuid');
const User = require("../model/user");

const router = express.Router();
const DIR = "";
const uuidv4 = require('uuid').v4;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'public');
  },
  filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, uuidv4() + '-' + fileName)
  }
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
      } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
  }
});

router.post("/register", upload.single('logo'), async (req, res) => {
  console.log("test",req.file)
  const url = req.protocol + '://' + req.get('host')
  console.log("url",url)
  const profileImg =  url  +"/admin/"+ req&&req.file&& req.file.filename&& req.file.filename
  try {
    //get user input
    const {
      user_role,
      plan,
      first_name,
      middle_name,
      last_name,
      email,
      password,
      mobile,
      company_name,
      company_type,
      cin,
      msme,
      pan,
      gst,
      c_address1,
      c_address2,
      c_landmark,
      c_city,
      c_state,
      b_address1,
      b_address2,
      // b_landmark,
      b_city,
      b_state,
      company_category,
      annual_sales,
      website,
      instagram,
      facebook,
      employee_no,
      company_across_india,
      family_name,
      name,
      
      
    } = req.body;

    //validate user input
    // if (!(email && password)) {
    //   res.status(400).send("All input is required");
    // }
    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }
    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
      user_role,
      plan,
      first_name,
      middle_name,
      last_name,
      mobile,
      company_name,
      company_type,
      cin,
      msme,
      pan,
      gst,
      c_address1,
      c_address2,
      c_landmark,
      c_city,
      c_state,
      b_address1,
      b_address2,
      // b_landmark,
      b_city,
      b_state,
      company_category,
      annual_sales,
      website,
      instagram,
      facebook,
      employee_no,
      company_across_india,
      family_name,
      logo:profileImg
    });
    // Create token
    const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY);
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    // get user input
    const { email, password } = req.body;
    // validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // validate if user exist in our database
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      //create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY
      );

      //save user token
      user.token = token;

      // return response
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
});

router.get("/users", async(req,res)=>{
  let query = req.query;
  let page = query.page;
  let per_page = query.per_page;
  let company_name = query.company_name;
  let role = query.user_role
  const queryObj = {};
  if (role === "super_admin" ) {
    console.log("all jobs");
  } else {
    queryObj["company_name"] = company_name;
  }
  let userData = await User.find(queryObj)
  .limit(Number(per_page))
  .skip(Number(per_page) * (Number(page) - 1))
  .sort("desc");
res.status(200).json(userData);
})


module.exports = router;
