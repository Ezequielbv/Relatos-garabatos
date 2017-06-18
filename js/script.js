$(document).ready(function(){ 

//Navegación
	$("#nav li ul").hide();

	$('#nav li').hover(function(){
	  if ($(this).is(':hover')){
		$(this).find('ul').slideDown("fast");
		$(this).css("background-color","grey");
	  }
	  else {
		$(this).find('ul').fadeOut("slow");	  	
		$(this).css("background-color","#1b1e24");
	  }
	})

$('#nav li ul li').hover(function(){
	if($(this).is(':hover')){
		$(this).css("background-color","#1b1e24");
		$(this).css("opacity",".9");
	}
	  else {
		$(this).css("opacity",".4");
	  }
})

//Eventos de ratón en los títulos.

 $('.contacto').mouseover(function(){
 	$(this).find('a').css("color", "grey")
 }) 
 $('.contacto').mouseout(function(){
 	$(this).find('a').css("color", "#000")
 })

  $('.titulo').mouseover(function(){
 	$(this).find('a').css({"color":"grey"})
 }) 
 $('.titulo').mouseout(function(){
 	$(this).find('a').css({"color":"#000"})
 })

$('.about').click(function(){
	$('.portadas').addClass({"hidden":"true"});
	// $('.personal').addClass({"visible":"true"});
})

})

//Eventos animados
var contador=0;
var img = new Array(
	"img/Portada-1.jpg",
	"img/Portada-2.jpg",
	"img/Portada-3.jpg",
);

function change(){
	document.getElementById("img").src = img[contador];
	if(contador== img.length-1)
		contador=0;
	else	
		contador++;
}

onload = function(){
	change();
	setInterval(change,2000);
}