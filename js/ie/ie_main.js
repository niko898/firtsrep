$(document).ready(function(){
	//var hms = '02:04:33';   // your input string
	var date = new Date();
    var time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
	var hms = time;

var a = hms.split(':'); // split it at the colons

// minutes are worth 60 seconds. Hours are worth 60 minutes.
var seconds = (+a[0]) * 60 * 60 + (+a[1])  * 60 + (+a[2]); 

	seconds*60;
	// var minutes = 1440;
	var minutes = seconds/60;
	minutes =  24*60-minutes;
	var ttf = new Date(new Date().getTime() + minutes * 60 * 1000);
	$('.ie_countdown').countdown({until: ttf,
		layout: '<li><p>{hnn}</p></li><li><p>{mnn}</p></li><li><p>{snn}</p></li>'
	});

});