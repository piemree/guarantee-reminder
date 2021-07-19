const express = require("express");
const router = express.Router();
const Guarantee = require("../../models/guarantee");
const guaranteeMiddleware = require("../../middlewares/guaranteeMiddleware");
const updateMaintance = require("../../utils/database/updateMaintance");

router.post("/add", async (req, res) => {
  const guarantee = new Guarantee(req.body);

  try {
    const doc = await guarantee.save();
    res.status(201).json(doc);
  } catch (error) {
    res.send(error);
  }
});

router.put("/update-maintance", async (req, res) => {
  const { _id, maintance } = req.body;

  Guarantee.updateMaintance(_id, maintance._id, maintance.checked,Guarantee)
    .then((doc) => res.status(200).json(doc))
    .catch((err) => res.status(405).json(err));
});

module.exports = router;
