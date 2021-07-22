


////////////
// sounds
////////////

/*
  tone types:
  "sine",
  "square",
  "sawtooth",
  "triangle",
  "custom"
*/

var waveList = ["sine", "square", "sawtooth", "triangle"];
var urlStem = "https://compasstech.com.au/php/example.php?data=";  // Do not change
var myNames =[];
var name1 = "";
var notes = [];
var names = [];
var freqList = [];
var elapsed = 0;
var switchVar = 0;
var index = 0;
var points = [];
var timing = 300;
var attack = 20;
var release = 200;
var playTone = 0;
var scale = ["-"];
var Octaves = 5;
var beatNum = 4;
var beatVal = 4;
var noteList = ["-"];
var noteList1 = ["-"];
var nList = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
var nList1 = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
var octList = ["3", "4", "5", "6", "7", "8", "9"];


var harmScale1 = [125.714,132.,146.667,155.294,165.,170.323,176.,185.263,195.556,220.,229.565,240.];
var harmScale = [137.5,146.667,157.142857,169.231,176.,183.333,191.304,200.,209.524,220.,231.579,244.444]
var incrScale = [1,2,4,8,16,32]
var wScale = ["-"];
var hScale = ["-"];
var aScale = ["-"];

var aliens1= [392,440,349.23,174.61,261.63];
var aliens = ["G/4","A/4","F/4","F/3","C/4"];

var bgame1 = [261.63,261.63,523.25,440,392,329.63,392,392,392,293.66,293.66,293.66,261.63,261.63,523.25,440,392,329.63,392,392,392,392,415.3,440,415.3,440,329.63,349.23,392,440,349.23,293.66,440,440,440,493.88,523.25,587.33,493.88,440,392,349.23,293.66,261.63,261.63,523.25,440,392,329.63,392,392,392,293.66,293.66,293.66,261.63,261.63,293.66,329.63,349.23,392,440,440,493.88,523.25,523.25,523.25,493.88,440,392,369.99,392,440,440,440,493.88,493.88,493.88,523.25,523.25,523.25,523.25,523.25,523.25];

var bgame = ["C/4","-","C/5","A/4","G/4","E/4","G/4","-","-","D/4","-","-","C/4","-","C/5","A/4","G/4","E/4","G/4","-","-","G#/4","A/4","G#/4","A/4","E/4","F/4","G/4","A/4","F/4","D/4","-","A/4","B/4","C/5","D/5","B/4","A/4","G/4","F/4","D/4","C/4","-","C/5","A/4","G/4","E/4","G/4","D/4","-","D/4","C/4","-","D/4","E/4","F/4","G/4","A/4","-","B/4","C/5","B/4","A/4","G/4","F#/4","G/4","A/4","A/4","A/4","B/4","B/4","B/4","C/5","C/5","C/5"];

var rainbow = ["C/4","-","-","-","C/5","-","-","-","B/4","-","G/4","A/4","B/4","-","C/5","-","C/4","-","-","-","A/4","-","-","-","G/4","-","-","-","C/4","-","-","-","F/4","-","-","-","E/4","-","C/4","D/4","E/4","-","F/4","-","D/4","-","B/3","C/4","D/4","-","E/4","-","C/4","-","-","-"];

var bday1 = [261.63,261.63,293.66,293.66,261.63,261.63,349.23,349.23,329.63,329.63,329.63,261.63,261.63,293.66,293.66,261.63,261.63,392,392,349.23,349.23,349.23,261.63,261.63,523.25,523.25,440,440,349.23,349.23,329.63,329.63,293.66,293.66,466.16,466.16,440,440,349.23,349.23,392,392,349.23,349.23,349.23,349.23];

var bday = ["C/4","C/4","D/4","-","C/4","-","F/4","-","E/4","-","-","C/4","C/4","D/4","-","C/4","-","G/4","-","F/4","-","-","C/4","C/4","C/5","-","A/4","-","F/4","F/4","E/4","-","D/4","-","Bb/4","Bb/4","A/4","-","F/4","-","G/4","-","F/4","-","-","-"];


var brain1 = [440,466.16,523.25,440,349.23,392,440,349.23,349.23,392,440,349.23,293.66,329.63,349.23,293.66,293.66,293.66,261.63,261.63,261.63,261.63,261.63,261.63,349.23,329.63,293.66,293.66,587.33,523.25,466.16,440,392,349.23,329.63,329.63,659.26,587.33,523.25,466.16,440,392,349.23,349.23,349.23,349.23,349.23];

var brain = ["A/4","Bb/4","C/5","A/4","F/4","G/4","A/4","F/4","F/4","G/4","A/4","F/4","D/4","E/4","F/4","D/4","D/4","D/4","C/4","C/4","C/4","C/4","C/4","C/4","F/4","E/4","D/4","D/4","D/5","C/5","Bb/4","A/4","G/4","F/4","E/4","E/4","E/5","D/5","C/5","Bb/4","A/4","G/4","F/4","F/4","F/4","F/4","F/4"];

var elise1 = [329.63,659.26,622.25,659.26,622.25,659.26,493.88,587.33,523.25,440,440,440,261.63,329.63,440,493.88,493.88,493.88,329.63,415.3,493.88,523.25,523.25,523.25,329.63,659.26,622.25,659.26,622.25,659.26,493.88,587.33,523.25,440,440,440,261.63,329.63,440,493.88,493.88,493.88,261.63,523.25,493.88,440,440,440 ];

var elise = 
["E/4","E/5","D#/5","E/5","D#/5","E/5","B/4","D/5","C/5","A/4","-","-","C/4","E/4","A/4","B/4","-","-","E/4","G#/4","B/4","C/5","-","-","E/4","E/5","D#/5","E/5","D#/5","E/5","B/4","D/5","C/5","A/4","-","-","C/4","E/4","A/4","B/4","-","-","C/4","C/5","B/4","A/4","-","-"];

var home1 = [261.63,293.66,329.63,349.23,440,392,329.63,392,349.23,329.63,349.23,293.66,261.63 ];

var home = ["C/4","D/4","E/4", "-","F/4","A/4","G/4", "-","E/4", "G/4","F/4","E/4","F/4","D/4","C/4","-", "-", "-"];

var puff1 = [523.25,523.25,523.25,523.25,493.88,493.88,392,392,440,440,523.25,523.25,392,392,392,392,349.23,349.23,392,349.23,329.63,392,523.25,523.25,523.25,440,493.88,523.25,587.33,587.33,587.33,587.33,523.25,523.25,523.25,523.25,493.88,493.88,392,392,440,440,523.25,523.25,392,392,392,392,349.23,349.23,392,349.23,329.63,392,523.25,523.25,440,523.25,493.88,587.33,523.25];

