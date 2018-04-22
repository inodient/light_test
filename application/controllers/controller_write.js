var imageService = require( require("path").join( process.cwd(), "application", "services", "service_image.js" ) );




exports.control_upload_image = function( req, res, connection ){
	return new Promise( function(resolve, reject){
		imageService.imageUpload( req, res, connection )
		.then( function(results){
			resolve( results );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}