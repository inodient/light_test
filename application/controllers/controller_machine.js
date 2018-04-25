var machineService = require( require("path").join( process.cwd(), "application", "services", "service_machine.js" ) );




exports.control_list_machine = function( req, res, connection ){
	return new Promise( function( resolve, reject ){
		machineService.getModelInfoList( req, res, connection )
		.then( function( results ){
			logger.debug( results );
			resolve( {"machines" : results} );
		} )
		.catch( function(err){
			reject( err );
		} )
	} );
}