var puff = ["C/5","C/5","C/5","C/5","B/4","-","G/4","-","A/4","-","C/5","C/5","G/4","-","-","G/4","F/4","F/4","G/4","F/4","E/4","G/4","C/5","C/5","C/5","A/4","B/4","C/5","D/5","-","-","-","C/5","C/5","C/5","C/5","B/4","-","G/4","-","A/4","A/4","C/5","C/5","G/4","-","-","G/4","F/4","F/4","G/4","F/4","E/4","G/4","C/5","C/5","A/4","C/5","B/4","D/5","C/5","-","-","-"];

var cat = ["G/4","D#/5","E/5","F/5","D#/5","E/5","C/5","A/4","G/4","C/5","C/5","-","C/5"];

var wash = ["G/4","-","-","C/5","-","A/4","G/4","-","-","E/4","-","-","F/4","G/4","F/4","E/4","-","D/4","G/4","-","-","-","-","-","G/4","-","-","C/5","-","A/4","G/4","-","-","E/4","-","-","F/4","G/4","F/4","E/4","-","D/4","C/4"];

var shipsong = ["B/4", "A/4", "G/4", "F#/4", "E/4", "F#/4", "G/4", "B/4", "A/4", "G/4", "F#/4", "E/4", "D/4", "E/4", "F#/4", "A/4", "G/4", "F#/4", "E/4", "D/4", "C/4", "D/4", "E/4", "G/4", "G/4", "G/4", "-","-", "F#/4"];

var bluey = ["C#/6", "B/5", "A/5", "F#/5", "-", "E/5", "F#/5", "-", "A/5", "-", "A/5", "B/5", "C#/6", "B/5", "A/5", "F#/5", "-", "E/5", "F#/5", "-", "A/5", "A/5"];

var bluey1 = [1108.73,987.77,880,739.99,739.99, 659.26, 739.99, 739.99, 880, 880, 880, 987.77,1108.73,987.77,880,739.99, 739.99, 659.26,739.99, 739.99, 880,880];

var oneOctave1 = [261.63,293.66,329.63,349.23,392,440,493.88,523.25 ];

var oneOctave = ["C/4","D/4","E/4","F/4","G/4","A/4","B/4","C/5"];

var songList = [ oneOctave,aliens, rainbow, bday, brain, elise, home, puff, cat, shipsong, bluey, wash];

var songNames = [
				"Octave (C major)\n",
				"Close Encounters\n ",
				"Over the Rainbow",
				"Happy birthday\n",
				"If I only \nhad a brain\n",
				"F&uuml;r Elise\n  ",
				"No place like home\n  ",
				"Puff the \nMagic Dragon\n",
				"They call her the Cat\n",
				"The Ship Song\n",
				"Theme from Bluey\n",
				"Washing Machine Song\n"
				];


for (var i = 0, n = octList.length; i < n; ++i) {
	for (var j = 0, m = nList.length; j < m; ++j) {
		var note= nList[j] + "/" + octList[i] ;
		noteList.push(note);
		var note1 = nList1[j] + "/" + octList[i] ;
		noteList1.push(note1);
	}
}

for (var i = 0, n = 12*Octaves; i < n; ++i) {
    var gFrequency = 220 * Math.pow(2, (i - 9) / 12); 
    wScale.push(+gFrequency.toFixed(2));
    
  }

for (var j = 0, k = incrScale.length; j < k; ++j) {
    for (var i = 0, n = harmScale.length; i < n; ++i) {
    	var hFrequency = (incrScale[j] * harmScale[i]);
		hScale.push(hFrequency);
		
	}
}


for (var j = 0, k = incrScale.length; j < k; ++j) {
	for (var i = 0, n = 12; i < n; ++i) {
    		var aFrequency = incrScale[j] * (110 * (1 + (i+2)/12)); 
    		aScale.push(aFrequency);
    }
  }


scale = wScale;

function chooseScale(input) {
	document.ggbApplet.reset();
	resetTones();
	if (input == 1) {
		scale = wScale;
		alert("Your tones will be played with a well-tempered (geometric) scale.");
	} else if (input == 2) {
		scale = hScale;
		alert("Your tones will be played with a harmonic scale.");
	} else if (input == 3) {
		scale = aScale;
		alert("Your tones will be played with a arithmetic scale.");
	}

}

function note2freq(input) {
console.log("play.js line 148: note2freq(" + input + ")");
	for (var i = 0, n = scale.length; i < n; ++i) {
	
		if (!isNaN(input)) {
			return input;
		} else if (input == noteList[i]) {
			return scale[i];
			}
		}
}


function freq2note(input) {
console.log("play.js line 161: freq2note(" + input + ")");
	for (var i = 0, n = scale.length; i < n; ++i) {
	
		if (isNaN(input)) {
			return input;
		} else if (Math.abs(input - scale[i]) < 0.5) {
			return noteList[i];
			}
		}
}

function getFrequency(myTone,myOctave){

	var input = myTone + "/" + myOctave;
	freq = "";
console.log("play.js line 176: getFrequency(" + input + ")");	
	for (var i = 0, n = scale.length; i < n; ++i) {
	
		if (input == "-" || input == "|") {
			freq =  input;
		} else {
		if (input ==  noteList[i] || input ==  noteList1[i]) {
			freq =  scale[i];
			}
		}
	}

	return freq;

}


				
var wave = waveList[3];
var freq = songList[4];

function chooseWave(input) {
console.log("play.js line 198: chooseWave(" + input + ")");
	wave = waveList[input];
	tones.type = wave;
	alert('Current sound type is ' + wave + ' wave');
	tones.play(0);

}

function chooseTime() {
	timing = parseFloat(document.getElementById("myTime").value);
	var txt = "Timing is set at " + timing + " milliseconds. The higher the value the slower the speed.";
	console.log("play.js line 209: " + txt);
	alert(txt);
}

function chooseAttack() {
	attack = parseFloat(document.getElementById("myAttack").value);
	var txt = "Attack is set at " + attack + " milliseconds.";
	console.log("play.js line 216: " + txt);
	alert(txt);
}

function chooseRelease() {
	release = parseFloat(document.getElementById("myRelease").value);
	var txt = "Release is set at " + release + " milliseconds. Higher values will increase the sustain effect.";
	console.log("play.js line 223: " + txt);
	alert(txt);
}

