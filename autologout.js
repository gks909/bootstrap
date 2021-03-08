$(document).ready(function(){
	const timeout = 900000; // 15 min
	var idletimer = null;
	
	$('*').bind('mousemove click mouseup mousedown keydown keypress keyup submit change mouseenter scroll resize dblclick',
	 function (){
		clearTimeout(idelTimer);
		idelTimer = setTimeout(function(){
		 document.getElementById('logout-form').submit();
		},timeout);
	});
	$("body").triger('mousemove');
})
