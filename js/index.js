function getStyle(obj, name){
	if(window.getComputedStyle){
		return getComputedStyle(obj, null)[name];
	}else{
		return obj.currentStyle[name];
	}
}
function move(obj, attr, target, speed, callback){
	clearInterval(obj.timer);
	var current = parseInt(getStyle(obj, attr));
	if(current >= target){
		speed = -speed;
	}
	obj.timer = setInterval(function(){
		var oldValue = parseInt(getStyle(obj, attr));
		var newValue = oldValue + speed;
		if((speed < 0 && newValue <= target) || (speed > 0 && newValue >= target)){
			newValue = target;
		}
		obj.style[attr] = newValue + "px";
		if(newValue == target){
			clearInterval(obj.timer);
			callback && callback();
		}
	}, 30);
}
window.onload = function(){
	var box1 = document.getElementById("box1");
	var btn1 = document.getElementById("btn1");
	var btn2 = document.getElementById("btn2");
	var box2 = document.getElementById("box2");
	var btn3 = document.getElementById("btn3");
	var btn4 = document.getElementById("btn4");
	var speed = 10;
	btn1.onclick = function(){
		move(box1, "left", 800, 10);
	};
	btn2.onclick = function(){
		move(box1, "left", 0, 10);
	};
	btn3.onclick = function(){
		move(box2, "left", 800, 10);
	};
	btn4.onclick = function(){
		move(box2, "width", 800, 10, function(){
			move(box2, "height", 400, 10, function(){
				move(box2, "top", 40, 10, function(){
					
				});
			});
		});
	};
};