# jQuery is a JavaScript Library not framework.

///////////////////////////////////////////////////////

# Adding Jquery example

	<head>
	<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
	</head>

///////////////////////////////////////////////////////

# Jquery should be in the 

	$(document).ready(function(){

	   // jQuery methods go here...

	});

which means jQuery will not run until document finished loading

///////////////////////////////////////////////////////

# Jquery Basic syntax is

	$(selector).event()

///////////////////////////////////////////////////////

# jQuery Selectors allow you to find or select HTML element(s).

	Example of element Selector

		$("p").hide();

	Example of class Selector

		$(".test").hide();

	Example of id Selector

		$("#test").hide();

	Example of all Selector

		$("*")		

	Example of current HTML element Selector

		$(this)

///////////////////////////////////////////////////////

# jQuery Event Methods

		$("p").click();

		You can pass a function to the event

		$("p").click(function(){
		  $(this).hide();
		});

		You can pass multiple functions to the event

		$("p").hover(
			function(){
			  $(this).hide();
			},
			function(){
			  alert('vanish');
			} 
		);

		You can use css in place of event

		$("input").focus(function(){
        	$(this).css("background-color", "#cccccc");
	    });

	    $("input").blur(function(){
	        $(this).css("background-color", "#ffffff");
	    });

	    OR 

	    
