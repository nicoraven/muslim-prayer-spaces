module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  All routes go here
   *  =========================================
   *  =========================================
   */

  // require the controller
  const controller = require('./controllers/mastercontroller')(allModels);

  app.get('/', controller.index);

  app.get('/spaces/:id', controller.viewSpace)

  app.get('/spaces', controller.spaces);

};