const serviceModel = require("../models/serviceModel");
const jwt = require("jsonwebtoken");

module.exports.getServices = async (req, res) => {
  const data = await serviceModel.find({});
  if (data) {
    return res.send({ code: 200, message: "Success", data: data });
  } else {
    return res.send({ code: 500, message: "Service Error" });
  }
};

module.exports.addServices = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageURL = req.file.path;

  console.log(req.file, req.body);

  try {
    if (!req.headers.authorization) {
      return res.send({ code: 403, message: "No Token" });
    }

    const userDetail = await jwt.verify(req.headers.authorization, "PRIV_123");
    console.log(userDetail);

    if (
      userDetail._doc.type !== "ADMIN" &&
      userDetail._doc.type !== "SUBADMIN"
    ) {
      res.send({ code: 403, message: "Unauthorized..." });
    }

    const tokenValidity = userDetail.iat - new Date().getTime();
    console.log(tokenValidity);

    if (tokenValidity > 3.6e6) {
      res.send({ code: 403, message: "Token Expired...!" });
    }

    if (!title || !description || !imageURL) {
      return res.send({ code: 400, message: "Bad Request" });
    }
    try {
      const newService = new serviceModel({
        title: title,
        description: description,
        imageURL: imageURL,
      });
      const success = await newService.save();
      if (success) {
        return res.send({ code: 200, message: "Added Successfully" });
      }
    } catch (error) {
      return res.send({ code: 500, message: "Service Error" });
    }
  } catch (error) {
    res.send({ code: 500, message: "Internal Server error...!" });
  }
};
