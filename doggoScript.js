/*
DoggoScript v1.4.8 beta
© Copyright September-October 2020 Jonathan "Technodoggo" K. L., 
Technobytes Industries, NeXuS Software Labs INC. All 
rights reserved. This software is released under a 
strict policy that allows the user to distribute 
verbatim copies of this software. Modifications are 
NOT allowed. 
*/

console.log("You now have access to the most powerful doggo-obsessed script ever!");
console.warn("WARNING: Use your powers for good. These powers given to you by the script are NOT to be abused. ");

var doggoscript = {
	getElement : function(identifier) {
		return document.querySelector(identifier);
	},
	addElement : function(element) {
		document.body.innerHTML = `${document.body.innerHTML}\n${element}`;
	},
	addHeadElement : function(element) {
		document.head.innerHTML = `${document.head.innerHTML}\n${element}`;
	},
	changeInnerHTML : function(identifier, text) {
		document.querySelector(identifier).innerHTML = text;
	},
	stopShining : function() {
		clearInterval(a);
		clearInterval(b);
		clearInterval(c);
		clearInterval(d);
		clearInterval(e);
		clearInterval(f);
		clearInterval(g);
	},
	randomRGB : function() {
		var i = 0;
		var returnList = [];
		while (i < 3) {
			returnList.push(Math.floor((Math.random())*256));
			i++;
		}
		return `rgb(${returnList[0]}, ${returnList[1]}, ${returnList[2]})`;
	},
	clearFormatting : function() {
		this.getElement("link").href = "";
		clearInterval(a);
		clearInterval(b);
		clearInterval(c);
		clearInterval(d);
		clearInterval(e);
		clearInterval(f);
		clearInterval(g);
	},
	addLineBreak : function() {
		this.addElement("<br>");
	},
	minorAlert : function(alert) {
		window.alert(alert);
	},
	clearHTML : function() {
		document.body.innerHTML = "";
	},
	tempClearMessage : function(message, time) {
		var bodytext = document.body.innerHTML;
		this.clearHTML();
		this.addElement(`${message}`);
		setTimeout(function() {
			this.clearHTML();
			this.addElement(`${bodytext}`);
		}, time);
	},
	changeElementStyle : function(identifier, style) {
		this.getElement(identifier).style = style;
	},
	removeElement : function(identifier) {
		this.getElement(identifier).innerHTML = "";
	},
	randomNumber : function(min, max) {
		if (min > max) {
			return undefined;
		} else {
			upto = max-min
			return (Math.floor((Math.random())*upto))+min;
		}
	},
	chooseFromList : function(inputList) {
		return inputList[this.randomNumber(0, inputList.length)];
	},
	calculateAverage : function(inputList) {
		i = 0;
		returnSum = 0;
		while (i <= (inputList.length-1)) {
			returnSum += inputList[i];
			i++;
		}
		return returnSum/inputList.length;
	},
	getValueOfInput : function(identifier) {
		return this.getElement(identifier).value;
	},
	getRandomWord : function(typeOfWord) {
		switch (typeOfWord) {
			case "pastTenseVerb":
				return this.chooseFromList(["pranced", "danced", "sang", "ran around", "screamed", "shrieked", "screeched", "barked", "sniffed", "punched", "destroyed", "kicked", "made fun of"]);
				break;
			case "presentTenseVerb":
				return this.chooseFromList(["prance", "dance", "sing", "run around", "scream", "shriek", "screech", "bark", "sniff"]);
				break;
			case "noun":
				return this.chooseFromList(["doggo", "hamburger", "nutcracker", "gimcrack", "Bombinating Beast", "book", "paper", "human"]);
				break;
			case "adjective":
				return this.chooseFromList(["sleepy", "ridiculous", "notorious", "nefarious", "chaotic", "strong", "happy", "weird"]);
				break;
			case "time":
				return this.chooseFromList(["nanosecond", "microsecond", "milisecond", "second", "minute", "hour", "day", "week", "month", "year", "decade", "century"]);
		}
	},
	start : function(program) {
		height = document.body.offsetHeight;
		width = document.body.offsetWidth;
		switch (program) {
			case "AIE":
				setInterval(function() {
					if (document.body.offsetHeight != height) {
						document.body.innerHTML = "<div>screen size abruptly changed</div><button onclick='window.location.href = window.location.href'>reload</button>";
					}
					console.log(height, width, document.body.offsetHeight, document.body.offsetWidth);
					height = document.body.offsetHeight;
					width = document.body.offsetWidth;
				}, 50);
				break;
			case "ICU":
				console.log(this.chooseFromList(["well, hello there.", "here to fix some bugs or cheat?", "what are you doing here?", "get out of here. the JS Console is not something to toy with."]));
		}
	}
};
