
//Sticky header and animated logo//

$(document).ready(function() {
	var nav = $("#nav");
	$("#right-header").hide();
	$("#moving-content-pad").hide();
	$("#moble-header").hide();

	if ($(window).width() < 479) {
		$("#moble-header").show();
		$("#right-header").hide();
		$(".scroll-nav").hide();
		$("#moving-content-pad").hide();
	};

	if ($(window).width() > 480) {
		$(window).scroll(function() {
		 	if ($(this).scrollTop() > 125) {
		       nav.addClass("scroll-nav");
				$("#header").hide();
				$("#right-header").show(300);
				$("#moving-content-pad").show();
			//} else if ($(this).width() < 479) {
		      // 	$("#right-header").hide();
				//$(".scroll-nav").hide();
				//$("#moving-content-pad").hide();
			} else {
				nav.removeClass("scroll-nav");
				$("#header").show();
				$("#right-header").hide(300);
				$("#moving-content-pad").hide();
				}
		    });
		};

});

// Tabs
(function($){  
        $.fn.acidTabs = function(options) { 	
				var settings = {
    				'style' : 'one'
   				 };     
					options = $.extend( settings, options );
					return this.each (function () {		
						var o = options;
						container = this;
						container.setAttribute("class",o.style);
						var navitem = container.querySelector("li");
						//store which tab we are on
						var ident = navitem.id.split("_")[1];
						navitem.parentNode.setAttribute("data-current",ident);
						//set current tab with class of activetabheader
						navitem.setAttribute("class","tabActiveHeader");
				
						//hide two tab contents we don't need
						var pages = container.querySelectorAll(".tabpage");
						for (var i = 1; i < pages.length; i++) {
							pages[i].style.display="none";
						}
				
						//this adds click event to tabs
						var tabs = container.querySelectorAll("li");
						for (var i = 0; i < tabs.length; i++) {
							tabs[i].onclick=displayPage;
						}
					});
					
					// on click of one of tabs
						function displayPage() {
							var current = this.parentNode.getAttribute("data-current");
							//remove class of activetabheader and hide old contents
							document.getElementById("tabHeader_" + current).removeAttribute("class");
							document.getElementById("tabpage_" + current).style.display="none";
						
							var ident = this.id.split("_")[1];
							//add class of activetabheader to new active tab and show contents
							this.setAttribute("class","tabActiveHeader");
							document.getElementById("tabpage_" + ident).style.display="block";
							this.parentNode.setAttribute("data-current",ident);
						}
				};
    })(jQuery);

$(document).ready(function(){
   $("#tabContainer").acidTabs();
 });

//Laser Printer Widget//
window.onload = init;

function init() { 
	$("#printContainer").hide();
	$("#printContainer2").hide();
	$("#prePrintMessage").show();
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
    printContainer: document.getElementById("printContainer"),
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
			$("#printContainer").show(300);
			$("#printContainer2").show();
			$("#prePrintMessage").hide();
			document.getElementById("printerMessages").innerHTML = ("You print your document.");
			tonerLevel--;
			document.getElementById("tonerLevel").value = tonerLevel;
		    document.getElementById("printerMessages").innerHTML = ("The printer has " + tonerLevel + " units of toner left.");
		    return;
		}
	},
};