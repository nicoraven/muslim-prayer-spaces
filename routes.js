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

  app.get('/spaces/:id/edit', controller.viewEditSpace);

  app.get('/spaces/:id/delete', controller.viewDeleteSpace);

  app.delete('/spaces/:id', controller.deleteSpace);

  app.put('/spaces/:id', controller.editSpace);

  app.get('/spaces/:id', controller.viewSpace);

  app.get('/spaces', controller.spaces);

};