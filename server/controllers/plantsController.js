const models = require('../models/plantsModel');

const plantsController = {};

plantsController.getAllPlants = (req, res, next) => {
    models.Plants.find()
      .then(allPlants => {
        res.locals.allPlants = allPlants;
        next();
      })
      .catch(err => {
        next({
            log: 'Error in plantsController.getAllPlants',
            message: {err: 'Error in plantsController.getAllPlants'}
          })
      })
};

plantsController.addPlant =  (req, res, next) => {
    // const { plant_name, date_adopted, watering, sunlight, additional_notes } = req.body;
    models.Plants.create(req.body)
    .then(newPlant => {
        res.locals.newPlant = newPlant;
        next()
    })
    .catch(err => {
        next({
            log: 'Error in plantsController.addPlant',
            message: {err: 'plantsController.addPlant'}
          })
      })
}

plantsController.getOnePlant =  (req, res, next) => {
    models.Plants.findById(req.params.id)
      .then(chosenPlant => {
        res.locals.chosenPlant = chosenPlant;
        next();
      })
      .catch(err => {
        next({
            log: 'Error in plantsController.getOnePlant',
            message: {err: 'Error in plantsController.getOnePlant'}
          })
      })
};


plantsController.deletePlant =  (req, res, next) => {
  models.Plants.findOneAndDelete({_id: req.params.id})
    .then(deletePlant => {
      res.locals.deletePlant = deletePlant;
      next();
    })
    .catch(err => {
      next({
          log: 'Error in plantsController.deletePlant',
          message: {err: 'Error in plantsController.deletePlant'}
        })
    })
};

plantsController.updatePlant =  (req, res, next) => {
  const updateQuery = {};
  for (const key of Object.keys(req.body)){
      if (req.body[key] !== '') {
        updateQuery[key] = req.body[key];
      }
  }
  models.Plants.findOneAndUpdate({_id: req.params.id}, updateQuery, {new: true})
    .then(updatePlant => {
    res.locals.updatePlant = updatePlant;
    next();
  })
  // models.Plants.findOneAndUpdate({_id: req.params.id}, {...req.body})
  //   .then(updatePlant => {
  //     res.locals.updatePlant = updatePlant;
  //     next();
  //   })
    .catch(err => {
      next({
          log: 'Error in plantsController.updatePlant',
          message: {err: 'Error in plantsController.updatePlant'}
        })
    })
};


module.exports = plantsController;