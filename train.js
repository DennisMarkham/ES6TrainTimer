//MESSAGE HERE FOR WHOEVER IS LOOKING AT SOURCE CODE

var trains = [];




function printTrains(){
	//clears table:
$("table").innerHTML('');

$("table").append("<tr><th>Train Name</th><th>Destination</th><th>Frequency</th><th>Minutes Away</th><th>Next Arrival</th></tr>")

var i;
for (i = 0; i < trains.length; i++) {
$("table").append("<tr id ='train" + i + "'>");



$("#train" + i).append("<td>" + trains[i].name + "</td>");

$("#train" + i).append("<td>" + trains[i].dest + "</td>");

$("#train" + i).append("<td>" + trains[i].freq + "mins" + "</td>");
 
$("#train" + i).append("<td>" + trains[i]minAway + "</td>");
    
$("#train" + i).append("<td>" + trains[i]nextArr + "</td>");    
}

}


function newTrain(){
var name = document.getElementById("name").value();
var start = document.getElementById("firstTT").value();
//start will be used to determine other variables, but does not actually need to be included
//in train obj.  I think
var freq = document.getElementById("freq").value();
var dest = document.getElementById("dest").value();
var nextArr = 0;
var minAway = 0;

//let's start nice and simple, just load values into the train object when the submit button is 
//pushed.  We can work on fancy mathematics later


var train = {name, freq, dest, nextArr, minAway};

trains.push(train);
//array of train objects to be printed out. 

printTrains(); 
}

