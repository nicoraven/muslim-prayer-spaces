module.exports = (dbPoolInstance) => {

    let deleteOne = (input, callback) => {
        // console.log('input: '+input);
        let query = `delete from space where id='${input.id}'`;

        dbPoolInstance.query(query,(error, queryResult) => {
            if( error ) {
                console.log('dbPoolInstance query error: ');
                // invoke callback function with results after query has executed
                callback(error, error);
            }
            else {
                callback(null, 'delete completed!');
            }
        });
    };

    return {
        deleteOne,
    };
};