function chooseTimeSig() {

	var tsig = document.getElementById("myTimeSig").value;
	var tList = tsig.split("/");
	beatNum = tList[0];
	beatVal = tList[1];
	var txt = "Time signature is set at " + tsig;
	console.log("play.js line 234: " + txt);
	alert(txt);
	vfRender();
	
}



function chooseSong(input) {
console.log("play.js line 243: chooseSong(" + input + ")");
	resetTones();
	document.ggbApplet.reset();
	playTone = 1 - playTone;
	freq = songList[input];
	document.getElementById("toneBox").value = freq;
	if (input == 2) {
		document.getElementById("myTimeSig").value = "4/4";
	} else if (input == 5 || input == 10) {
		document.getElementById("myTimeSig").value = "6/8";
	} else {
		document.getElementById("myTimeSig").value = "4/4";
	}
	song(1);
	vfRender();
	
}

function playList() {
console.log("play.js line 261: playList()");
	document.ggbApplet.reset();
	resetTones();
	playTone = 1;
	song(1);
	vfRender();
}


function playList1() {
console.log("play.js line 277: playList1()");
	resetTones();
	playTone = 1;
	var names = [];
	song(1);
	var freq = document.getElementById("toneBox").value;
	var freqList = freq.split(",");
	for (var i = 0, n = freqList.length; i < n; ++i) {
				var name = freq2note(freqList[i]);
				names.push(name);
				
				}
				document.getElementById("toneBox").value = names;
			
	vfRender();
}

var func = "x";
var minx = 0;
var maxx = 10;
var step = 1;
var autoPlay = 0;


function playFunc() {
	var list = [];
	bleOn =0;
	resetTones();
	func = prompt("Please enter a function to listen to. ", func);
	func = func.toLowerCase();
	minx = prompt("Enter the minimum x value. ", minx);
	maxx = prompt("Enter the maximum x value. ", maxx);
	step = prompt("Enter the step size. ", step);
	var funlength = eval((maxx-minx)/step);

	document.ggbApplet.evalCommand("mytone(x)=" + func);
	
	for (var i = 0, n = funlength; i < n; ++i) {

		var val = document.ggbApplet.getValue("mytone(" + minx + " + " + i + "*" + step + ")")
		var note = 0;
		
		if (Number.isNaN(val)) {
			note = 0;
			} else {
			note = 440 * Math.pow(2, (val - 9) / 12); // 0 is middle C
		}
		 	list.push(note.toFixed(2));
		 	
	}
		
	var yMin = Math.min(list);
	var yMax = Math.max(list);
	
	document.getElementById("toneBox").value = list;
	freqList = list;
	playTone = 1;
	
	song(1);

		document.ggbApplet.evalCommand("ZoomIn(" + minx + "," + yMin + "," + maxx + "," + yMax + ")");
		document.ggbApplet.evalCommand("mytone(x)=" + func);
		
	}

function playFunc1() {

	var choose = prompt("Listen to your function? ","y");
	if (choose == "y" || choose == "Y") {
	var list = [];
	bleOn =0;
	resetTones();
	var funlength = eval((maxx-minx)/step);

	document.ggbApplet.evalCommand("mytone(x)=" + func);
	
	for (var i = 0, n = funlength; i < n; ++i) {

		var val = document.ggbApplet.getValue("mytone(" + minx + " + " + i + "*" + step + ")")
		var note = 0;
		
		if (Number.isNaN(val)) {
			note = 0;
			} else {
			note = 440 * Math.pow(2, (val - 9) / 12); // 0 is middle C
		}
		 	list.push(note.toFixed(2));
		 	
	}
		
	var yMin = Math.min(list);
	var yMax = Math.max(list);
	
	document.getElementById("toneBox").value = list;
	freqList = list;
	playTone = 1;
	
	song(1);

		document.ggbApplet.evalCommand("ZoomIn(" + minx + "," + yMin + "," + maxx + "," + yMax + ")");
		document.ggbApplet.evalCommand("mytone(x)=" + func);
		}
	}

function playGGB() {
	console.log("play.js line 270: playGGB()");
		var frq = document.ggbApplet.getValue("frequency");
		
		document.getElementById("myVar").value = "frequency=" + frq;
		//freq = [frq];
		freqList.push(frq);
		document.getElementById("toneBox").value = freqList;
		playTone = 1;
		song(0);
}


function song(input) {
	console.log("play.js line 281: song(" + input + ")");
	tones.type = wave;
	tones.attack = attack;
	tones.release = release;
	elapsed = 0;
	timing = document.getElementById("myTime").value;
   
	if (input == 0) {
          //for (var i = 0, n = freqList.length; i < n; ++i) {
				//var name = freq2note(freq[i]);
				//names.push(name);
				//var note = note2freq(freqList[i]);
				//notes.push(note);
				notes = freqList;
				document.getElementById("toneBox").value = notes;
			//}    
			
    	} else  {
    		
    		var myList = document.getElementById("toneBox").value;
    		var temp = [];
    		
    		if (myList.indexOf(",") > 0) {
    			temp = myList.split(',');
    		} else {
    			temp = myList.split(' ');
    		}
		
		for (var i = 0, n = temp.length; i < n; ++i) {
		
		var myTone = temp[i];
		
		if (!isNaN(temp[i]) || temp[i] == "-" || temp[i] == "|") {
			
			if (temp[i] == "-") {
				notes.push("-");
				names.push("-");
			} else if (temp[i] == "|") {
				notes.push("|");
				names.push("|");
			} else {
			notes.push(+temp[i]);
			names.push(freq2note(temp[i]));
			document.getElementById("toneBox").value = notes;
			//var list = document.getElementById("toneBox").value;
			//var list1 =list.replace(/,/g," ")
			//document.getElementById("toneBox").value = list1;
			}
		} else {
			
		var myOctave = 4;
		var tone1 = "";
		var oct1 = "";
		var temp1 = myTone.split("/");
		
		myTone = temp1[0];
		
		if (temp1.length > 1) {
			myOctave = temp1[1];
		} else {
			myOctave = 4;
		}
		
		notes.push(+getFrequency(myTone,myOctave).toFixed(2));
		names.push(myTone + "/" + myOctave);
		document.getElementById("toneBox").value = names;
		var list = document.getElementById("toneBox").value;
		var list1 =list.replace(/,/g," ")
		document.getElementById("toneBox").value = list1;
		}
	} 
	}
	
    var prevTime = tones.getTimeMS();
    
    play();
	
    function play() {
    	
    	timing = document.getElementById("myTime").value;
    	if (playTone > 0 && index < notes.length) {
        var now = tones.getTimeMS();
        elapsed += now - prevTime;
        if(elapsed > timing) {
            elapsed -= timing;
            
            var note = notes[index];
            
            if(note !== "-" && note !== "|") {
                tones.play(note);
				var point = "(" + index + "," + note + ")";
				points.push(point);
				
			    document.ggbApplet.setValue("frequency",note);
			    document.ggbApplet.evalCommand('FillColumn(1,{' + points + '})');
                if (bleOn  > 0) { send(eval(100*parseInt(note))) };
            }
            index++;
        }
        prevTime = now;
       requestAnimationFrame(play);
     }
    }
}

