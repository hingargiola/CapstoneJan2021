const express = require("express");
const FrenchBread = require("../models/movement").model;
const router = express.Router();

router.post("/", (request, response) => {
  const newFrenchBread = new FrenchBread(request.body);
  newFrenchBread.save((err, frenchBread) => {
    return err ? response.sendStatus(500).json(err) : response.json(frenchBread);
  });
});

router.get("/", (request, response) => {
  FrenchBread.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.get("/:id", (request, response) => {
  FrenchBread.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.delete('/:id', (request, response) => {
  FrenchBread.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data)
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  FrenchBread.findByIdAndUpdate(
    request.params.id,
    {
      $set: {

      }
    },
    (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(request.body);
    }
  );
});


module.exports = router;
