
var socket = io.connect("http://localhost:3000");

$('.desc').addClass('hide');

socket.on('mutant_report', function (data) {

	if (data.mutantID != undefined) {

		// format exoID from mutantID
		var exoID = "00000" + data.mutantID;
		
		exoInit(exoID, data.report);
		//renderData(data.mutantID,data.report);
		//renderStatus(data.mutantID);
	}
});

function exoInit(exoID, report) {

	// console.log("renderData:", exoID, report);

	// light up online Exo
	$('#' + exoID)
		.addClass('yellow')
		.removeClass('grey');
	$('#' + exoID + " .desc")
		.removeClass('hide');
	$('#' + exoID + " .inactive")
		.addClass('hide');

	// detect fire within Exo
	exoFire(exoID, report[2]);

	// detect humidity within Exo
	exoHumidity(exoID, report[3]);

	// detect temperature within Exo
	exoTemp(exoID, report[4]);	

}

function exoFire(exoID, fireData) {

	// light up red as fire Exo
	reading = parseInt(fireData.substr(1));
	if (reading < 350) {
		$('#' + exoID)
			.removeClass('yellow')
			.addClass('red');
	} else {
		$('#' + exoID)
			.addClass('yellow')
			.removeClass('red');
	}
}

function exoHumidity(exoID, humidityData) {

	// update humidity value to Exo
	str = humidityData.substr(1);
	str = str.split(".")[0] + "%";
	$("#" + exoID + " .hum")
		.html(str);

}

function exoTemp(exoID, tempData) {

	// update temp value to Exo
	temp = parseInt(tempData.substr(1));
	str = "" + (32 + (9/5 * temp)) + "&deg;F";
	$("#" + exoID + " .temp")
		.html(str);

}