exports.getUserInfo = function( username, connection ){
	return new Promise( function(resolve, reject){

		var params = [];
		var queryid = "getUserInfo";
		params.push( {"EMP_NO": username.replace( /dsg\\/gi, "" ) } );

		logger.debug( "username :", username.replace( /dsg\\/gi, "" ) );

		mssqlHandler.executeQuery( queryid, params, connection.mssqlConnection )
		.then( function(queryResults){
			resolve( queryResults );
		} )
		.catch( function(err){
			logger.error( err );
			reject( err );
		} );
	} );
}