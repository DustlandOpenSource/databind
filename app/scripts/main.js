var user = new User( 123 );
user.set( "name", "Wolfgang" );

var change = document.getElementById("changeName");

change.onclick  = function() {
	user.set( "name", "Mark" );
};