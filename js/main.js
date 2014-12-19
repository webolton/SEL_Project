
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


/// Multi-Text Display Text Widget, developed by William E. Bolton, PhD. //

// Assign Task to Button //
var button = document.getElementById("displayTextButton");
button.addEventListener("click", handleClick);

$("#botulfSelector").submit(function(event) {
    event.preventDefault();
});


// Multi-Text Loader //
function handleClick() {

    // Resets the text area in anticipation changes in the form //
    $("#resetMessage").empty();
    $("#contentArea").empty();

    // Checks to see if checkboxes are checked //
    if ($("#botulfSelector :checkbox:checked").length == 0) {
        
        $("#contentArea").html("<div id='resetMessage'><h3>Please select a saint's life from the menu to the left.</h3></div>");
        return;

    } else {

        // Pushes URLs of texts to an array //
        var chkArray = [];
        var idArray = [];

        $("#botulfSelector input:checked").each(function() {
            chkArray.push($(this).val());
            idArray.push($(this).attr("id")); //Might be useful for adding information to the text divs //
        });

        // Loops through the array with the text URLS, appends the DOM, and loads the text to new divs //
        for (i = 0; i < chkArray.length; i++) {
 
            $("#contentArea").append("<div id='" + (chkArray[i]) + "'class='saintTextBox'></div>");

            var textBox = document.getElementById(chkArray[i]);

            $(textBox).load(chkArray[i]);
        };
    };
};

//Display Text Reset Button //
$("#displayTextReset").click(function(){

    $("#botulfSelector")[0].reset();

    $("#contentArea").html("<div id='resetMessage'><h3>Please select a saint's life from the menu to the left.</h3></div>");

    return;
});