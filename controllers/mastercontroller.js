module.exports = (db) => {

/**
* ===========================================
* Controller logic
* ===========================================
*/

let indexPage = (req, res) => {
    // db.index.getAll((error, allLocations) => {
    //     // console.log(allLocations);
    //     res.render('main/index', {list: allLocations});
    // });
    res.redirect('/spaces')
};

let spacesListPage = (req, res) => {
    db.index.getAll((error, allSpaceLocations) => {
        // console.log(allLocations);
        // res.send('test ok!')
        res.render('spaces/allSpaces', {list: allSpaceLocations});
    });
};

let spacePage = (req, res) => {
    let spaceId = parseInt( req.params.id );
    // console.log(mosqueId);
    db.space.getOne(spaceId, (error, spaceDetails) => {
        // console.log('mosqueDetails: ' + mosqueDetails);
        // res.send('test ok!');
        res.render('spaces/ViewSpaceDetails', {space: spaceDetails});
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
    spaces: spacesListPage,
    viewSpace: spacePage,
};

}