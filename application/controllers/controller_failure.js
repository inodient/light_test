var failureService = require( require("path").join( process.cwd(), "application", "services", "service_failure.js" ) );




exports.control_load = function( req, res, connection ){
	return new Promise( function(resolve, reject){
		
		failureService.getModelList( req, res, connection )
		.then( function( results ){
			resolve( {"models" : results} );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}

exports.control_load_w_machine = function( req, res, connection ){
	return new Promise( function(resolve, reject){

		var machineId = req.params.target;

		failureService.getModelList( req, res, connection )
		.then( function( results ){
			resolve( {"models" : results, "machineId" : machineId} );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
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

exports.control_list_failure = function( req, res, connection ){
	return new Promise( function( resolve, reject ){
		failureService.getFailureList( req, res, connection )
		.then( function( results ){
			resolve( {"failures" : results} );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}

exports.control_view_failure = function( req, res, connection ){
	return new Promise( function( resolve, reject ){
		failureService.getFailure( req, res, connection )
		.then( function( results ){
			resolve( {"failure" : results} );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}