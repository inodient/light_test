exports.insertFailure = function( failureInfo, connection ){
	return new Promise( function(resolve, reject){

		var _current = new Date();
		var current = _current.toISOString();

		var params = [];
		var queryId = "insertFailure"
		params.push( {"MODEL": (failureInfo["input-model"]).trim() } );
		params.push( {"IMAGE": (failureInfo["input-imagename"]).trim() } );
		params.push( {"FAILURE": (failureInfo["input-failure"]).trim() } );
		params.push( {"DATE": current } );

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