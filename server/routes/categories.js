const express = require("express");
const router = express.Router();
const Category = require("../models/categories");

router.get("/", (req, res, next) => {
  const category = Category.find();
  if (!category) res.status(400).send("no category found");
  res.status(200).json({
    category,
  });
});

router.post("/", async (req, res) => {
  try {
    const category = await Category.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        data: category,
      },
    });
  } catch (error) {
    res.status(error.status).json({
      status: "Unsucessful",
      error,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Category.findById(req.params.id);

    if (!data) res.status(400).send("invalid id");

    res.status(200).json({
      status: "sucessful",
      data,
    });
  } catch (error) {
    res.status(error.status).json({
      status: "Unsucessful",
      error,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!category) res.status(400).send("invalid id");

    res.status(200).json({
      status: "success",
      data: {
        data: category,
      },
    });
  } catch (error) {
    res.status(error.status).json({
      status: "Unsucessful",
      error,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = await Category.findByIdAndDelete(req.params.id);
    if (!id) res.status(400).send("invalid id");

    res.status(201).json({
      status: "sucessful",
      data: null,
    });
  } catch (error) {
    res.status(error.status).json({
      status: "Unsucessful",
      error,
    });
  }
});
