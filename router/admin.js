const express = require("express");
const router = new express.Router();
const { ObjectId } = require("mongodb");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const validator = require("validator");
const cron = require("node-cron");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");
const multer = require("multer");
const auth = require("../middleware/auth");
const providerRegister = require("../model/providerregister");
const emailvarify = require("../model/emailotp");
const mirsal = require("../model/mirsal")
const { profile } = require("console");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const qr = require('qr-image');
var dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
// require("../database/db");
router.use(cors());
router.use(cookieparser());
router.use(bodyparser.urlencoded({ extended: true }));
router.use(express.urlencoded({ extended: false }));
router.use(bodyparser.json());
router.use(express.json());
const mailgun = require("mailgun-js");
const mailGun = process.env.mailGun;
const DOMAIN = mailGun;
const Email_otp_pass = process.env.Email_otp_pass;
const C_cloud_name = process.env.C_cloud_name;
const C_api_key = process.env.C_api_key;
const C_api_secret = process.env.C_api_secret;
const MailGun_api_key = process.env.MailGun_api_key;
cloudinary.config({
  cloud_name: C_cloud_name,
  api_key: C_api_key,
  api_secret: C_api_secret,
});
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.use("/ProfileImage", express.static("public/upload"));
router.use("/image", express.static("public/upload"));
router.use("/categoryThumbnail", express.static("public/upload"));
router.get("/test", async (req, res) =>
{
  try {

    res.status(200).json({
      status: 200,
      message: "Success cicd pipline",
      data: null,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
      data: null,
    });
  }
});






module.exports = router;
