module.exports = function(){
	this.check = function(account, password, callback){
		var message = 'login success';
		var error = false;


		if (account != 'test' && error == false) {
			message = 'account error';
			error   = true;
		}

		if (password != 'test' && error == false) {
			message = 'password error';
			error = true;
		}

		callback(message, error);
	}
}