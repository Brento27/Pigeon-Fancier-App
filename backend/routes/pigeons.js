const express = require('express');
const Pigeon = require('../modals/pigeon');
const router = express.Router();

// Getting all
router.get('/', async (req, res) => {
  try {
    const pigeons = await Pigeon.find();
    res.json(pigeons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting one
router.get('/:id', getPigeon, (req, res) => {
  res.send(res.pigeon);
});

// Creating one
router.post('/', async (req, res) => {
  const pigeon = new Pigeon({
    loftName: req.body.loftName,
    letters: req.body.letters,
    ringNo: req.body.ringNo,
    sex: req.body.sex,
    createdDate: req.body.createdDate,
  });
  try {
    const newPigeon = await pigeon.save();
    res.status(201).json(newPigeon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating one
router.patch('/:id', getPigeon, async (req, res) => {
  if (req.body.loftName != null) {
    res.pigeon.loftName = req.body.loftName;
  }
  if (req.body.letters != null) {
    res.pigeon.letters = req.body.letters;
  }
  if (req.body.ringNo != null) {
    res.pigeon.ringNo = req.body.ringNo;
  }
  if (req.body.sex != null) {
    res.pigeon.sex = req.body.sex;
  }
  if (req.body.year != null) {
    res.pigeon.year = req.body.year;
  }
  if (req.body.colour != null) {
    res.pigeon.colour = req.body.colour;
  }
  if (req.body.dam != null) {
    res.pigeon.dam = req.body.dam;
  }
  if (req.body.sire != null) {
    res.pigeon.sire = req.body.sire;
  }
  try {
    const updatedPigeon = await res.pigeon.save();
    res.json(updatedPigeon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting one
router.delete('/:id', getPigeon, async (req, res) => {
  try {
    await res.pigeon.remove();
    res.json({ message: 'Deleted Pigeon' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getPigeon(req, res, next) {
  let pigeon;
  try {
    pigeon = await Pigeon.findById(req.params.id);
    if (pigeon == null) {
      return res.status(404).json({ message: 'Cannot find pigeon' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.pigeon = pigeon;
  next();
}

module.exports = router;
