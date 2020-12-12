// use this array to contain 10 boxes.
var array=[];
var container=document.getElementById('container');
for(var i=0;i<10;i++){
	var box=new Box(container)
	array.push(box);
}
function randomBox(){
	for(var i=0;i<array.length;i++){
		var box=array[i];
		box.random();
	}
}
setInterval(randomBox,500);
randomBox();
