
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


// Display Text Widget //
var button= document.getElementById("displayTextButton");
button.addEventListener("click", handleClick);

$("#botulfSelector").submit(function(event) {
    event.preventDefault();
});

function handleClick() {
    // Get all the inputs.
    var inputs = form1.elements;
    var radios = [];

    //Loop and find only the Radios
    for (var i = 0; i < inputs.length; ++i) {
        if (inputs[i].type == 'radio') {
            radios.push(inputs[i]);
        };
    };

    var found = 1;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            var storedText = (radios[i].value);
            $("#contentArea").hide();
            $("#contentArea").load(storedText, function() {
                $("#contentArea").slideDown(500);
            });
            found = 0;
            break;
            };
        };
    if (found == 1) {
    $("#contentArea").html("<h3>Please select a saint&rsquo;s life from the menu to the left.</h3>");
    return;
    };
    return false; // prevent further bubbling of event //
};

//Display Text Reset Button //

$("#displayTextReset").click(function(){
    $("#botulfSelector")[0].reset();
    $("#contentArea").html("<h3>Please select a saint&rsquo;s life from the menu to the left.</h3>");
});



