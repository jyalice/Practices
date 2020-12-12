// constructor to create a div box in the parent element.
function Box(parent,options){
	var options=options||{};
	this.width=options.width||20;
	this.height=options.height||20;
	this.backgroundColor=options.backgroundColor||'red';
	this.left=options.left||0;
	this.top=options.top||0;		
	this.div=document.createElement('div');
	parent.appendChild(this.div);
	this.parent=parent;
	this.div.style.position='absolute';
	this.div.style.width=this.width+'px';
	this.div.style.height=this.height+'px';
	this.div.style.backgroundColor=this.backgroundColor;
	this.div.style.left=this.left+'px';
	this.div.style.top=this.top+'px';	
}
// set the position and color of the box
Box.prototype.random=function(){
	var left=Tools.getRandom(0,this.parent.offsetWidth/this.width-1)*this.width;
	var top=Tools.getRandom(0,this.parent.offsetHeight/this.height-1)*this.height;
	this.div.style.left=left+'px';
	this.div.style.top=top+'px';
	var r=Tools.getRandom(0,255);
	var g=Tools.getRandom(0,255);
	var b=Tools.getRandom(0,255);
	this.div.style.backgroundColor='rgb('+r+','+g+','+b+')';
}