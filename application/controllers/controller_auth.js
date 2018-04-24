var loginService = require( require("path").join( process.cwd(), "application", "services", "service_login.js" ) );
var failureService = require( require("path").join( process.cwd(), "application", "services", "service_failure.js" ) );





exports.control_auth = function( req, res, connection ){
	return new Promise( function(resolve, reject){
		loginService.authenticate( req, res, connection )
		.then( function(auth){

			if( auth ){
				failureService.getFailureList( req, res, connection )
				.then( function( results ){
					resolve( {"failures" : results} );
				} )
				.catch( function(err){
					reject( err );
				} );
			} else{
				reject( err );
			}
		} )
		.catch( function(err){
			logger.error( err );
			reject( err );
		} )
	} );
}