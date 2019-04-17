module.exports = (dbPoolInstance) => {
    // dbPoolInstance is accessible within this function scope

    let getOne = (callback) => {
        // console.log(mosque.id);
        let query = 'select * from mosque where id=2';

        dbPoolInstance.query(query, (error, queryResult) => {
            if( error ) {
                // invoke callback function with results after query has executed
                callback(error, null);
            }
            else {
                // invoke exports callback function with results after query has executed
                if( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);
                }
                else {
                    callback(null, null);
                }
            }
        });
    };

    return {
        getOne,
    };
};