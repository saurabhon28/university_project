const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const servicesController = require("./controllers/serviceController");
const adminController = require("./controllers/adminController");

const upload = multer({ dest: "uploads/" });

const PORT = 8080;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

mongoose
  .connect("mongodb://127.0.0.1:27017/university")
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Connection Failed"));

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api/services", servicesController.getServices);
app.get("/admin/admins", adminController.getAdmin);
app.post(
  "/api/services",
  upload.single("image"),
  servicesController.addServices
);
app.post("/admin/add", adminController.addAdmin);
app.post("/admin/login", adminController.loginAdmin);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
