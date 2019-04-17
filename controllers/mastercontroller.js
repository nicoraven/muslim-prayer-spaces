module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  // let indexControllerCallback = (request, response) => {
  //     db.pokemon.getAll((error, allPokemon) => {
  //       response.render('pokemon/index', { allPokemon });
  //     });
  // };

  let testdefault = (req, res) => {
    // res.send('test ok!')
    res.render('main/index');
  }

  let users = (req, res) => {
    db.users.getAll((error, allUsers) => {
      console.log(allUsers);
      res.send('done');
      // res.render('pokemon/index', { allUsers });
    });
  }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    users: users,
    // index: indexControllerCallback,
    testdefault: testdefault,
  };

}