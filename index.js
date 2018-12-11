$( document ).ready(function() {

  var waypointShirt = new Waypoint({
  		element: document.getElementById('shirt'),
  		handler: function() {
  			$("#backgroundColor").css("background-color","#F1C59B");
        $("#textTopLeft").html("There is not <br> a holiday party");
        $("#textBottomLeft").html("but we are having <br> a kind of party");
        $("#textBottomRight").html("and its not not <br> a holiday party ");
  		},
      offset: 40
	});

	var waypointHat = new Waypoint({
  		element: document.getElementById('hat'),
  		handler: function() {
    		$("#backgroundColor").css("background-color","#36888E");
    		$("#APPCRed").addClass("fadeOut");
    		$("#textTopLeft").html("12/13 @ <br> Better Days");
    		$("#textBottomLeft").html("302 Broome st <br> NY, NY 10002");
    		$("#textBottomRight").html("FROM APPROX <br> 7:30pm - 9:30");
  		},
      offset: 40
	});

	var waypointHoodie = new Waypoint({
  		element: document.getElementById('hoodie'),
  		handler: function() {
    		$("#backgroundColor").css("background-color","#E45628");
    		$("#APPCYellow").addClass("fadeOut");
        $(".navText").css("color","white");
        $("#textTopLeft").show();
        $("#downArrow").show();
        $("#rightArrow").css("filter","invert(0%)");
    		$("#textTopLeft").html("This party <br> is with:");
    		$("#textBottomLeft").html("Design + Creative <br> Second Child");
    		$("#textBottomRight").html("Production + <br> Project Managment");
  		},
      offset: 40
	});

	var waypointPoster = new Waypoint({
  		element: document.getElementById('poster'),
  		handler: function() {
    		$("#backgroundColor").css("background-color","#EDE898");
    		$("#APPCTeal").addClass("fadeOut");
    		$(".navText").css("color","black");
    		$("#textTopLeft").hide();
    		$("#downArrow").hide();
    		$("#rightArrow").css("filter","invert(100%)");
    		$("#textBottomLeft").html("cheers <br> see you there");
    		$("#textBottomRight").html("#d5nhp2018dpcpm  <br> #antipartyparty");
  		},
      offset: 40
	});

  $(".clothing").click(function(){
    $(this).css("opacity", ".5");
    $(this).siblings().css("display", "block");
    $(this).siblings().addClass("flipInX");
  });

  $("#posterBlack").click(function(){
    $(this).siblings().css("display", "flex");
    $(this).siblings().removeClass("fadeOutDownBig");
    $(this).siblings().addClass("fadeInUpBig");
    $("html").css("overflow", "hidden");
    $("body").css("overflow", "hidden");

    targetElement.ontouchend = (e) => {
    e.preventDefault();
    };
  });

  $("#close").click(function(){
    $(this).parent().removeClass("fadeInUpBig");
    $(this).parent().addClass("fadeOutDownBig");
    $("html").css("overflow", "scroll");
    $("body").css("overflow", "scroll");
    $(this).parent().fadeOut();
  });
  
  let picked = false;

  $(".posterShop").click(function() {
    $("#posterTextBottomLeft").css("opacity","1");
    $("#posterTextBottomRight").css("opacity","1");
    $("#rightArrowWhite").css("opacity","1");
    $(this).removeClass("posterShop");
    $(this).addClass("posterClicked");
    $(this).siblings().css("opacity", "1");
    picked = true;
  });

  $(".posterShop").mouseover(function(){
    if (picked == false) {
      $(this).next().css("opacity","1");
    }
  });

  $(".posterShop").mouseout(function(){
    if (picked == false) {
      $(this).next().css("opacity","0");
    }
  });
  
});