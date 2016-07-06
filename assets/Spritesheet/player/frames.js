var playerFrames = {
"default":{
	"dead": [],

	"up":{
		"walk": [104, 105, 106, 107, 108, 109, 110, 111, 112],		
		"attack":[156, 157, 158, 159, 160, 161]	
	},

	"left":{
		"walk": [117, 118, 119, 120, 121, 122, 123, 124, 125],		
		"attack":[169, 170, 171, 172, 173, 174]	
	},

	"down":{
		"walk": [130, 131, 132, 133, 134, 135, 136, 137, 138],		
		"attack":[182, 183, 184, 185, 186, 187]	
	},

	"right":{
		"walk": [143, 144, 145, 146, 147, 148, 149, 150, 151],		
		"attack":[195, 196, 197, 198, 199, 200]	
	}

}
},

enemyFrames = {
"spider": {
	"down": {
		"walk": [0, 1, 2, 3, 4, 5],
		"dead": 6
	},
	"left": {
		"walk": [7, 8, 9, 10, 11, 12],
		"dead": 13
	},

	"up": {
		"walk": [14, 15, 16, 17, 18, 19],
		"dead": 20
	},

	"right": {
		"walk": [21, 22, 23, 24, 25, 26],
		"dead": 27
	},
}
}

var stand = [];

for (var i=0; i<25; i++){
    for (var j=5; j<10; j++){
        stand.push(i*57+j+1);
    }
}

for (var i=21; i<25; i++){
    for (var j=13; j<41; j++){
        stand.push(i*57+j);
    }
}

stand.push(541, 542, 543, 544, 545, 546, 547, 548, 549, 593, 650, 583, 584, 585, 586, 587, 588);