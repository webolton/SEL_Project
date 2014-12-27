// Multi-Text Display Text Widget, developed by William E. Bolton, PhD. //

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
        
        $("#contentArea").html("<div id='resetMessage'><h3>Please select at least one saint's life from the menu to the left.</h3></div>");
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
 
            $("#contentArea").append("<div class='portlet'><div class='portlet-header'>" + (idArray[i]) + "</div><div id='" + (chkArray[i]) + "' class='portlet-content'></div></div></div>");

            var textBox = document.getElementById(chkArray[i]);

            $(textBox).load(chkArray[i]);
        };
    };
    
// Jquery UI that makes the text boxes sortable //
    $( ".column" ).sortable({
        connectWith: ".column",
        handle: ".portlet-header",
        cancel: ".portlet-toggle",
        placeholder: "portlet-placeholder ui-corner-all"
    });
 

    $( ".portlet" )
    .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
    .find( ".portlet-header" )
    .addClass( "ui-widget-header ui-corner-all" )
    .prepend( "<span class='ui-icon ui-icon-closethick portlet-toggle'></span>");
 
    $( ".portlet-toggle" ).click(function() {
        var icon = $( this );
        icon.closest( ".portlet" ).hide();
    });


    $(function() {
        $( ".portlet" ).resizable({
            maxWidth: 620,
            minHeight: 0,
            minWidth: 620,
        });
    });
};

//Display Text Reset Button //
    $("#displayTextReset").click(function(){

    $("#botulfSelector")[0].reset();

    $("#contentArea").html("<div id='resetMessage'><h3>Please select at least one saint's life from the menu to the left.</h3></div>");

    return;
});

//Makes collapsable stay open, from http://jsfiddle.net/soboaz/3gHrv/ //
$(document).ready( function() {
    $('#accordion').accordion({
        active: false,
        collapsible:true,
        heightStyle: "content",
        beforeActivate: function(event, ui) {
             // The accordion believes a panel is being opened
            if (ui.newHeader[0]) {
                var currHeader  = ui.newHeader;
                var currContent = currHeader.next('.ui-accordion-content');
             // The accordion believes a panel is being closed
            } else {
                var currHeader  = ui.oldHeader;
                var currContent = currHeader.next('.ui-accordion-content');
            }
             // Since we've changed the default behavior, this detects the actual status
            var isPanelSelected = currHeader.attr('aria-selected') == 'true';
            
             // Toggle the panel's header
            currHeader.toggleClass('ui-corner-all',isPanelSelected).toggleClass('accordion-header-active ui-state-active ui-corner-top',!isPanelSelected).attr('aria-selected',((!isPanelSelected).toString()));
            
            // Toggle the panel's icon
            currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);
            
             // Toggle the panel's content
            currContent.toggleClass('accordion-content-active',!isPanelSelected)    
            if (isPanelSelected) { currContent.slideUp(); }  else { currContent.slideDown(); }

            return false; // Cancels the default action
        }
    });
});