	var height = 700;
	
	if (matID == "rsen6vj7") {
		 height = 400;
		}

	if (matID == "rbhuakw9") {
		 height = 500;
		}
		
	if (matID == "mJ6p42b2") {
		height = 700;
		}
		
	var ggbApp = new GGBApplet({"appName": "classic", "width": 1000, "height": height, "showToolBar": true, "showAlgebraInput": true, "showMenuBar": true, "setGridVisible":true, "perspective":perspective, "material_id": matID,  "enableCAS": true, appletOnLoad: function (api) { api.evalCommandCAS("x+2x")}}, true);
		window.addEventListener("load", function() { 
		ggbApp.inject("ggb-element");
		});


var serviceWorkerPath = '/sworker-locked.js'
   var appletLocation = '/'
   
   function isServiceWorkerSupported() {
       return 'serviceWorker' in navigator && location.protocol === "https:";
   }
   
   function installServiceWorker() {
       if (navigator.serviceWorker.controller) {
           console.log("Service worker is already controlling the page.");
       } else {
           navigator.serviceWorker.register(serviceWorkerPath, {
               scope: appletLocation
           });
       }
   }
   
   if (isServiceWorkerSupported()) {
       window.addEventListener('load', function() {
           installServiceWorker()
       });
   } else {
       console.log("Service workers are not supported.");
   }
   
   
var e = Math.exp(1);
var pi = Math.PI;
var phi = (1 - (-1)*Math.sqrt(5))/2;

function pow(input1,input2) {
	 	return Math.pow(input1,input2);
}

function random() {
	 	return Math.random();
}

function sin(input) {
	 	return Math.sin(input);
}

function cos(input) {
	 	return Math.cos(input);
}

function tan(input) {
	 	return Math.tan(input);
}

function asin(input) {
	 	return Math.asin(input);
}

function acos(input) {
	 	return Math.acos(input);
}

function atan(input) {
	 	return Math.atan(input);
}

