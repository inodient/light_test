var failureDbExecutor = require( require("path").join( process.cwd(), "application", "dbExecutors", "dbExecutor_failure.js" ) );





exports.getModelList = function( req, res, connection ){
	return new Promise( function(resolve, reject){
		failureDbExecutor.getModelList( connection )
		.then( function( queryResults ){
			resolve( queryResults.results.recordset );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}

exports.getFailureList = function( req, res, connection ){
	return new Promise( function(resolve, reject){
		failureDbExecutor.getFailureList( connection )
		.then( function( queryResults ){
			var res = queryResults.results.recordset;

			for( var i=0; i<res.length; i++ ){
				res[i].CREATE_DATE = ( (res[i].CREATE_DATE).toISOString() ).split("T")[0];
				res[i].FAILURE = ( res[i].FAILURE ).substring( 0, 180 ) + " ...";
			}

			resolve( queryResults.results.recordset );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}

exports.getFailure = function( req, res, connection ){
	return new Promise( function(resolve, reject){

		var fail_id = req.params.id;

		failureDbExecutor.getFailure( fail_id, connection )
		.then( function( queryResults ){
			var res = queryResults.results.recordset;

			res[0].CREATE_DATE = ( (res[0].CREATE_DATE).toISOString() ).split("T")[0];
			
			resolve( (queryResults.results.recordset)[0] );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}

exports.saveFailure = function( req, res, connection ){
	return new Promise( function( resolve, reject ){

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

