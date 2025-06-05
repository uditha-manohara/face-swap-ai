require("dotenv").config();
const express = require("express");
const multer = require("multer");
const axios = require("axios");
const FormData = require("form-data");
const cors = require("cors");

const app = express();
const upload = multer();
app.use(cors());

app.post("/swap", upload.fields([{ name: "source" }, { name: "target" }]), async (req, res) => {
  try {
    const formData = new FormData();
    formData.append("source", req.files.source[0].buffer, {
      filename: req.files.source[0].originalname,
    });
    formData.append("target", req.files.target[0].buffer, {
      filename: req.files.target[0].originalname,
    });

    const response = await axios.post("https://api.segmind.com/v1/swapface", formData, {
      headers: {
        ...formData.getHeaders(),
        "x-api-key": process.env.SEGMIND_API_KEY,
      },
      responseType: "arraybuffer",
    });

    res.set("Content-Type", "image/png");
    res.send(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to swap faces.");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
