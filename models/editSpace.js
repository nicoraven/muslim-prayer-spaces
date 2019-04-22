module.exports = (dbPoolInstance) => {

    let editOne = (input, callback) => {
        // let query = `select * from space where id=${input.id}`;
        // console.log('name: '+input.name);
        // console.log('name: '+input.id);
        let query = `update space
        set name='${input.name}',
        address='${input.address}',
        directions='${input.directions}',
        details='${input.details}',
        modifiedBy='${input.modifiedBy}'
        where id='${input.id}'`;

        dbPoolInstance.query(query,(error, queryResult) => {
            if( error ) {
                console.log('dbPoolInstance query error: ');
                // invoke callback function with results after query has executed
                callback(error, error);
            }
            else {
                callback(null, 'update completed!');
            }
        });
    };

    return {
        editOne,
    };
};