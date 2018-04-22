exports.getUserInfo = function( username, connection ){
	return new Promise( function(resolve, reject){

		var params = [];
		var queryid 
		params.push( {"EMP_NO":'i0198101'} );

		mssqlHandler.executeQuery( "getUserInfo", params, connection.mssqlConnection )
		.then( function(queryResults){
			resolve( queryResults );
		} )
		.catch( function(err){
			logger.error( err );
			reject( err );
		} );
	} );
}