
// function NotificationManager()  {

// 	 	showNotification: function(text) {
// 		var div = document.createElement('div');
// 	  	div.className = "notification";
// 	  	document.body.appendChild(div);
// 	 	div.innerHTML = text;
  		
//   		}, 

// 		setNotificationTimeout: function() {
// 	    setTimeout(div.parentNode.removeChild(div));
// 	 	}

// }

// var nm = new NotificationManager();
// nm.showNotification("This is first notification");


/* теперь нужен метод showNotification, который будет добавлять в эту область дивы с уведомлениями
и создать кнопку, где будет onclick = nm.showNotification("text here")
 хотя я бы подписывался так
$('#btnShowNotification').click(nm.showNotification("textHere")) */



function NotificationManager(){
 this.timeOut =0;
 return this;

 }


NotificationManager.prototype.setNotificationTimeout = function(value){
		  this.timeOut = value;
	}


NotificationManager.prototype.createNotificationArea = function(){
	var nAreaDiv = document.createElement('div');
	nAreaDiv.className = "notification";
	nAreaDiv.id = "na";
	document.getElementsByTagName('body').appendChild(nAreaDiv);
	nAreaDiv.innerHTML = text;
}


NotificationManager.prototype.showNotificationError = function(text){
	var errorDiv = document.createElement('div');
	document.getElementById('na').appendChild(errorDiv);
	errorDiv.className = "notification-error";
	errorDiv.innerHTML = text;
}


NotificationManager.prototype.showNotification = function(element, text){
	
		// var iv = document.createElement('div');
		// 
		
		
	
}

document.addEventListener('DOMContentLoaded', (function(){

	var nm = new NotificationManager();
	// console.log(nm.timeOut.toString());

	nm.setNotificationTimeout(10000);
	// console.log(nm.timeOut.toString());
}), false);



// Создать область для отображения сообщений
// Создать макет сообщения. Сообщения должны оборажаться друг на друге без изменения цсс класса