function Mouse(name) {
	this.name = name;
	this.isDead = false;	
}

Mouse.prototype.die = function() {
	this.isDead = true;
};

Mouse.prototype.run = function() {
	console.log('Run');
};

Mouse.prototype.sleep = function() {
	consolog('Sleep');
};

module.exports = Mouse;