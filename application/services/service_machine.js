var machineDbExecutor = require( require("path").join( process.cwd(), "application", "dbExecutors", "dbExecutor_machine.js" ) );





exports.getModelInfoList = function( req, res, connection ){
	return new Promise( function(resolve, reject){
		machineDbExecutor.getModelInfoList( connection )
		.then( function( queryResults ){
			resolve( queryResults.results.recordset );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}
