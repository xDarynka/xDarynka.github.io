
function NotificationManager(){
 this.timeOut = 0;
 this.isTimeoutEnable = true;
 this.notificationArea = null;
 this.activeNotifications = [];
 this.MaxNotifications = 5;
 this.createNotificationArea();
 return this;

 }


NotificationManager.prototype.setNotificationTimeout = function(value){
		  this.timeOut = value;
	}
	


NotificationManager.prototype.createNotificationArea = function(){
	var nAreaDiv = document.createElement('div');
	nAreaDiv.className = 'notification-area';
	nAreaDiv.id = "na";
	document.getElementsByTagName('body')[0].appendChild(nAreaDiv);
	this.notificationArea = nAreaDiv;
	
}


NotificationManager.prototype.showNotificationError = function(text){
	this.showNotification(text,'notification-error notification')
	
}


NotificationManager.prototype.showNotificationInfo = function(text){
	this.showNotification(text,'notification-info notification')
	
}


NotificationManager.prototype.showNotificationSuccess = function(text){
	this.showNotification(text,'notification-success notification')
	
}

NotificationManager.prototype.showNotification = function(text, className){
	var notificationDiv = document.createElement('div');
	this.notificationArea.appendChild(notificationDiv);
	notificationDiv.className = className;
	notificationDiv.innerHTML = text;
	this.activeNotifications.push(notificationDiv);
	this.checkMaxNotifications();
	var self = this;

	if (this.isTimeoutEnable){
		setTimeout(function(){
				self.removeNotificationDiv(notificationDiv);
			}, this.timeOut);
	}

	notificationDiv.addEventListener('click', function(){
		self.removeNotificationDiv(notificationDiv);
	});
	
}

NotificationManager.prototype.checkMaxNotifications = function(){
	if(this.activeNotifications.length > this.MaxNotifications){
		var removedNotificationDiv = this.activeNotifications[0];
	    this.removeNotificationDiv(removedNotificationDiv);
	}
}

NotificationManager.prototype.removeNotificationDiv  = function(notificationDiv){
	var notificationIndex = this.activeNotifications.indexOf(notificationDiv);
	if (notificationIndex != -1) {
		this.activeNotifications.splice(0, 1);
	};
	if (notificationDiv.parentNode == this.notificationArea) {
			this.notificationArea.removeChild(notificationDiv);
		}
	
}


NotificationManager.prototype.enableTimeout = function(){
	this.isTimeoutEnable = true;
}

NotificationManager.prototype.disableTimeout = function() {
	this.isTimeoutEnable = false;
}


