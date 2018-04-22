var failureService = require( require("path").join( process.cwd(), "application", "services", "service_failure.js" ) );




exports.control_view_content = function( req, res, connection ){
	// return new Promise( function(resolve, reject){
	// 	imageService.imageUpload( req, res, connection )
	// 	.then( function(results){
	// 		resolve( results );
	// 	} )
	// 	.catch( function(err){
	// 		reject( err );
	// 	} );
	// } );
}

exports.control_save_failure = function( req, res, connection ){
	return new Promise( function( resolve, reject ){
		failureService.saveFailure( req, res, connection )
		.then( function(){
			resolve( {} );
		} )
		.catch( function(err){
			reject( err );
		} )
	} );
}