const express = require('express');
const router = express.Router();
const plantsController = require('../controllers/plantsController');

//get all plant information
router.get('/', 
    plantsController.getAllPlants,
    (req,res) => {
        console.log("Getting all plants");
        res.status(200).json(res.locals.allPlants)
    });

// POST a new plant 
router.post('/',
    plantsController.addPlant,
    (req, res) => {
        res.status(200).json(res.locals.newPlant)
    })

//GET a single plant ID
router.get('/:id',
    plantsController.getOnePlant,
    (req,res) => {
        res.status(200).json(res.locals.chosenPlant)
    })

//DETELE a plant
router.delete('/:id',
    plantsController.deletePlant,
    (req,res) => {
        res.status(200).json(res.locals.deletePlant)
    })

//UPDATE a plant
router.patch('/:id',
    plantsController.updatePlant,
    (req,res) => {
        res.status(200).json(res.locals.updatePlant)
    })

module.exports = router;