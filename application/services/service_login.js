var loginDbExecutor = require( require("path").join( process.cwd(), "application", "dbExecutors", "dbExecutor_login.js") );





exports.authenticate = function( req, res, connection ){
	return new Promise( function(resolve, reject){
		var ActiveDirectory = require( "activedirectory2" );
		var ad = new ActiveDirectory( require( require("path").join( process.cwd(), "application", "properties", "auth.json" ) ) );

		var username = req.body.username;
		var password = req.body.password;

		// var username = 'minjae2.lee@doosan.com';
		// var password = '111Insert234@';

		logger.debug( username, "/ ", password );
		username = "dsg\\" + username.replace( /dsg\\/gi, "");

		ad.authenticate(username, password, function(err, auth) {
		  if (err) {
		    logger.error('ERROR: '+ JSON.stringify(err));
		    reject( err );
		  }
		 
		  if(auth) {
		    logger.debug('Authenticated!');

		    loginDbExecutor.getUserInfo( username, connection )
		    .then( function( userinfo ){
		    	resolve( {"status" : "S", "message" : "Authentication Completed...", "userinfo":userinfo.results} );
		    } )
		    .catch( function(err){
		    	logger.error( err );
		    	reject( err );
		    } );
		  } else {
		    logger.debug('Authentication failed!');
		    reject( {"status" : "E", "message" : "Authentication failed!"} );
		  }
		});
	} );
}