app.factory ('UserService',function($resource){
	return $resource ('https://jsonplaceholder.typicode.com/users/:user', {user:'@user'});
});