function exp(input) {
	 	return Math.exp(input);
}
function sqrt(input) {
	 	return Math.sqrt(input);
}
function cbrt(input) {
		return Math.cbrt(input);
}


		var m = 2;
		var n = 2;
		var a = 1;
		var b = -4;
		var c = 3;
		var d = 0;
		var mathField = "";
		
		function setFunction() {
			 var myVar1 = document.getElementById("myVar").value;
			 if (myVar1 == "") { 
			 	myVar1 = prompt("Please enter an expression or equation. ", ""); }
			 	
			myVar1 = myVar1.replace(/cf/gi, "ContinuedFraction")
			document.getElementById("myVar").value = myVar1;
			 
			 document.ggbApplet.evalCommand("ShowGrid(true)");
			 if (myVar1.indexOf("raction") > -1) { 
			 	cfResize(); 
			 	myVar1 = list2frac(myVar1);
			 }
			 
			myVar1 = myVar1.replace(/math.\(/gi, "")
			document.ggbApplet.evalCommand(myVar1);
			 
			 
			 document.getElementById("myVALresult").innerHTML = "\\(" + myVar1 + "\\)";
			 MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
			
		 }

	
		function list2frac(input) {
		
			if (input.indexOf("\,") > -1) {
			 	input = input.replace(/ContinuedFraction\(/gi, "")
			 	
			 	input = input.substring(0,input.length-1);
			 	input = input.replace("\[","");
				input = input.replace("\]","");
		 		var list = input.split(",");
		 		var num = 1;
				var den = 1;
		 		
				if (list.length > 1) {
					var term0 = list[list.length-1];
					num = 1;
					den = term0;
					for (i = 0; i < list.length - 1; i++) {
						term0 = den* list[list.length-i-2] - (-num);
						num = den;
						den = term0;
					
					}
					input = "ContinuedFraction(" + den + "/" + num + ")";
				}
			 	}
				return input;
		}
		
		 function getFunction(object) {
			 input = prompt("Enter a GeoGebra variable name to see its value ",object);
			
			 input = input.replace(/X/g,"x");
			 //input = latex2mth(input)
				
			var inputVal = document.ggbApplet.getValueString(input);
			
			 	document.ggbApplet.evalCommand("ShowGrid(true)");
			 	alert(inputVal);

		 	document.getElementById("myVALresult").innerHTML = "\\[" + inputVal + "\\]";
		 	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
		 }



	function setCAS() {
		var CASresult1 = document.ggbApplet.evalCommandCAS("x + 2x");
		document.ggbApplet.evalCommand("ShowGrid(true)");
	 	if (CASresult1 == "3x") {
	 		 var myCASvalue = prompt("Please enter a CAS expression or equation ", document.getElementById("myCAS").value);
	 		 if (myCASvalue.indexOf("actor") < 0) {
	 			myCASvalue = myCASvalue.replace(/cf/gi, "ContinuedFraction")
	 		}
	 		//document.getElementById("myVar").value = myCASvalue;
	 		//setFunction();
	 		document.getElementById("myCAS").value = myCASvalue;
	 		var myCASvalue1 = myCASvalue;
	 		 myCASvalue = myCASvalue.replace(/math\.\(/gi, "")
	 		 var CASresult = document.ggbApplet.evalCommandCAS(myCASvalue);
	 		 
	 		 if (myCASvalue.indexOf("cf") > -1 || myCASvalue.indexOf("raction") > -1) {
	 		 if (myCASvalue.indexOf("actor") < 0) {
	 		 	myCASvalue = list2frac(myCASvalue1);
	 		 	cflist = getCF(myCASvalue1);
	 		 	CASresult = cflist[0];
	 		 	var CASresult1 = cflist[1];
	 		 	var appr = cflist[2];
	 		 	var err = cflist[3];
	 		 	var exct = (cflist[4]);
	 		 	var appr1 = cflist[5];
	 		 	
	 		 	//if (exct.indexOf("\/") > -1) {
	 		 		//exct = "\\frac{" + exct.replace(/\//, "}{") + "}";
	 		 	//}
	 		 	
	 		 	//myCASvalue = math2latex(myCASvalue);
	 		 	//exct = math2latex(exct);
	 		 	
	 		 	
	 		 	if (Math.abs(err) < 0.000001) {
	 		 		CASresult = CASresult + " = " + exct + " = " + appr;
	 		 	} else {
	 		 		CASresult = CASresult.replace(/\]/, ", ...\]");
	 		 		CASresult = CASresult + "\\)</P><P style='color:red'><b>\\( \\approx " + appr1 + " = " + appr + "\\)</b></P><P style='color:red'>\\((Error: " + err + ")";
	 		 	}
	 		 	
	 		 	document.getElementById("myVALresult").innerHTML = "<P style='color:red'>\\(" + myCASvalue + "\\)</P>";
	 		 	document.getElementById("myCASresult").innerHTML =  "<P style='color:red'>&rArr; \\(" + CASresult + "\\)</P>";
	 		 	
	 		 	}
	 		 	} else {
	 		 	
	 		 		alert(myCASvalue  + "\n=> " + CASresult);
	 		 	
	 		 		//CASresult = latex2mth(CASresult);
	 		 		//myCASvalue = math2latex(myCASvalue);
	 		 		//CASresult = math2latex(CASresult);
	 		 		
	 		 	
				document.getElementById("myVALresult").innerHTML = "<P style='color:red'>\\(" + myCASvalue + "\\)</P>";
	 		 	document.getElementById("myCASresult").innerHTML =  "<P style='color:red'>&rArr; \\(" + CASresult + "\\)</P>";
	 		 	}
	 		 } else {alert("Try again - CAS is not activated")}
	 		 	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
	 		 	
		 }
		 
	
		 
		function getCF(input) {
		
			if (input.indexOf("cf") > -1 || input.indexOf("raction") > -1) {
				var cfval = "";
				var list = [];
				var cflist = "";
				var steps = 5;
				var steps1 = 5;
				var text2 = "";
				var pi = Math.PI;
				var e = Math.exp(1);
				var text0 = "";
				var text1 = "";
				var tail = "";
				var tail1 = "";
				var appr = "";
				var appr1 = "";
				var exct = "";
				var err = 0;
				
				input= input.replace(/cf/gi,"ContinuedFraction");
				var input1 = input;
				var input0 = input;
				
				if (input1.indexOf("raction") > -1) {
					cfval = input1.replace(/ContinuedFraction\(/,"");
					cfval = cfval.substring(0,cfval.length-1);
					list = cfval.split(",");
					input1 = list[0];
					exct = eval(input1);
					
					if (list.length > 1) { steps = list[1]; steps1 = steps;} 
					
					var a0 = eval(input1);
					var a1 = Math.floor(a0);
		 			cflist = a1;
		 			
		 			var rem = a0 - a1;
		 			if (rem > 0) {
		 				var inv = eval(1/rem);
		 				var conv1 = Math.floor(+inv);
		 				if (Math.abs(+rem) > 0) { 
		 				cflist = a1 + "," + conv1;
		 				
		 				var text = " Input = " + a0 + "\n " + input + " = [ " + a1 + ", " + conv1 + ", ... ] \n How many more convergents would you like?";
		 				text1 = a1 + " + \\frac{1}{\\left(" + conv1;
		 				tail = "\\right)}";
		 				tail1 = "\\right)}";
		 				
		 				steps = prompt(text, steps);
		 				
		 				if (steps !== undefined && steps !== "" && steps !== null) { } else { steps = steps1; }
		 				steps = steps.toLowerCase();
		 				for (i = 0; i < +steps; i++) {
		 	 					a0 = +inv - conv1;
			 					a1 = Math.floor(a0);
			 					rem = a0 - a1;
			 					inv = eval(1/rem);
			 					conv1 = Math.floor(+inv);
			 					if (conv1 > 1000 || !Number.isFinite(conv1)) { 
				 					text2 = input + " = [" + cflist + "]";
				 					
				 				break;} else {
				 					cflist = cflist + "," + conv1; 
				 					text2 = input + "= [" + cflist + ", ... ]";
				 					
				 					text1 = text1 + "+ \\frac{1}{\\left(" + conv1;
				 					tail = tail + tail1;
				 					appr  = input1;
				 					//appr = document.ggbApplet.evalCommandCAS((text1 + tail));
		 						}}
									input = cflist;
		 				} else { 
							cflist = a1; 										input = cflist;
							text2 = input + " = [" + cflist + ", ... ]";
							text1 = a1;
							tail = "";
							tail1 = "";
							appr = input1;
	 					}
	 					}
				}
			
			//reset0();
			//mathField.write(text1 + tail);
			//document.getElementById("myVALresult").innerHTML = text1 + tail;
			
			//appr = document.ggbApplet.evalCommandCAS(document.getElementById("myCAS").value);
			appr1 = appr;
			appr = eval(appr);
			//reset0(); 
			//mathField.write(input0);
			
			
			err = eval((appr - exct)/exct);
			
			//var test = prompt("Convert to fraction form? ","n");
			//if (test == "Y" || test == "y") {
				//reset0();
				//mathField.write(text1 + tail);
				
					//document.getElementById("myCASresult").innerHTML = text1 + tail;

			//}
			}
			
			//alert(["[" + input + "]", (text1 + tail), appr, err, input1, appr1]);
			
			return ["[" + input + "]", (text1 + tail), appr, err, input1, appr1];
			
		}
		
		 		
		 		
		 var fn = "";
		 var eqn = 0;
		 var stepSize = 1;
		 var col0 = 0;
		 var col1 = 1;
		 var minX = -2;
		 var maxX = 10;
		 var minY = -2;
		 var maxY = 10;
		 var xminList = [];
		 var xmaxList = [];
		 var yminList = [];
		 var ymaxList = [];
		 
	function viewTable(fn) {
		 
		 	var alphaList = ["A","B","C","D","E","F","G","H", "I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		 	var funcList = ["f","g","h","j","k","l","m","n"];
		 	var eqRight = "";
		 	var setWindow = "y";
		 	
		 	document.ggbApplet.evalCommand("ShowGrid(true)");
		 	
		 	var colors = ["black", "darkgreen", "red", "blue", "orange", "purple", "darkgray", "brown", "yellow", "black"];
		 	
		 	if (fn !== undefined) { } else {
		 		fn = document.getElementById("myVar").value;
		 	}
		 	if (fn !== undefined) { } else { fn = "";}
			
		 	if (eqn > 0) { } else {
		 	fn = prompt("Welcome to Table View. Please enter a function or equation to view... ", fn);
		 	
		 	}
		 	
		 	if (fn !== undefined) { } else { fn = "";}
		 	if (fn.indexOf("=") > -1) {
		 			var list = fn.split("=");
		 			fn = list[0];
		 			eqRight = list[1];
		 			eqn = 1
		 		} else { eqn = 0; }
		 	
		 	var ss = "";
		 	for ( i = 0; i < 6; i++ ) {
		 		ss = document.ggbApplet.getValueString( alphaList[i] + "1");
		 		if (ss == "") {
		 			if (col0 == 0) {
		 			col0 = i-(-1);
		 			col1 = col0;
		 			break;
		 		}}
		 	}
		 		
		 	
		 	if (fn.length > 0 && eqn == 0) {
		 	setWindow = prompt("xMin = " + minX + ", xMax = " + maxX + ",  Step size = " + stepSize + "\n\nChange window settings? ", setWindow);
		 	if (setWindow == "y" || setWindow == "Y") {
		 	minX = prompt("Enter a minimum x-value: ", minX);
		 	maxX = prompt("Enter a maximum x-value: ", maxX);
		 	stepSize = prompt("Enter a step size: ", stepSize);
		 	col1 = prompt("x-values will appear in column " + (col0) + ". In which column would you like the function values? ", (col1-(-1)));
		 	} else {col1 = (col1-(-1));}
		 	} else {col1 = (col1-(-1));}
		 	
		 	var colorColumn = alphaList[col0-1];
		 	var colorColumn1 = alphaList[col1-1];
		 	var myColumn = alphaList[col1-2] + alphaList[col1-2];

		 	document.ggbApplet.setPerspective("SG");
		 	document.ggbApplet.evalCommand("f" + (col1) + "(x) = " + fn);
		 	
		 	var xlist = [];
		 	var flist = [];
			var upper = Math.ceil(parseFloat((maxX - minX)/stepSize)) + 1;
		 	for ( i = 0; i < upper; i++ ) {
		 		var incr = i* stepSize - (-1*minX);
		 		xlist.push(incr);
		 		var xval = document.ggbApplet.getValue("f" + (col1) + "(" + incr + ")");
		 		flist.push(xval);
		 		
		 		document.ggbApplet.evalCommand(myColumn + (i-(-1)) + " = (" + alphaList[col0-1] + (i-(-1)) + ", " + colorColumn1 + (i-(-1)) + ")");
		 		}

				document.ggbApplet.evalCommand('FillColumn(' + (col0) + ',{' + xlist + '})');
		 		document.ggbApplet.evalCommand('FillColumn(' + (col1) + ',{' + flist + '})');
		 		
		 		var start = 0;
		
		 		for ( i = start; i < xlist.length; i++ ) {
		 		
		 			document.ggbApplet.evalCommand('SetColor('+ alphaList[col0-1] +  (i-(-1)) + ', black)');
		 			document.ggbApplet.evalCommand('SetColor(' + alphaList[col1-1] + (i-(-1)) + ',' + colors[col1-1] + ')');
		 			document.ggbApplet.evalCommand('SetColor(f' + (col1) + ',' + colors[col1-1] + ')');
		 			
				}
				
			var yMax1 = Math.max(...flist) - (-1);
			var yMin1 = Math.min(...flist) - (1);	
		 	var xMax1 = Math.max(...xlist) - (-1);
			var xMin1 = Math.min(...xlist) - (1);
			
			xminList.push(xMin1);
			xmaxList.push(xMax1);
			yminList.push(yMin1);
			ymaxList.push(yMax1);
			
			xMin = Math.min(...xminList);
			xMax = Math.max(...xmaxList);
			yMin = Math.min(...yminList);
			yMax = Math.max(...ymaxList);

		 	document.ggbApplet.evalCommand("ZoomIn(" + xMin + "," + yMin + "," + xMax + "," + yMax + ")");
			fn = "";
			if (eqn !== 0) { viewTable(eqRight);}
			
		 }
		 
	function reset() {

		 	document.ggbApplet.reset();
		 	document.ggbApplet.evalCommand("ShowGrid(true)");
		 	document.getElementById("myVALresult").innerHTML = "<P></P>";
		 	document.getElementById("myCASresult").innerHTML = "<P></P>";
		 	document.getElementById("myVar").value = "";
		 	document.getElementById("myCAS").value = "";
		 		 		
		 	fn = "";
			eqn = 0;
			 col0 = 0;
			 col1 = 1;
			 stepSize = 1;
			 minX = -2;
			 maxX = 10;
			 minY = -2;
			 maxY = 10;
			 xminList = [];
			 xmaxList = [];
			 yminList = [];
			 ymaxList = [];
			 
		 		}
		 		
		
		function cfResize() {
			
			document.ggbApplet.evalCommand("ZoomIn(0,-0.125,1,0)");
			document.ggbApplet.evalCommand("ShowGrid(false)");
			document.ggbApplet.evalCommand("ShowAxes(false)");
		}
		
		
		function resetGGB() {
		 	document.ggbApplet.reset();
		 	document.getElementById("myVALresult").innerHTML = "<P></P>";
		 	document.getElementById("myCASresult").innerHTML = "<P></P>";
		 	document.getElementById("myVar").value = "";
		 	document.getElementById("myCAS").value = "";
		 	document.ggbApplet.evalCommand("ShowGrid(true)");
		 	fn = "";
			eqn = 0;
			 col0 = 0;
			 col1 = 1;
			 stepSize = 1;
			 minX = -2;
			 maxX = 10;
			 minY = -2;
			 maxY = 10;
			 xminList = [];
			 xmaxList = [];
			 yminList = [];
			 ymaxList = [];

		 }
		 
		 function reset0() {
		 	
		 	document.getElementById("myVALresult").innerHTML = "<P></P>";
		 	document.getElementById("myCASresult").innerHTML = "<P></P>";
		 	document.getElementById("myVar").value = "";
		 	document.getElementById("myCAS").value = "";

		 }
		 
		 function resetWrite() {
		 	
		 	document.getElementById("myVALresult").innerHTML = "<P></P>";
		 	document.getElementById("myCASresult").innerHTML = "<P></P>";
		 	document.getElementById("myVar").value = "";
		 	document.getElementById("myCAS").value = "";
		 }
		 
		
		function setQuadText() {
		 		
			 			var aVal = document.getElementById("aBox").value;
			 			if (aVal == "") {
			 				aVal = prompt("Please enter a value for a","");
			 				document.getElementById("aBox").value = aVal;
			 			}
			 			var bVal = document.getElementById("bBox").value;
			 			if (bVal == "") {
			 				bVal = prompt("Please enter a value for b","");
			 				document.getElementById("bBox").value = bVal;
			 			}
			 			var cVal = document.getElementById("cBox").value;
			 			if (cVal == "") {
			 				cVal = prompt("And a value for c","");
			 				document.getElementById("cBox").value = cVal;
			 			}
			 			var soln1 = eval("(-1*" + bVal + "+ Math.sqrt(" + bVal + "*" + bVal + "-4*" + aVal + "*" + cVal + "))/(2*" + aVal + ")");
			 			var soln2 = eval("(-1*" + bVal + "- Math.sqrt(" + bVal + "*" + bVal + "-4*" + aVal + "*" + cVal + "))/(2*" + aVal + ")");
			 			var soln = "the solution set = {" + soln1 + ", " + soln2 + "}";
			 			var eqn = "When a = " + aVal + ", b = " + bVal + ", c = " + cVal + " then " + soln;
						document.getElementById("result").innerHTML = eqn

	 		 			 document.ggbApplet.setValue("a",aVal);
	 		 			 document.ggbApplet.setValue("b",bVal);
	 		 			 document.ggbApplet.setValue("c",cVal);
			 			var fx = document.ggbApplet.getValueString("f");
						document.getElementById("myCAS").value = "Solve(" + fx + " = 0)"
						
					}
					
					function setQuadPrompt() {
		 		
		 				var aVal = document.ggbApplet.getValue("a");
		 				var bVal = document.ggbApplet.getValue("b");
		 				var cVal = document.ggbApplet.getValue("c");
			 			
			 				aVal = prompt("Please enter a value for a",aVal);
			 			
			 				bVal = prompt("Please enter a value for b",bVal);
			 				
			 				cVal = prompt("And a value for c",cVal);
			 				
			 			 document.ggbApplet.setValue("a",aVal);
	 		 			 document.ggbApplet.setValue("b",bVal);
	 		 			 document.ggbApplet.setValue("c",cVal);
	 		 			 
			 			var soln1 = eval("(-1*" + bVal + "+ Math.sqrt(" + bVal + "*" + bVal + "-4*" + aVal + "*" + cVal + "))/(2*" + aVal + ")");
			 			var soln2 = eval("(-1*" + bVal + "- Math.sqrt(" + bVal + "*" + bVal + "-4*" + aVal + "*" + cVal + "))/(2*" + aVal + ")");
			 			var soln = "the solution set = {" + soln1 + ", " + soln2 + "}";
			 			var eqn = "When a = " + aVal + ", b = " + bVal + ", c = " + cVal + " then " + soln;
			 			alert(eqn);
						document.getElementById("result").innerHTML = eqn;
						
					}

myList = [];

function readData1(myVar) {

	myList.push(myVar);
	
		var nList = myList.length;
		var myColumn = "AA";
		var colorColumn1 = "A";
		var colorColumn2 = "AAA";
		var myColor = "red";
		
		document.ggbApplet.evalCommand(myColumn + nList + " = " + myVar);
		document.ggbApplet.evalCommand(colorColumn1 + (nList) + " = (" + (nList - 1) + ", " + myColumn + nList + ")");
		document.ggbApplet.evalCommand('SetColor(' + colorColumn1 + (nList) + ', "' + myColor + '")');
		
		var xMax = Math.max(90, Math.ceil(nList/10)*10);
		document.ggbApplet.evalCommand("ZoomIn(-1, -5, " + xMax + ",110)");
		
		if (nList > 1) {
		document.ggbApplet.evalCommand(colorColumn2 + (nList) + " = Segment(("+(nList-2) + ", " + myColumn +(nList-1) + ") , ("+(nList - 1) + ", " + myColumn +(nList) + "))");
		document.ggbApplet.evalCommand('SetColor(' + colorColumn2 + (nList) + ', "' + myColor + '")');
		}
}

function readData(myVar1, myVar2, myList1, myList2, myColumn1, myColumn2, colorColumn1, colorColumn2, colorColumn11, colorColumn22, myColor) {
		
		var applet = document.ggbApplet;
		
		myList1.push(myVar1);
		myList2.push(myVar2);
		
		var nList1 = myList1.length;
		var nList2 = myList2.length;
		
		var maxList1 = Math.max.apply(Math, myList1);
		var minList1 = Math.min.apply(Math, myList1)
		var maxList2 = Math.max.apply(Math, myList2);
		var minList2 = Math.min.apply(Math, myList2)
		
	if (nList2 > 1) {
		applet.evalCommand(myColumn1 + nList1 + " = " + myVar1);
		applet.evalCommand(myColumn2 + nList2 + " = " + myVar2);
		applet.evalCommand(colorColumn1 + (nList1) + " = (" + myColumn2 + (nList2) + ", " + myColumn1 + nList1 + ")");
		applet.evalCommand('SetColor(' + colorColumn1 + (nList1) + ', "' + myColor + '")');

var factr = 10;	

		var yMax = (Math.max.apply(Math, myList1)*factr)/factr;
		var yMin = (Math.min.apply(Math, myList1)*factr)/factr;
		var xMax = (Math.max.apply(Math, myList2)*factr)/factr;
		var xMin = (Math.min.apply(Math, myList2)*factr)/factr;
		
		applet.evalCommand("ZoomIn(" + xMin + "," + yMin + "," + xMax + "," + yMax + ")");
	
		if (nList2 > 1) {
		applet.evalCommand(colorColumn2 + (nList1) + " = Segment(("+ myColumn2 + (nList2 - 1) + ", " + myColumn1 + (nList1-1) + ") , ("+ myColumn2 + (nList2) + ", " + myColumn1 +(nList1) + "))");
		applet.evalCommand('SetColor(' + colorColumn2 + (nList1) + ', "' + myColor + '")');
		}
		}
		}


function bubbleSort(inputArr, inputArr2) {

	let bubbleSort = (inputArr) => {
    	let len = inputArr.length;
 	let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                let tmp2 = inputArr2[i];
                inputArr[i] = inputArr[i + 1];
                inputArr2[i] = inputArr2[i + 1];
                inputArr[i + 1] = tmp;
                inputArr2[i + 1] = tmp2;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};
	return [inputArr, inputArr2];
}

var qn = 0;
var plotList = ["BarChart",
				"BoxPlot",
				"DotPlot",
				"FrequencyPolygon",
				"Histogram",
				"StemPlot",
				"ScatterPlot",];

var dataSet1 = [];
var dataSet2 = [];
var reduced1 = 0;
var reduced2 = 0;

function reduceSize() {

	reduceFactor = prompt("Enter a factor to reduce data set size (2 will remove every second element, 1 will keep sets the same): ","1");
	document.getElementById("reducer").textContent = "Reduce Data Sets: Factor " + reduceFactor;
}


function defineList(input) {

		dataSet1 = (document.getElementById("dataSet1").value).split(",");
		dataSet2 = (document.getElementById("dataSet2").value).split(",");;
		var temp1 = [];
		var temp2 = [];
	
		//if (reduceFactor > 1) {
		if (input != 2 && reduced1 == 0) {
			for ( i = 0; i < dataSet1.length; i++ ) {
			
				if (i % reduceFactor == 0) {
					temp1.push(dataSet1[i]);
				}
			}
				reduced1 = 1
				dataSet1 = temp1;
				document.getElementById("dataSet1").value = dataSet1;
				document.ggbApplet.evalCommand("dataSet1 = {" + dataSet1 + "}");
				document.ggbApplet.evalCommand('FillColumn(1,{' + dataSet1 + '})');
		}
		
		if (input != 1 && reduced2 == 0) {
			for ( i = 0; i < dataSet2.length; i++ ) {
				if (i % reduceFactor == 0) {
					temp2.push(dataSet2[i]);
				}
			}
				reduced2 = 1
				dataSet2 = temp2;
				document.getElementById("dataSet2").value = dataSet2;
				document.ggbApplet.evalCommand("dataSet2 = {" +dataSet2 + "}");
				document.ggbApplet.evalCommand('FillColumn(2,{' + dataSet2 + '})');
		}
		
			document.getElementById("reducer").textContent = "Reduce Data Sets: Factor " + reduceFactor;
		//}
		
}

function list2table(arr) {
	
	var a = [], b = [], prev;
	
	arr.sort(function(a, b){return a-b});
    	
    	for ( var i = 0; i < arr.length; i++ ) {
        	if ( arr[i] !== prev ) {
            		a.push(arr[i]);
            		b.push(1);
        	} else {
            		b[b.length-1]++;
        	}
        	prev = arr[i];
    	}
    	
    	dataSet1 = a;
    	dataSet2 = b;
    	defineList(3);
    	
	document.ggbApplet.evalCommand('FillColumn(5,{' + a + '})');
	document.ggbApplet.evalCommand('FillColumn(6,{' + b + '})');
    return [a, b];

}

function table2list(list1, list2) {
	var myList = [];
	for (i = 0; i < list1.length; i++) { 
		for (j = 0; j < list2[i]; j++) { 
			myList[myList.length] = list1[i];
		}
	}
	return myList;
}

function resetggb() {
			document.ggbApplet.reset();
}

function resetall() {
			document.ggbApplet.reset();
	 		document.ggbApplet.evalCommand('Delete(A)');
	 		document.ggbApplet.evalCommand('Delete(B)');
	 		document.ggbApplet.evalCommand('Delete(C)');
	 		document.ggbApplet.evalCommand('Delete(D)');
	 		document.ggbApplet.evalCommand('Delete(J)');
	 		document.ggbApplet.evalCommand('Delete(K)');
	 		dataSet1 = [];
	 		dataSet2 = [];
	 		compare = 0; 
	 		connect = 0; 
	 		connectSwitch();
	 		reduceFactor = 1;
	 		reduced1 = 0;
	 		reduced2 = 0;
	 		plotType = 6;
	 		document.getElementById("reducer").textContent = "Reduce Data Sets: Factor " + reduceFactor;
	 		document.getElementById("dataSet1").value = "";
	 		document.getElementById("dataSet2").value = "";
	 		document.getElementById("myVar").value = "?";
}
	 	
function simpleSample() {
	document.getElementById("dataSet1").value = "1,2,3,4,5";
	 document.getElementById("dataSet2").value = "5,4,3,2,1";
	defineList(3);
}
function showData() {
		document.getElementById("myVar").value = "";
		//defineList(3);
		var opt1 = prompt("Reset graph to begin (y/n)?","y");
		var list01 = document.getElementById("dataSet1").value;
		list01 = list01.replace(/[{()}]/g,"");
		list01 = list01.replace(/[[\]]/g,'')
		list01 = list01.replace(/\s/g,',');
		var list1 = list01.split(",");
		var list02 = document.getElementById("dataSet2").value;
		list02 = list02.replace(/[{()}]/g,"");
		list02 = list02.replace(/[[\]]/g,'')
		list02 = list02.replace(/\s/g,',');
		var list2 = list02.split(",");
		var range1 = list1.length;
		var range2 = list2.length;
		var range = Math.min(range1, range2);
		
		if (range1 <= 1 && range2 > 1) {
			range = range2;
		} else if (range2 <= 1 && range1 > 1) {
			range = range1;
		}
		
		if (range1 <= 1 || range2 <= 1) {
			compare = 0;
		}
		
		if (opt1 == "y" || opt1 == "Y") {
	 		document.ggbApplet.reset();
	 		//document.ggbApplet.evalCommand('Delete(A)');
	 		//document.ggbApplet.evalCommand('Delete(B)');
	 		//document.ggbApplet.evalCommand('Delete(C)');
	 		//document.ggbApplet.evalCommand('Delete(D)');
	 		//document.ggbApplet.evalCommand('Delete(J)');
	 		//document.ggbApplet.evalCommand('Delete(K)');
	 		dataSet1 = [];
	 		dataSet2 = [];
	 	}
	 	
		var xMin = -1;
		var xMax = 10;
		var yMin = -1;
		var yMax = 10;
		var xMax1 = Math.ceil((range+1)/10)*10;
		var xMin1 = -1;
		var yMax1 = 10;
		var yMin1 = -1;
		var xMax2 = xMax1;
		var xMin2 = -1;
		var yMax2 = 10;
		var yMin2 = -1;
	 	
	 	if (range1 > 1) {
	 		document.ggbApplet.evalCommand('FillColumn(1,{' + list1 + '})');
	 		
			yMax1 = Math.ceil((Math.max(...list1)+1)/10)*10;
			yMin1 = Math.floor((Math.min(...list1)-1)/10)*10;
	 	}
		
		if (range2 > 1) {
			document.ggbApplet.evalCommand('FillColumn(2,{' + list2 + '})');
			
			yMax2 = Math.ceil((Math.max(...list2)+1)/10)*10;
			yMin2 = Math.floor((Math.min(...list2)-1)/10)*10;
		}
		
		
		if (compare > 0) {
		
			yMax = Math.ceil((Math.max(...list2)+1)/10)*10;
			yMin = Math.floor((Math.min(...list2)-1)/10)*10;			
			xMax = Math.ceil((Math.max(...list1)+1)/10)*10;
			xMin = Math.floor((Math.min(...list1)-1)/10)*10;
			
		} else {
			xMin = Math.min(xMin1, xMin2);
			xMax = Math.max(xMax1, xMax2);
			yMin = Math.min(yMin1, yMin2);
			yMax = Math.max(yMax1, yMax2);
			
		}
		
		
		document.ggbApplet.evalCommand("ZoomIn(" + xMin + "," + yMin + "," + xMax + "," + yMax + ")");
		
		if (plotType == 0) {
			if (range1 > 1 && range2 > 1) {
			compare = 1;
			document.ggbApplet.evalCommand(plotList[plotType] + "({" + list1 + "},{" + list2 + "})");
			 } else if (range1 > 1 && range2 <= 1) {
			 	list1 = list2table(list1)[0];
			 	list2 = list2table(list1)[1];
				document.ggbApplet.evalCommand(plotList[plotType] + "({" + list1 + "},{" + list2 + "})");
			} else if (range1 <= 1 && range2 > 1) {
				list1 = list2table(list2)[0];
			 	list2 = list2table(list2)[1];
				document.ggbApplet.evalCommand(plotList[plotType] + "({" + list1 + "},{" + list2 + "})");
			}
			defineList(3);
			document.getElementById("myVar").value = "BarChart(dataSet1,dataSet2)";
			
			xMin = Math.min(...dataSet1) - 1;
			xMax = Math.max(...dataSet1) + 1;
			yMin = Math.min(...dataSet2) - 2;
			yMax = Math.max(...dataSet2) + 2;
			document.ggbApplet.evalCommand("ZoomIn(" + xMin + "," + yMin + "," + xMax + "," + yMax + ")");
			
		} else if (plotType == 1) {
			compare = 0;
			
			var x1 = (document.getElementById("dataSet1").value).split(",");
			
			if (range1 > 1 && range2 > 1) {
				var q1 = prompt("Univariate (two single lists - enter 1) or bivariate (list1 x list2 - enter 2) analysis?", "1");
				if (q1 == 1) {
					compare = 0;
					document.ggbApplet.evalCommand(plotList[plotType] + "(1,1,{" +(list1) + "})");
					document.getElementById("myVar").value = "BoxPlot(1,1,dataSet1)";
					var x1 = (document.getElementById("dataSet1").value).split(",");
					document.ggbApplet.evalCommand(plotList[plotType] + "(5,1,{" +(list2) + "})");
					document.getElementById("myVar").value = "BoxPlot(5,1,dataSet2)";
					var x2 = (document.getElementById("dataSet2").value).split(",");
					
					var xMin1 = Math.min(...x1) - 1;
					var xMin2 = Math.min(...x2) - 1;
					var xMax1 = Math.max(...x1) + 1;
					var xMax2 = Math.max(...x2) + 1;
					xMin = Math.min(xMin1, xMin2) - 1;
					xMax = Math.max(xMax1, xMax2) + 1;
					yMin = -2;
					yMax = 10;
					
				} else {
					document.ggbApplet.evalCommand(plotList[plotType] + "(1,1,{" +(table2list(list1,list2)) + "})");
					document.getElementById("myVar").value = "BoxPlot(1,1,dataSet1)";
					x1 = (document.getElementById("dataSet1").value).split(",");
					xMin = Math.min(...x1) - 1;
					xMax = Math.max(...x1) + 1;
					yMin = -2;
					yMax = 10;
				}
			} else if (range1 > 1 && range2 <= 1) {
				document.ggbApplet.evalCommand(plotList[plotType] + "(1,1,{" +(list1) + "})");
				document.getElementById("myVar").value = "BoxPlot(1,1,dataSet1)";
				x1 = (document.getElementById("dataSet1").value).split(",");
				xMin = Math.min(...x1) - 1;
				xMax = Math.max(...x1) + 1;
				yMin = -2;
				yMax = 10;
			
			} else if (range1 <= 1 && range2 > 1) {
				document.ggbApplet.evalCommand(plotList[plotType] + "(1,1,{" +(list2) + "})");
				document.getElementById("myVar").value = "BoxPlot(1,1,dataSet2)";
				x1 = (document.getElementById("dataSet2").value).split(",");
				xMin = Math.min(...x1) - 1;
				xMax = Math.max(...x1) + 1;
				yMin = -2;
				yMax = 10;
			}
			defineList(3);
			
			document.ggbApplet.evalCommand("ZoomIn(" + xMin + "," + yMin + "," + xMax + "," + yMax + ")");
		
		} else if (plotType == 2) {
			compare = 0;
			
			if (range1 > 1 && range2 > 1) {
				compare = 1;
				document.ggbApplet.evalCommand(plotList[plotType] + "({" +(table2list(list1,list2)) + "})");
				document.getElementById("myVar").value = "DotPlot(dataSet1)";
				
			} else if (range1 > 1 && range2 <= 1) {
				list1 = list2table(list1)[0];
			 	list2 = list2table(list1)[1];
				document.ggbApplet.evalCommand(plotList[plotType] + "({" +(list1) + "})");
				document.getElementById("myVar").value = "DotPlot(dataSet1)";
				
			} else if (range1 <= 1 && range2 > 1) {
				list1 = list2table(list2)[0];
			 	list2 = list2table(list2)[1];
				document.ggbApplet.evalCommand(plotList[plotType] + "({" +(list2) + "})");
				document.getElementById("myVar").value = "DotPlot(dataSet2)";
				
			}
			defineList(3);
			
			xMin = Math.min(...dataSet1) - 1;
			xMax = Math.max(...dataSet1) + 1;
			yMin = Math.min(...dataSet2) - 2;
			yMax = Math.max(...dataSet2) + 2;
			document.ggbApplet.evalCommand("ZoomIn(" + xMin + "," + yMin + "," + xMax + "," + yMax + ")");
			
		} else if (plotType == 3) {
		
			if (range1 > 1 && range2 > 1) {
			compare = 1;
			if (qn == 1) {

			 	list1 =list2table(list2)[0];
			 	list2 = list2table(list2)[1];
			
				document.ggbApplet.evalCommand(plotList[plotType] + "({" + list1 + "},{" + list2 + "})");
				
			} else {
			document.ggbApplet.evalCommand(plotList[plotType] + "({" + list1 + "},{" + list2 + "})");
			}
			 } else if (range1 > 1 && range2 <= 1) {
			 	list1 = list2table(list1)[0];
			 	list2 = list2table(list1)[1];
				document.ggbApplet.evalCommand(plotList[plotType] + "({" + list1 + "},{" + list2 + "})");
			} else if (range1 <= 1 && range2 > 1) {
				list1 = list2table(list2)[0];
			 	list2 = list2table(list2)[1];
				document.ggbApplet.evalCommand(plotList[plotType] + "({" + list1 + "},{" + list2 + "})");
			}
			
			document.getElementById("myVar").value = "FrequencyPolygon(dataSet1,dataSet2)";
			defineList(3);
			xMin = Math.min(...dataSet1) - 1;
			xMax = Math.max(...dataSet1) + 1;
			yMin = Math.min(...dataSet2) - 2;
			yMax = Math.max(...dataSet2) + 2;
			document.ggbApplet.evalCommand("ZoomIn(" + xMin + "," + yMin + "," + xMax + "," + yMax + ")");
			
		} else if (plotType == 4) {
		
			if (range1 > 1 && range2 > 1) {
			compare = 1;
			document.ggbApplet.evalCommand(plotList[plotType] + "({" + list1 + "},{" + list2 + "})");
			 } else if (range1 > 1 && range2 <= 1) {
			 	list1 = list2table(list1)[0];
			 	list2 = list2table(list1)[1];
				document.ggbApplet.evalCommand(plotList[plotType] + "({" + list1 + "},{" + list2 + "})");
			} else if (range1 <= 1 && range2 > 1) {
				list1 = list2table(list2)[0];
			 	list2 = list2table(list2)[1];
				document.ggbApplet.evalCommand(plotList[plotType] + "({" + list1 + "},{" + list2 + "})");
			}
			defineList(3);
			document.getElementById("myVar").value = "Histogram(dataSet1,dataSet2)";
			
			xMin = Math.min(...dataSet1) - 1;
			xMax = Math.max(...dataSet1) + 1;
			yMin = Math.min(...dataSet2) - 2;
			yMax = Math.max(...dataSet2) + 2;
			document.ggbApplet.evalCommand("ZoomIn(" + xMin + "," + yMin + "," + xMax + "," + yMax + ")");
			
		} else if (plotType == 5) {
			compare = 0;
			document.ggbApplet.evalCommand("ShowAxes(false)");
			if (range1 > 1 && range2 > 1) {
				compare = 1;
				document.ggbApplet.evalCommand(plotList[plotType] + "({" +(table2list(list1,list2)) + "})");
				document.getElementById("myVar").value = "StemPlot(dataSet1)";
				
			} else if (range1 > 1 && range2 <= 1) {
				list1 = list2table(list1)[0];
			 	list2 = list2table(list1)[1];
				document.ggbApplet.evalCommand(plotList[plotType] + "({" +(list1) + "})");
				document.getElementById("myVar").value = "StemPlot(dataSet1)";
				
			} else if (range1 <= 1 && range2 > 1) {
				list1 = list2table(list2)[0];
			 	list2 = list2table(list2)[1];
				document.ggbApplet.evalCommand(plotList[plotType] + "({" +(list2) + "})");
				document.getElementById("myVar").value = "StemPlot(dataSet2)";
				
			}
			reduced1 = 0;
			reduced2 = 0;
			defineList(3);
			
			xMin = Math.min(...dataSet1) - 1;
			xMax = Math.max(...dataSet1) + 1;
			yMin = -15;
			yMax = 5;
			document.ggbApplet.evalCommand("ZoomIn(" + xMin + "," + yMin + "," + xMax + "," + yMax + ")");
		
		} else {
		//reduced1 = 0;
		//reduced2 = 0;
		//defineList(1);
		//defineList(2);
		document.ggbApplet.evalCommand("ShowAxes(true)");
		if (range > 1) {
		for (j = 1; j < range + 1; j++) { 
		if (compare > 0) {
	 		document.ggbApplet.evalCommand('M' + j + "= (" + list1[j-1] + "," + list2[j-1] + ')');
	 		document.ggbApplet.evalCommand("J1=Segment(M1,M2)");
	 		document.ggbApplet.evalCommand("J" + (j+2) + " = Segment(M"+ (j+1) + ",M" + (j+2) + ")");
			document.ggbApplet.evalCommand('SetColor(J1' + ', "white")');
			document.ggbApplet.evalCommand('SetColor(J' + (j+2) + ', "white")');
			
			if (connect > 0 ) {
				document.ggbApplet.evalCommand('SetColor(J1' + ', "green")');
				document.ggbApplet.evalCommand('SetColor(J' + (j+2) + ', "green")');
			}
			
	 	} else {
	 	
	 		if (range1 > 1) {
	 			document.ggbApplet.evalCommand('M' + j + "= (" + j + "," + list1[j-1] + ')');
	 			document.ggbApplet.evalCommand("J1=Segment(M1,M2)");
	 			document.ggbApplet.evalCommand('SetColor(M' + j + ', "blue")');
	 			document.ggbApplet.evalCommand("J" + (j+2) + " = Segment(M"+ (j+1) + ",M" + (j+2) + ")");
				document.ggbApplet.evalCommand('SetColor(J1' + ', "white")');
				document.ggbApplet.evalCommand('SetColor(J' + (j+2) + ', "white")');
			
				if (connect > 0 ) {
					document.ggbApplet.evalCommand('SetColor(J1' + ', "green")');
					document.ggbApplet.evalCommand('SetColor(J' + (j+2) + ', "green")');
				}
	 		}
	 		if (range2 > 1) {
	 			document.ggbApplet.evalCommand('N' + j + "= (" + j + "," + list2[j-1] + ')');
	 			document.ggbApplet.evalCommand("K1=Segment(N1,N2)");
	 			document.ggbApplet.evalCommand('SetColor(N' + j + ', "red")');
	 			document.ggbApplet.evalCommand("K" + (j+2) + " = Segment(N"+ (j+1) + ",N" + (j+2) + ")");
				document.ggbApplet.evalCommand('SetColor(K1' + ', "white")');
				document.ggbApplet.evalCommand('SetColor(K' + (j+2) + ', "white")');
			
				if (connect > 0 ) {
					document.ggbApplet.evalCommand('SetColor(K1' + ', "green")');
					document.ggbApplet.evalCommand('SetColor(K' + (j+2) + ', "green")');
				}
	 		}
	 	}
		}
		}
		}
		}

function setExample0() {

qn = 2;

var eruptions = [83,51,87,60,28,95,8,27,15,10,18,16,29,54,91,8,17,55,10,35,47,77,36,17,21,36,18,40,10,7,34,27,28,56,8,25,68,146,89,18,73,69,9,37,10,82,29,8,60,61,61,18,169,25,8,26,11,83,11,42,17,14,9,12];
//document.getElementById("dataSet1").value = eruptions;
//document.getElementById("dataSet2").value = '';
//defineList(1);

if (reduceFactor == 1) {
	var q1 = prompt("Reduce this large data sample in size? (enter 1 to keep it, or a reduction factor, such as 5 to enter every 5th element)?", "1")
	if (q1 > 1) {
		reduceFactor = q1;
	}
}
if (q2 != 2) {
reduced1 = 0;
} 
if (q2 != 1) {
reduced2 = 0}

var sel = "1";
dataSet1 = (document.getElementById("dataSet1").value).split(",");
dataSet2 = (document.getElementById("dataSet2").value). split(",");
if (dataSet1.length > 1) {sel = "2"}
var q2 = prompt("Enter this data in dataSet 1 or 2?", sel);
		document.getElementById("dataSet" + q2).value = eruptions;
		if (q2 == 1) {document.getElementById("dataSet2").value = ""}
		defineList(q2);
		
//var response = prompt("Your data has been placed in the dataSet field(s) above. Do you now wish to plot this data - this could take a minute or more. (y/n)","y");
//if (response == "y" || response == "Y") {
//compare = 1; showData();}
}


function setExample1() {
reduced1 = 0;
reduced2 = 0;
qn = 1;
var day = [0,1,4,5,6,7,8,9,11,12,17,19,20,21,22];
var weight = [124,121,103,96,90,84,78,71,58,50,27,16,12,8,6];

//var day = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
//var weight = [124,121,0,0,103,96,90,84,78,71,0,58,50,0,0,0,0,27,0,16,12,8,6];

document.getElementById("dataSet1").value = day;
document.getElementById("dataSet2").value = weight;
defineList(3);

//var response = prompt("Your data has been placed in the dataSet field(s) above. Do you now wish to plot this data - this could take a minute or more. (y/n)","y");
//if (response == "y" || response == "Y") {
//compare = 1; showData();}
}




function setExample2(input) {

var q1 = 1;
var q2 = 3;
var sel = "1";
dataSet1 = (document.getElementById("dataSet1").value).split(",");
dataSet2 = (document.getElementById("dataSet2").value). split(",");

if (dataSet1.length > 1) {sel = "2"}

if (input == "light") {
	 q2 = prompt("Enter this data in dataSet 1 or 2?", sel);
	document.getElementById("dataSet" + q2).value = light;
	if (q2 == 1) {document.getElementById("dataSet2").value = ""}
	compare = 0;
	
} else if (input == "barometer") {
	 q2 = prompt("Enter this data in dataSet 1 or 2?", sel);
	document.getElementById("dataSet" + q2).value = barometer;
	if (q2 == 1) {document.getElementById("dataSet2").value = ""}
	compare = 0;
	
} else if (input == "altitude") {
	document.getElementById("dataSet1").value = longitude;
	document.getElementById("dataSet2").value = altitude;
	compare = 1;
	
} else if (input == "alt") {
	 q2 = prompt("Enter this data in dataSet 1 or 2?", sel);
	document.getElementById("dataSet" + q2).value = altitude;
	if (q2 == 1) {document.getElementById("dataSet2").value = ""}
	compare = 1;

} else if (input == "lon") {
	 q2 = prompt("Enter this data in dataSet 1 or 2?", sel);
	document.getElementById("dataSet" + q2).value = longitude;
	if (q2 == 1) {document.getElementById("dataSet2").value = ""}
	compare = 1;
	
} else if (input == "lat") {
	 q2 = prompt("Enter this data in dataSet 1 or 2?", sel);
	document.getElementById("dataSet" + q2).value = latitude;
	if (q2 == 1) {document.getElementById("dataSet2").value = ""}
	compare = 1;
	
} else if (input == "compare") {

	document.getElementById("dataSet1").value = barometer;
	document.getElementById("dataSet2").value = altitude;
	compare = 1;
	
} else if (input == "irtemp") {
	 q2 = prompt("Enter this data in dataSet 1 or 2?", sel);
	document.getElementById("dataSet" + q2).value = irtemp;
	if (q2 == 1) {document.getElementById("dataSet2").value = ""}
	compare = 0;
	
} else if (input == "humidity") {
	 q2 = prompt("Enter this data in dataSet 1 or 2?", sel);
	document.getElementById("dataSet" + q2).value = humidity;
	if (q2 == 1) {document.getElementById("dataSet2").value = ""}
	compare = 0;
	
} else if (input == "location") {
	document.getElementById("dataSet1").value = latitude;
	document.getElementById("dataSet2").value = longitude;
	compare = 1;
}
if (reduceFactor == 1) {
	var q1 = prompt("Reduce this large data sample in size? (enter 1 to keep it, or a reduction factor, such as 5 to enter every 5th element)?", "1")
	if (q1 > 1) {
		reduceFactor = q1;
}
} 
if (q2 != 2) {
reduced1 = 0;
} 
if (q2 != 1) {
reduced2 = 0}

defineList(q2);

//var response = prompt("Your data has been placed in the dataSet field(s) above. Do you now wish to plot this data - this could take a minute or more. (y/n)","y");
//if (response == "y" || response == "Y") {
//compare = 1; showData();}

//if (input == "location") {
//	setLocations();
//}

}


function showLocation(place, lat, lon) {
	var placeName = place.toLowerCase();
	document.ggbApplet.evalCommand(placeName + " = (" + lat + "," + lon + ")");
	var xMin = -36;
	var xMax = -33;
	var yMin = 149;
	var yMax = 151.5
	document.ggbApplet.evalCommand("ZoomIn(" + xMin + "," + yMin + "," + xMax + "," + yMax + ")");
}

var sel = 1;
function setLocations() {
	var canberra = [-35.2809, 149.1300];
	var collector = [149.494944,-34.895886];
	var yarra = [149.604591,-34.813784];
	var berrima = [150.340273, -34.467465];
	var sydney = [-33.9126, 151.1180];

	var placeList = ["Canberra", "Collector", "Yarra", "Berrima", "Sydney"];
	var lonList = [149.1300, 149.494944, 149.604591, 150.340273, 151.1180];
	var latList = [-35.2809, -34.895886, -34.813784, -34.467465, -33.9126];

	var choice = prompt("Points of Interest: See the location of...\n"
					+ "1. Canberra\n"
					+ "2. Collector\n"
					+ "3. Yarra\n"
					+ "4. Berrima\n"
					+ "5. Sydney\n", sel);
	if (choice > 0 && choice < 6) {
	alert(placeList[choice-1] + " = (" + latList[choice-1] + "," + lonList[choice-1] + ")");
	showLocation(placeList[choice-1], latList[choice-1], lonList[choice-1])
	var q = prompt("View another?", "y")
	if (q == "y" || q == "Y") {
		sel = sel -(-1);
		setLocations();
	}
	
	}
}


	