function resetTones() {
console.log("play.js line 387: resetTones()");
	
	timing = 200;
	playTone = 0;
	elapsed = 0;
	index = 0;
	notes = [];
	names = [];
	freqList = [];
	points = [];
	tones.play(0);
	document.getElementById("myStave").innerHTML = "";
	//vfRender();
}


function clearFreq() {	
console.log("play.js line 403: clearFreq()");
	scale = wScale;
	document.getElementById("toneBox").value = '';
	document.getElementById("myTimeSig").value = "4/4";
	document.ggbApplet.reset();
	resetTones();
	
}



function switcher() {

	notes = [];
	names = [];

	var myList = document.getElementById("toneBox").value;
	console.log("play.js line 419: switcher(" + myList + ")");
		var temp = [];
    		if (myList.indexOf(",") > 0) {
    			temp = myList.split(',');
    		} else {
    			temp = myList.split(' ');
    		}
		
		for (var i = 0, n = temp.length; i < n; ++i) {
		
			var myTone = temp[i];
		
		if (!isNaN(temp[i]) || temp[i] == "-" || temp[i] == "|") {
			
			if (temp[i] == "-") {
				notes.push("-");
				names.push("-");
			} else if (temp[i] == " ") {
				notes.push("-");
				names.push("-");
			} else {
			notes.push(note2freq(temp[i]));
			names.push(freq2note(temp[i]));
		 	//names.push('"' + freq2note(temp[i]) + '"');
			}
			
		} else {
			
		var myOctave = 4;
		var tone1 = "";
		var oct1 = "";
		var temp1 = myTone.split("/");

		myTone = temp1[0];
		
		if (temp1.length > 1) {
			myOctave = +temp1[1];
		} else {
			myOctave = 4;
		}
		
		notes.push(+getFrequency(myTone,myOctave).toFixed(2));
		//names.push('"' + myTone + '/' + myOctave + '"');
		names.push(myTone + '/' + myOctave);
		}
	} 

	if (switchVar == 0) {
		document.getElementById("toneBox").value = notes;
	} else {
		document.getElementById("toneBox").value = names;
		var list = document.getElementById("toneBox").value;
		var list1 =list.replace(/,/g," ")
		//document.getElementById("toneBox").value = list1;

	}
	switchVar = 1 - switchVar;
}





function vfRender() {

	VF = Vex.Flow;

	var vtb1 = document.getElementById("toneBox").value;
	console.log("play.js line 487: vfRender(" + vtb1 + ")");
	vtb1 = vtb1.trim();
	if (vtb1.indexOf(",") > 0) {
		names = vtb1.split(",");
	} else {
		names = vtb1.split(" ");
	}
	var myNames = [];
	
	var tsig = document.getElementById("myTimeSig").value;
	var tList = tsig.split("/");
	beatNum = tList[0];
	beatVal = tList[1];
	var barsperStave = 3;
	var beats = "q"
	
	if (beatVal == 4) {
		beats = "q";
	} else if (beatVal == 8) {
		beats = "8";
	}
	
	var barNum = Math.round(names.length/beatVal) + 1;
	var staveNum = Math.floor(barNum/barsperStave) + 1;
	
	div = document.getElementById("myStave")
	div.innerHTML = "";
	renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
	renderer.resize(900, 240 + 100*(staveNum));
	
	for (j=0; j<staveNum; j++) {
		
	context = renderer.getContext();
	stave = new VF.Stave(10, 100*(j+1), 850);
	stave.addClef("treble").addTimeSignature(tsig);
	stave.setContext(context).draw();
	

	for (i= (j * beatNum * barsperStave); i< ((j + 1) * beatNum * barsperStave);  i++) {
	
	if ( i < names.length) {
	
		if (names[i] == "-" || names[i] == "") {
	
     			myNames.push(new VF.StaveNote({keys: ["B/4"], duration: beats + "r" }));     
     			
     			if ( (i+1) % beatNum == 0) {
     					myNames.push( new VF.BarNote());
    				}
     		
     		} else if (names[i].indexOf("#") >= 0) {
     		
     				myNames.push(new VF.StaveNote({keys: [names[i]], duration: beats }).addAccidental(0, new VF.Accidental("#")));
     				
     				if ( (i+1) % beatNum == 0) {
     					myNames.push( new VF.BarNote());
    				}
     			
     		} else if (names[i].indexOf("b") >= 0) {
     			
    				myNames.push(new VF.StaveNote({keys: [names[i]], duration: beats }).addAccidental(0, new VF.Accidental("b")));
    				
    				if ( (i+1) % beatNum == 0) {
     					myNames.push( new VF.BarNote());
    				}
     			
     		} else {
     				myNames.push(new VF.StaveNote({keys: [names[i]], duration: beats }));     
     					
     				if ( (i+1) % beatNum == 0) {
     					myNames.push( new VF.BarNote());
    				}
     		}
     		}
     		
    	voice = new VF.Voice({
    	num_beats: i+1,
    	beat_value: beatVal

  });

    voice.addTickables(myNames);
    
  }
       
       VF.Formatter.FormatAndDraw(context, stave, myNames);
	myNames = [];
	}
}




