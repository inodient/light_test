var imageDbExecutor = require( require("path").join( process.cwd(), "application", "dbExecutors", "dbExecutor_image.js" ) );




exports.imageUpload = function( req, res, connection ){
	return new Promise( function(resolve, reject){
		fileHandler.uploadFile( req, "image" )
		.then( function(results){

			var imageInfo = {
				"originalFileName" : results.originalFileName,
				"savedFileName": results.savedFileName,
				"path": results.destDir
			}

			imageDbExecutor.insertImageInfo( imageInfo, connection )
			.then( function(_result){
				resolve( imageInfo );
			} )
			.catch( function(err){
				reject( err );
			} );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}