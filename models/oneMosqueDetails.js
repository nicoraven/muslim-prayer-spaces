module.exports = (dbPoolInstance) => {
    // dbPoolInstance is accessible within this function scope

    let getOne = (mosqueId, callback) => {
        // console.log('getOne mosqueId: '+mosqueId);
        let query = `select * from mosque where id=${mosqueId}`;
        // console.log(query);

        dbPoolInstance.query(query,(error, queryResult) => {
            if( error ) {
                console.log('dbPoolInstance query error');
                // invoke callback function with results after query has executed
                callback(error, null);
            }
            else {
                // invoke exports callback function with results after query has executed
                // console.log('queryResult: '+queryResult.rows);
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