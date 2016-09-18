$(document).ready(function(){
//First Word Color Places .ocean-articles--name
	$.each( $('.ocean-articles--name h2'), function () {
	  var text = $(this), openSpan = '<span class="ocean-articles--name__first-word">', closeSpan = '</span>';
	  /* Make the sentence into an array */
	  text = text.text().split(' ');

	  /* Add span to the beginning of the array */
	  text.unshift( openSpan );

	  /* Add  as the 3th value in the array */
	  text.splice( 2, 0, closeSpan );

	  /* Turn it back into a string */
	  text = text.join(' ');
	  $(this).html(text);
	});

});

