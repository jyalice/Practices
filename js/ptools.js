// to get a random integer between min and max, inclusive
Tools={
	getRandom: function(min,max){
		return Math.floor(Math.random()*(max-min+1))+min;
	}
}