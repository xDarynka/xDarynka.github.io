
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






function NotificationManager(){
 this.timeOut =0;
 return this;

 }


NotificationManager.prototype.setNotificationTimeout = function(value){
														  this.timeOut = value;
														}
NotificationManager.prototype.createNotificationArea() = function(){
															var nDiv = document.createElement('div');
													 	  	nDiv.className = "notification";
													 	  	document.getElementById('na').appendChild(nDiv);
													 	 	nDiv.innerHTML = text;
}

document.addEventListener('DOMContentLoaded', (function(){

													var nm = new NotificationManager();
													// console.log(nm.timeOut.toString());
												
													nm.setNotificationTimeout(2);
													// console.log(nm.timeOut.toString());
												}), false);



// Создать область для отображения сообщений
// Создать макет сообщения. Сообщения должны оборажаться друг на друге без изменения цсс класса