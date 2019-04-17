module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexPage = (req, res) => {
    db.index.getAll((error, allLocations) => {
        // console.log(allLocations);
        // res.send('test ok!')
        res.render('main/index', {list: allLocations});
    });
  }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    // index: indexControllerCallback,
    index: indexPage,
  };

}