$( function() {
	// Масштабируем окно
	//zoomer();
	$(".ajax_gallery").fancybox({
		type: 'ajax',
		autoSize: false,
		fitToView: false,
		padding: 0,
        width: 940,
        height: 604,
		scrolling: 'no',
		helpers: {
			overlay: {
				css: {'background' : 'rgba(0, 0, 0, 0)'},
				locked: false
			}
		},
	});
	
	$(".tabs_box").tabs();
	$(".phone").mask("+7 (999) 99-99-999");
	$(".amodal").click(function() {
		$($(this).attr("href")).show();
		return false;
	});
	$(".amodal_close").click(function() {
		$(this).parents(".modal_box").hide();
		return false;
	});
	
	// Скролл к якорю
	$('a.anchor[href^="#"]').click(function(){
		$('a.anchor[href^="#"]').removeClass("act");
		$(this).addClass("act");
		var el = $(this).attr('href');
		$('body').animate({scrollTop: ($(el).offset().top - $(".header .top_menu ul .inner").height())}, 500);
		return false; 
	});
	
	// Прилепание меню
	var dopmenutop = $(".header .top_menu ul .inner").offset().top;
	window.onscroll = function() {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if(scrolled >= dopmenutop) $(".header .top_menu ul .inner").addClass("fixed");
		else $(".header .top_menu ul .inner").removeClass("fixed");
	}
	
	var hc = $(".header .top_menu ul .inner").height();
	$(".menuhidebox").css('height',hc);
	$(window).resize(function(){
		var hc = $(".header .top_menu ul .inner").height();
		$(".menuhidebox").css('height',hc);
	});
});
function zoomer() {
	$("body").css('zoom',$(window).width()/1024);
}
// Отправка форм 
function sendForm(_this,type){
    var err = false;
    $(_this).find("input").each(function(i,elem) {
        if (!$(this).val()) {
            $(this).css('border-color', 'red');
            err = true;
        } else {
            $(this).css('border-color', 'white');
        }
    });

    var title = type;
    if(type=='getprice') {
        title = "Заявка на получение прайс листа";
    }
    if(type=='feedback') {
        title = "Заявка на обратный звонок";
    }
    
 	var msg = $(_this).serialize();
    
    if(!err) {
        $.ajax({
              type: 'POST',
              url: 'ajax/mail.php',
              data: msg+"&title="+title,
              success: function(data) {
                  if(data) {
                    $(_this).html("<div style='font-size: 18px;color: #fff; text-align: center'>Спасибо, ваша заявка отправлена.</div>");
                    if(type=='getprice') {
                        yaCounter14958421.reachGoal('get_pricelist');
                        ga('send', 'event', 'lead', 'get_pricelist');
                    }
                    if(type=='feedback') {
                        yaCounter14958421.reachGoal('order');
                        ga('send', 'event', 'lead', 'order');
                    }                    
                  }                
              }
        });   
    }
}
// После инициализации гугл карты
function initMap() {
  var myLatLng = {lat: 55.75184939, lng: 49.10888672};

  var image = {
    url: 'images/placemark.png',
    size: new google.maps.Size(64, 48),
  };

  var map = new google.maps.Map(document.getElementById('gmap'), {
    center: myLatLng,
    scrollwheel: false,
    mapTypeControl: false,
    zoom: 6
  });

  new google.maps.Marker({
    map: map,
    position: {lat: 56.8389261, lng: 60.6057025},
    icon: image
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 56.0363252, lng: 35.9573132},
    icon: image
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 57.6260744, lng: 39.8844708},
    icon: image
  });
}

function loadMap() {
	initMap();
	google.maps.event.trigger(map, 'resize');
}


// Слайдер
$(document).ready(function() {
 
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
 
  sync1.owlCarousel({
	navigationText:	["&#8249;","&#8250;"],
    singleItem : true,
    slideSpeed : 1000,
    navigation: true,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
  });
 
  sync2.owlCarousel({
    items : 10,
    itemsDesktop      : [1199,10],
    itemsDesktopSmall     : [979,10],
    itemsTablet       : [768,10],
    itemsMobile       : [479,10],
    pagination:false,
    navigation: true,
    navigationText:	["&#8249;","&#8250;"],
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
  function syncPosition(el){
    var current = this.currentItem;
    sync2
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }
    
  }
 
});