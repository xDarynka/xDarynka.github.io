
document.addEventListener('DOMContentLoaded', (function(){

	var nm = new NotificationManager();
	nm.setNotificationTimeout(10000);
	document.getElementById('btn-success').addEventListener('click', (function(){
		nm.showNotificationSuccess('Success!');
	}))

	document.getElementById('btn-error').addEventListener('click', (function(){
		nm.showNotificationError('Error');
	}))

	document.getElementById('btn-info').addEventListener('click', function(){
		nm.showNotificationInfo('Information');
	})

	document.getElementById('btn-enable').addEventListener('click', function(){
		nm.enableTimeout();
	})

	document.getElementById('btn-disable').addEventListener('click', function(){
		nm.disableTimeout();
	})
	
}), false);

