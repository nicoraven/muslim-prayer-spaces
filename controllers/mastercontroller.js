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
    db.space.getOne(spaceId, (error, spaceDetails) => {
        // res.send('test ok!');
        res.render('spaces/ViewSpaceDetails', {space: spaceDetails});
    });
};

let viewEditPage = (req, res) => {
    let spaceId = parseInt( req.params.id );
    // console.log(mosqueId);
    db.space.getOne(spaceId, (error, spaceDetails) => {
        // res.send('test ok!');
        res.render('spaces/EditSpaceDetails', {space: spaceDetails});
    });
};

let editPage = (req, res) => {
    let spaceId = parseInt( req.params.id );
    let userInput = req.body;
    // console.log(userInput);
    db.editSpace.editOne(userInput, (error, editResult) => {
        console.log(editResult);
        // res.send('ok');
        res.redirect(`${spaceId}`);
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
    viewEditSpace: viewEditPage,
    editSpace: editPage,
};

}