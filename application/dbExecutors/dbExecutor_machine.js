exports.getModelInfoList = function( connection ){
	return new Promise( function(resolve, reject){
		var params = [];
		var queryId = "getModelInfoList";

		mssqlHandler.executeQuery( queryId, params, connection.mssqlConnection )
		.then( function(queryResults){
			resolve( queryResults );
		} )
		.catch( function(err){
			logger.error( err );
			reject( err );
		} );
	} );
}