var introBlock = '&nbsp;<P><i>This page is an adaption of the great work done by <b>Keith Peters</b> on his <b>Tones library</b>, the amazing <b>Mike Bostock</b> and his <b>JavaScript piano library</b> using Web Audio AND the beautiful music engraving of <b>oxfe</b> with <b>VexFlow music notation</b>. The attempt here is to provide a toolkit for exploration of the properties of both sounds and music, and even to offer a platform for perhaps composing and playing something new. GeoGebra is linked to offer a graphical view of what is happening, and BLE is also provided if you have a TI LaunchPad available! The introduction that follows comes directly from the Tones Library GitHub page - I could not improve on his efforts!</i></P><HR width=60%></HR>\n'
+ '&nbsp;<P>The Web Audio API is pretty amazing. You can actually synthesize audio with JavaScript right in the browser. The only problem is that it is pretty low level and not exactly intuitive to work with. This library is meant to make it as simple as humanly possible to create pleasant sounding musical tones.</P>\n'
+ '<P> The tones api is drop dead simple. One main method: play. </P><img src="https://compasstech.com.au/tones/tones.gif" width=50% align=right>\n'
+ '<P> The play method can be used in a few different ways: </P>\n'
+ '<P> Play a tone at a specific frequency. </P>\n'
+ '<P> Play a named note in the default 4th octave. </P>\n'
+ '<P> Play a named note in a specific octave. </P>\n'
+ '<P> Examples: </P><ul>\n'
+ '<li><P> <b>tones.play(440);</b> plays a 440 hz tone </P> </li>\n'
+ '<li><P> <b>tones.play("c");</b> plays a C note in the 4th octave. </P> </li>\n'
+ '<li><P> <b>tones.play("c#");</b> plays a C sharp note in the 4th octave. </P> </li>\n'
+ '<li><P> <b>tones.play("eb");</b> plays an E flat note in the 4th octave. </P> </li>\n'
+ '<li><P> <b>tones.play("c", 2);</b> plays a C note in the 2nd octave. </P> </li></ul>\n'
+ '<P> Named notes are case insensitive. "c" is the same as "C". </P>\n'
+ '<P> There are also a few properties that affect the sound of the tone played. Set these before playing a tone and they will affect all future tones played. </P><ul>\n'
+ '<li> <P> <b>type</b> : this is the wave form, a string of one of the following: "sine", "square", "sawtooth" or "triangle"</P> </li>\n'
+ '<li> <P> <b>attack</b> : sets the attack of the envelope, or the time that the sound takes to reach full volume. </P> </li>\n'
+ '<li> <P> <b>release</b> : sets the release of the envelope, or the time it takes for the sound to fade out. </P> </li></ul>\n'
+ '<P> Attack and release are numbers which should generally be in the range of around 1 to 300. A low release, and mid-range release will give a bell sound. A long attack and release will sound more like a flute. Combined with different wave form types, this allows you to create all kinds of unique sounds. </P>\n'
+ '<P> Note that attack and release values do not represent discrete times. But roughly speaking your sound will last about 10 times the total of these two in milliseconds. For example, an attack of 100 and release of 200 totals 300, so the tone will last around 3000 milliseconds or 3 seconds before completely fading out. </P>\n'
+ '<P> There is also a getTimeMS function. This returns the current time reported by the audio context, which keeps a very accurate internal timer. Some of the examples use this to set up a sort of sequencer. </P>\n'
+ '<P> It goes without saying that this library will only work in browsers that support the Web Audio API, which includes Chrome, Firefox and Safari (I think), but not Internet Explorer.</P>&nbsp;\n'
+ '&nbsp;<P><button onclick="window.open(&quot; https://github.com/bit101/tones&quot;);"  style="font-size : 24px; width: 100%; height: 48px;"> Visit the Tones library by Keith Peters &rArr;</button></P>\n'
+ '<P><button onclick="window.open(&quot; https://compasstech.com.au/tones/demo.html&quot;);"  style="font-size : 21px; width: 100%; height: 48px;"> Try the Tones Library Demo &rArr;</button></P>\n'
+ '<P><button onclick="window.open(&quot;https://compasstech.com.au/tones/play.js&quot;);"  style="font-size : 21px; width: 100%; height: 48px;"> View JavaScript Code behind this page (play.js)</button></P>&nbsp; <HR></HR>\n'
+ '<table><tr><td width=45%><P>Take your Web Audio exploration to the next level, and play with the Arc Piano below from <a href="https://bl.ocks.org/mbostock" target="top">Mike Bostock.</a></P>\n'
+ '<P><i>Here the notes you play on the ArcPiano are represented as frequencies through the live graphing of GeoGebra and as musical notation using VexTab. These notes can be played back using the Tones library, shared with others via email, web page or QR Code, and even sent via BLE to a connected LaunchPad board!</i></P> \n'
+ '&nbsp;<P><button onclick="window.open(&quot; https://bl.ocks.org/mbostock/5723d93e4f617b542991&quot;);"  style="font-size : 21px; width: 100%; height: 48px;"> Arc Piano (Mike Bostock) &rArr;</button></P></td><td> <P><img src="https://compasstech.com.au/piano/piano.gif" width=95% align=right></P></td></tr></table>\n'
+ '<P><button onclick="window.open(&quot;https://compasstech.com.au/piano/circlepiano.js&quot;);"  style="font-size : 21px; width: 100%; height: 48px;"> View JavaScript Code behind this page (circlepiano.js)</button></P>&nbsp; <HR></HR>\n'
+ '<P>Learn to create your own interactive web pages with <a href="https://compasstech.com.au" target="top">Live Mathematics and STEM on the Web</a>.</P>\n'
+ '&nbsp;<P><button onclick="window.open(&quot;https://compasstech.com.au/learn7/index.html&quot;);"  style="font-size : 21px; width: 100%; height: 48px;"> Learn How: Create your own Live Web Page: Lesson 7 &rArr;</button></P>&nbsp;\n'
+ '<P><font color="brown"><i>If you have any questions or would like to share your experience with this utility, please <a href="mailto:steve@compasstech.com.au">drop me an email</a>!</i></font></P>\n';



var mathBlock = '&nbsp;\n'
+ '<center> <div id="myStave"></div></center>\n'
+ '<!--P>Study and edit the songs you play, or enter your own frequencies (as a number or comma-separated list of numbers) or notes (in the form "C#/3" for C# in octave 3 (where middle C lies in octave 4) to play. Type "-" to add a pause. The switch button will switch between frequency and note name, reset will reset graph, timing and settings without clearing this text field, while clear will reset and clear the field.</P-->\n'
+ '<center><P><textarea readonly ID="toneBox" onchange="vfRender();" rows="5" cols="75"   style="color:blue; font-size : 21px;">A/5 A/4 A/3 A/4 A/5</textarea> </P>\n'
+ '<!--P><button onclick="playList();" style="color:blue; font-size : 21px; width: 96%; height: 70px;"><b>PLAY</b></button></P-->\n'
+ '<P><button onclick="switcher();" style="color:green; font-size : 16px; width: 30%; height: 60px;">Notes/Frequency</button></P><!--P><button  onclick="resetTones();"   style="color:red; font-size : 21px; width: 48%; height: 60px;">Reset Settings</button> <button  onclick="clearFreq();"   style="color:red; font-size : 21px; width: 48%; height: 60px;">Clear All</button> </P-->\n'
+ '<div id="ggb-element"></div>\n'
+ '<!--P><button onclick="setFunction();" style="font-size : 21px; width: 20%; height: 60px;">Input: </button><input ID="myVar"  style="font-size : 21px;" size="30" value = "frequency=440" type="text"> <button onclick="playGGB();" style="font-size : 21px; width: 20%; height: 60px;">Play GGB &uArr;</button> </P-->\n'
+ '<!--P><button onclick="playFunc();" style="font-size : 21px; width: 100%; height: 60px;">Listen to a function</button> </P-->\n'
+ '&nbsp; </center>\n';


