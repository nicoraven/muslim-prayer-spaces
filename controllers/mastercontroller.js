module.exports = (db) => {

/**
* ===========================================
* Controller logic
* ===========================================
*/

let indexPage = (req, res) => {
    db.index.getAll((error, allLocations) => {
        // console.log(allLocations);
        // res.redirect('/')
        res.render('main/index', {list: allLocations});
    });
};

let mosquesListPage = (req, res) => {
    db.index.getAll((error, allMosqueLocations) => {
        // console.log(allLocations);
        // res.send('test ok!')
        res.render('mosques/mosques', {list: allMosqueLocations});
    });
};

let mosquePage = (req, res) => {
    let mosqueId = parseInt( req.params.id );
    console.log(mosqueId);
    db.mosque.getOne((error, mosqueDetails) => {
        res.send('test ok!');
        // res.render(`mosques/${mosqueId}`, {mosque: mosqueDetails});
    });
};

/**
* ===========================================
* Export controller functions as a module
* ===========================================
*/

return {
    // index: indexControllerCallback,
    index: indexPage,
    mosques: mosquesListPage,
    viewMosque: mosquePage,
};

}