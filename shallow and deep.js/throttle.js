/*var throttle = document.getElementById("throttle")
throttle.addEventListener("click",function(){
    console.log("throttle")
})*/
var throttle = document.getElementById("throttle")
function throttlefun(func,delay){
	let prev = 0
	return function(){
		let now = new Date().getTime()
		if (now-prev > delay){
			prev=now
		return func()
	}
}
}
		
		
throttle.addEventListener("click",throttlefun(function(){
    console.log("throttle")
},2000))