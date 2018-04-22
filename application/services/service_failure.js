var failureDbExecutor = require( require("path").join( process.cwd(), "application", "dbExecutors", "dbExecutor_failure.js" ) );





exports.getFailureList = function( req, res, connection ){
	return new Promise( function(resolve, reject){
		
	} );
}

exports.saveFailure = function( req, res, connection ){
	return new Promise( function( resolve, reject ){

		logger.debug( typeof req.body );
		logger.debug( req.body );

		failureDbExecutor.insertFailure( req.body, connection )
		.then( function( results ){
			// logger.debug( results );
			resolve( {} );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}