const express = require("express");
const Movement = require("../models/movement");
const router = express.Router();

router.post("/", (request, response) => {
  const newFrenchBread = new FrenchBread.model(request.body);
  newFrenchBread.save((err, frenchBread) => {
    return err ? response.sendStatus(500).json(err) : response.json(frenchBread);
  });
});

router.post("/", (request, response) => {
  const newFrenchBread = new frenchBread.model(request.body);
  newFrenchBread.save((err, frenchBread) => {
    return err ? response.sendStatus(500).json(frenchBread) : response.json(err);
  });
});

router.get("/", (request, response) => {
  frenchBread.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.get("/:id", (request, response) => {
  frenchBread.model.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.delete('/:id', (request, response) => {
  frenchBread.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data)
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  frenchBread.model.findByIdAndUpdate(
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