var textBlock = '&nbsp;<P style="font-size:18px; color:black;"><i>Choose a wave form for your tone...</i></P><P>\n';

for (i = 0; i < waveList.length; i++) { 
	textBlock += '<button id = "waveForm' + i + '" onclick="chooseWave(' + i + ');" style="color:blue; font-size : 21px; width: 23%; height: 60px;">' + waveList[i] + '</button>\n';
}

textBlock += '</P>\n'
+ '<P style="color:blue;"><button id = "timer" onclick="chooseTime();" style="color:blue; font-size : 21px; width: 40%; height: 60px;">Set timing</button> <input ID="myTime" onchange="chooseTime();" style="font-size : 21px;" size="35" value = "300"  type="text"> </P>\n'
+ '<P style="color:blue;"><button id = "attacker" onclick="chooseAttack(); "style="color:blue; font-size : 21px; width: 40%; height: 60px;">Set attack value</button> <input ID="myAttack" onchange="chooseAttack();"  style="font-size : 21px;" size="35" value = "20"  type="text"> </P>\n'
+ '<P style="color:blue;"><button id = "releaser" onclick="chooseRelease(); "style="color:blue; font-size : 21px; width: 40%; height: 60px;">Set release value</button> <input ID="myRelease" onchange="chooseRelease();" style="font-size : 21px;" size="35" value = "200"  type="text"> </P>\n'
+ '<P style="color:blue;"><button id = "timesig" onclick="chooseTimeSig(); "style="color:blue; font-size : 21px; width: 40%; height: 60px;">Set Time Signature</button> <input ID="myTimeSig" onchange="chooseTimeSig();" style="font-size : 21px;" size="35" value = "4/4"  type="text"> </P>\n';

textBlock += '<HR width=60%></HR><P><i>Compare the sound of our modern (well-tempered) scale (based upon a geometric sequence) to that of one based upon <a href="https://compasstech.com.au/harmony/index.html" target="top">the harmonic series of Pythagoras</a>...</i></P>\n';
textBlock += '<center><P style="color:blue;"><button id = "wscale" onclick="chooseScale(1)" style="color:blue; font-size : 21px; width: 90%; height: 60px;">Well-tempered (Geometric) Scale</button></P>\n';
textBlock += '<P style="color:blue;"><button id = "hscale" onclick="chooseScale(2)" style="color:blue; font-size : 21px; width: 90%; height: 60px;">Harmonic Scale</button></P>\n';
textBlock += '<P style="color:blue;"><button id = "ascale" onclick="chooseScale(3)" style="color:blue; font-size : 21px; width: 90%; height: 60px;">Or even an Arithmetic Scale?</button></P></center>\n';


var textBlock1 = '&nbsp;<P style="font-size:18px; color:black;"><i>Choose a wave form for your tone...</i></P><P>\n';

for (i = 0; i < waveList.length; i++) { 
	textBlock1 += '<button id = "waveForm' + i + '" onclick="chooseWave(' + i + ');" style="color:blue; font-size : 21px; width: 23%; height: 60px;">' + waveList[i] + '</button>\n';
}

textBlock1 += '</P>\n'
+ '<P style="color:blue;"><button id = "timer" onclick="chooseTime();" style="color:blue; font-size : 21px; width: 40%; height: 60px;">Set timing</button> <input ID="myTime" onchange="chooseTime();" style="font-size : 21px;" size="35" value = "300"  type="text"> </P>\n'
+ '<P style="color:blue;"><button id = "attacker" onclick="chooseAttack(); "style="color:blue; font-size : 21px; width: 40%; height: 60px;">Set attack value</button> <input ID="myAttack" onchange="chooseAttack();"  style="font-size : 21px;" size="35" value = "20"  type="text"> </P>\n'
+ '<P style="color:blue;"><button id = "releaser" onclick="chooseRelease(); "style="color:blue; font-size : 21px; width: 40%; height: 60px;">Set release value</button> <input ID="myRelease" onchange="chooseRelease();" style="font-size : 21px;" size="35" value = "200"  type="text"> </P>\n';

var songBlock = '&nbsp;<P style="font-size:18px; color:black;"><i>&nbsp;</i></P><center><P>\n'; // Choose a song...

for (i = 0; i < songList.length-1; i++) { 
	songBlock += '<button id = "song' + i + '" onclick="chooseSong(' + i + ');" style="color:blue; font-size : 16px; width: 30%; height: 60px;">' + songNames[i] + '</button>\n';
}

songBlock += '</P>\n';


var bleBlock = 	'<P>&copy;<a href="https://github.com/1oginov" target="top">Daniel Loginov</a></P>\n'
				+ ' &nbsp;<center>\n'
				+ '<P><button id="connect" style="font-size : 24px; width: 35%; height: 50px;"><font color="GREEN">CONNECT</font></button>\n'
				+ '<button id="disconnect" style="font-size : 24px; width: 35%; height: 50px;"><font color="red">DISCONNECT</font></button></P>\n'
				+ '<P><textarea ID="terminal" rows="4" cols="45"  value="" style="font-size : 24px;"></textarea></P> \n'
				+ '<form id="send-form" class="send-form">\n'
				+ '<P><input id="input" type="text" aria-label="Input" style="font-size : 30px;" size="27" autocomplete="off" placeholder="Type something to send...">\n'
				+ '<button type="submit" style="font-size : 30px;" size="25" aria-label="Send">\n'
				+ '<i class="material-icons">send</i>\n'
				+ '</button>\n'
				+ '</form></center>\n'
				+ '&nbsp;<HR></HR>&nbsp;\n';							


