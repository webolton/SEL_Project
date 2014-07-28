
//Sticky header and animated logo//
$(document).ready(function() {
	var nav = $("#nav");
	$("#right-header").hide();
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 125) {
            nav.addClass("scroll-nav");
			$("#header").hide();
			$("#right-header").show(300); 
        } else if ($(this).width() < 450) {
			console.log($(this).width());
			//$("#right-header").hide;
		} else {
			nav.removeClass("scroll-nav");
			$("#header").show();
			$("#right-header").hide(300);
		}
    });
});

//Disable animated logo//
//$(window).resize(function () {
//	var nav = $("#nav");
//	
//	if ($(this).width() < 450) {
//		console.log($(this).width());
//		nav.removeClass("scroll-nav");
//		$("#right-header").hide();
//	}
//});

//window.onresize = function(){
    //if (this.innerWidth < 479) {
        //console.log('the window is small!');
    //}
//};

//Laser Printer Widget
window.onload = init;

function init() {
	var printButton = document.getElementById("printButton");
	printButton.addEventListener("click", laserPrinter.print);
	
	var tonerInput = document.getElementById("tonerLevel");
	tonerInput.onkeypress = function (evt) {
		var charCode = (evt.which) ? evt.which : event.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		return false;
		} else {
		return true;
		};
	};
};

var laserPrinter = {
    password: "cats",
  	print: function print() {
  		var tonerLevel = document.getElementById("tonerLevel").value;
		if (!document.getElementById("onButton").checked) {
			document.getElementById("printerMessages").innerHTML = ("You cannot print because the printer is off.");
			return;
		} else if (document.getElementById("wifiPassword").value !== laserPrinter.password) {
			document.getElementById("printerMessages").innerHTML = ("You cannot print because you are not connected to WiFi.");
			return;
		} else if (tonerLevel == 0) {
			document.getElementById("printerMessages").innerHTML = ("You cannot print because you are out of toner.");
			return;
		} else {
			document.getElementById("printerMessages").innerHTML = ("You print your document.");
			tonerLevel--;
			document.getElementById("tonerLevel").value = tonerLevel;
		    document.getElementById("printerSupplies").innerHTML = ("The printer has " + tonerLevel + " units of toner left.");
		    return;
		}
	},
};
  