function setupPiano() {
console.log("play.js line 657: setupPiano(): intro,act,maths,song,vfRender");
	document.getElementById("intro").innerHTML = introBlock;
	document.getElementById("act").innerHTML = textBlock;
	document.getElementById("maths").innerHTML = mathBlock;
	document.getElementById("song").innerHTML = songBlock;
	vfRender();
	//document.getElementById("ble").innerHTML = bleBlock;

}


function setup() {
console.log("play.js line 669: setupPlay(): buttons,maths,vfRender");
	document.getElementById("buttons").innerHTML = textBlock;
	document.getElementById("ctrl").innerHTML = mathBlock;

	vfRender();

	// document.getElementById("bleText").innerHTML = bleBlock;

}





function setupTones() {
console.log("play.js line 684: setupTones(): intro,act,maths,song,vfRender");
		document.getElementById("intro").innerHTML = introBlock;
		document.getElementById("act").innerHTML = textBlock;
		document.getElementById("songs").innerHTML = songBlock;
		document.getElementById("ctrl").innerHTML = mathBlock;
		vfRender();
}

function setupHarmony() {
console.log("play.js line 693: setupHarmony(): act,maths,song");
	document.getElementById("act").innerHTML = textBlock;
	document.getElementById("songs").innerHTML = songBlock;
	document.getElementById("ctrl").innerHTML = mathBlock1;
}

function setupHarmony1() {
console.log("play.js line 693: setupHarmony(): act,maths,song");
	document.getElementById("act").innerHTML = textBlock;
	document.getElementById("songs").innerHTML = songBlock;
	document.getElementById("ctrl").innerHTML = mathBlock;
}

function setupHarmony0() {
console.log("play.js line 693: setupHarmony(): act");
	document.getElementById("act").innerHTML = textBlock1;
	document.getElementById("songs").innerHTML = songBlock;
//	document.getElementById("ctrl").innerHTML = mathBlock1;

}


function viewControl(source) {
	if (document.getElementById(source).style.display == 'block') {
		document.getElementById(source).style.display = 'none';
		document.getElementById(source + 'Button').textContent = 'Show';
		} else {
		document.getElementById(source).style.display = 'block';
		document.getElementById(source + 'Button').textContent = 'Hide';
		}
}

function closeAll() {
	document.getElementById('intro').style.display = 'none';
	document.getElementById('introButton').textContent = "Show";
	document.getElementById('act').style.display = 'none';
	document.getElementById('actButton').textContent = "Show";
	document.getElementById('piano').style.display = 'block';
	document.getElementById('pianoButton').textContent = "Hide";
	document.getElementById('songs').style.display = 'none';
	document.getElementById('songsButton').textContent = "Show";
	document.getElementById('ctrl').style.display = 'block';
	document.getElementById('ctrlButton').textContent = "Hide";
	document.getElementById('ble').style.display = 'none';
	document.getElementById('bleButton').textContent = "Show";
	document.getElementById('share').style.display = 'none';
	document.getElementById('shareButton').textContent = "Show";

}






(function(window) {
    var tones = {
        context: new (window.AudioContext || window.webkitAudioContext)(),
        attack: 1,
        release: 100,
        volume: 1,
        type: wave,


        playFrequency: function(freq) {
            this.attack = this.attack || 1;
            this.release = this.release || 1;
            var envelope = this.context.createGain();
            envelope.gain.setValueAtTime(this.volume, this.context.currentTime);
            envelope.connect(this.context.destination);

            envelope.gain.setValueAtTime(0, this.context.currentTime);
            envelope.gain.setTargetAtTime(this.volume, this.context.currentTime, this.attack / 1000);
            if(this.release) {
                envelope.gain.setTargetAtTime(0, this.context.currentTime + this.attack / 1000, this.release / 1000);
                setTimeout(function() {
                    osc.stop();
                    osc.disconnect(envelope);
                    envelope.gain.cancelScheduledValues(tones.context.currentTime);
                    envelope.disconnect(tones.context.destination);

                }, this.attack * 10 + this.release * 10);
            }

            var osc = this.context.createOscillator();
            osc.frequency.setValueAtTime(freq, this.context.currentTime);
            osc.type = this.type;
            osc.connect(envelope);
            osc.start();
        },

        /** 
         * Usage: 
         * notes.play(440);     // plays 440 hz tone
         * notes.play("c");     // plays note c in default 4th octave
         * notes.play("c#");    // plays note c sharp in default 4th octave
         * notes.play("eb");    // plays note e flat in default 4th octave
         * notes.play("c", 2);  // plays note c in 2nd octave
         */
        play: function(freqOrNote, octave) {
            if(typeof freqOrNote === "number") {
                this.playFrequency(freqOrNote);
            }
            else if(typeof freqOrNote === "string") {
                if(octave == null) {
                    octave = 4;
                }
                this.playFrequency(this.map[octave][freqOrNote.toLowerCase()]);
            }
        },

        getTimeMS: function() {
            return this.context.currentTime * 1000;
        },

        map: [{
            // octave 0
            "c": 16.351,
            "c#": 17.324,
            "db": 17.324,
            "d": 18.354,
            "d#": 19.445,
            "eb": 19.445,
            "e": 20.601,
            "f": 21.827,
            "f#": 23.124,
            "gb": 23.124,
            "g": 24.499,
            "g#": 25.956,
            "ab": 25.956,
            "a": 27.5,
            "a#": 29.135,
            "bb": 29.135,
            "b": 30.868
        },
        {
            // octave 1
            "c": 32.703,
            "c#": 34.648,
            "db": 34.648,
            "d": 36.708,
            "d#": 38.891,
            "eb": 38.891,
            "e": 41.203,
            "f": 43.654,
            "f#": 46.249,
            "gb": 46.249,
            "g": 48.999,
            "g#": 51.913,
            "ab": 51.913,
            "a": 55,
            "a#": 58.27,
            "bb": 58.27,
            "b": 61.735
        },
        {                    
            // octave 2
            "c": 65.406,
            "c#": 69.296,
            "db": 69.296,
            "d": 73.416,
            "d#": 77.782,
            "eb": 77.782,
            "e": 82.407,
            "f": 87.307,
            "f#": 92.499,
            "gb": 92.499,
            "g": 97.999,
            "g#": 103.826,
            "ab": 103.826,
            "a": 110,
            "a#": 116.541,
            "bb": 116.541,
            "b": 123.471
        },
        {                    
            // octave 3
            "c": 130.813,
            "c#": 138.591,
            "db": 138.591,
            "d": 146.832,
            "d#": 155.563,
            "eb": 155.563,
            "e": 164.814,
            "f": 174.614,
            "f#": 184.997,
            "gb": 184.997,
            "g": 195.998,
            "g#": 207.652,
            "ab": 207.652,
            "a": 220,
            "a#": 233.082,
            "bb": 233.082,
            "b": 246.942
        },
        {                    
            // octave 4
            "c": 261.626,
            "c#": 277.183,
            "db": 277.183,
            "d": 293.665,
            "d#": 311.127,
            "eb": 311.127,
            "e": 329.628,
            "f": 349.228,
            "f#": 369.994,
            "gb": 369.994,
            "g": 391.995,
            "g#": 415.305,
            "ab": 415.305,
            "a": 440,
            "a#": 466.164,
            "bb": 466.164,
            "b": 493.883
        },
        {                    
            // octave 5
            "c": 523.251,
            "c#": 554.365,
            "db": 554.365,
            "d": 587.33,
            "d#": 622.254,
            "eb": 622.254,
            "e": 659.255,
            "f": 698.456,
            "f#": 739.989,
            "gb": 739.989,
            "g": 783.991,
            "g#": 830.609,
            "ab": 830.609,
            "a": 880,
            "a#": 932.328,
            "bb": 932.328,
            "b": 987.767
        },
        {                    
            // octave 6
            "c": 1046.502,
            "c#": 1108.731,
            "db": 1108.731,
            "d": 1174.659,
            "d#": 1244.508,
            "eb": 1244.508,
            "e": 1318.51,
            "f": 1396.913,
            "f#": 1479.978,
            "gb": 1479.978,
            "g": 1567.982,
            "g#": 1661.219,
            "ab": 1661.219,
            "a": 1760,
            "a#": 1864.655,
            "bb": 1864.655,
            "b": 1975.533
        },
        {                    
            // octave 7
            "c": 2093.005,
            "c#": 2217.461,
            "db": 2217.461,
            "d": 2349.318,
            "d#": 2489.016,
            "eb": 2489.016,
            "e": 2637.021,
            "f": 2793.826,
            "f#": 2959.955,
            "gb": 2959.955,
            "g": 3135.964,
            "g#": 3322.438,
            "ab": 3322.438,
            "a": 3520,
            "a#": 3729.31,
            "bb": 3729.31,
            "b": 3951.066
        },
        {                    
            // octave 8
            "c": 4186.009,
            "c#": 4434.922,
            "db": 4434.922,
            "d": 4698.636,
            "d#": 4978.032,
            "eb": 4978.032,
            "e": 5274.042,
            "f": 5587.652,
            "f#": 5919.91,
            "gb": 5919.91,
            "g": 6271.928,
            "g#": 6644.876,
            "ab": 6644.876,
            "a": 7040,
            "a#": 7458.62,
            "bb": 7458.62,
            "b": 7902.132
        },
        {                    
            // octave 9
            "c": 8372.018,
            "c#": 8869.844,
            "db": 8869.844,
            "d": 9397.272,
            "d#": 9956.064,
            "eb": 9956.064,
            "e": 10548.084,
            "f": 11175.304,
            "f#": 11839.82,
            "gb": 11839.82,
            "g": 12543.856,
            "g#": 13289.752,
            "ab": 13289.752,
            "a": 14080,
            "a#": 14917.24,
            "bb": 14917.24,
            "b": 15804.264
        }]
    };

    // need to create a node in order to kick off the timer in Chrome.
    tones.context.createGain();

    if (typeof define === "function" && define.amd) {
        define(tones);
    } else {
       window.tones = tones;
    }

}(window));



function emailCurrentPage() {  
console.log("play.js line 1008: emailCurrentPage()");
	var codeText = document.getElementById("title").value  + " \n\n"
		+ " Name: " + document.getElementById("myName").value + " \n\n"
		+ " Score: " + document.getElementById("toneBox").value + " \n\n";

	window.location.href = "mailto:" 
		+ (document.getElementById("tchrEmail").value).toLowerCase()
		+ "?subject=My musical creation: " 
		+ document.getElementById("myName").value 
		+ " Title: " + document.getElementById("title").value 
		+ "&body=" + encodeURI(codeText);
}





function makeCode () {	
try{

var qrcode = new QRCode(document.getElementById("qrcode"), {

});

console.log("play.js line 1029: makeCode()");
var codeText = document.getElementById("myName").value + " : " + document.getElementById("title").value + "\n"
	    	+ " [" + (document.getElementById("tchrEmail").value).toLowerCase() + "] \n\n"
	    	+ " Score: " + document.getElementById("toneBox").value + " \n\n"; 

	document.getElementById("text").value = urlStem + window.btoa(JSON.stringify(codeText));	
		
	var elText = document.getElementById("text");

	if (!elText.value) {
		alert("Input text");
		elText.focus();
		return;
	}
	
	qrcode.makeCode(elText.value);
	} catch(err){}
}

makeCode();

$("#text").
	on("blur", function () {
		makeCode();
	}).
	on("keydown", function (e) {
		if (e.keyCode == 13) {
			makeCode();
		}
	});


function send2Web() {
console.log("play.js line 1061 send2Web()");
var codeText = document.getElementById("myName").value + " : " + document.getElementById("title").value + "\n"
	    	+ " [" + (document.getElementById("tchrEmail").value).toLowerCase() + "] \n\n"
	    	+ " Score: " + document.getElementById("toneBox").value + " \n\n"; 
        	
   	var encodedJSON = urlStem + btoa(JSON.stringify(codeText));
	window.open(encodedJSON);

};




function sendJSON2() {
console.log("play.js line 1075: sendJSON2()");
codeArray1 = [];
codeArray2 = [];
codeArray3 = [];
codeArray4 = [];
codeArray5 = [];

	for (i = 0; i < questions.length; i++) { 
	
	codeArray1.push(document.getElementById("myName").value + ":" + document.getElementById("myClass").value
    	 + "\n " + topic + " [" + (document.getElementById("tchrEmail").value).toLowerCase() + "]");
    	 
    	 codeArray2.push(questions[i] + " \nTime:" + document.getElementById("out" + (i+1) + "Time").innerHTML);
    	 
    	 codeArray3.push(document.getElementById("Output" + (i+1)).value);
    	 
    	 codeArray4.push(scores[i]);
    	 
    	 codeArray5.push("");
    	 
    	 }

        
   	codeArray = [ codeArray1, codeArray2, codeArray3, codeArray4, codeArray5 ];
        	
	var encodedJSON1 = urlStem + btoa(JSON.stringify(codeArray));
	window.open(encodedJSON1);

}
