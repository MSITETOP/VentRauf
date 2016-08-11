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
function mapClick(url){
    $.fancybox({
        href: 'ajax/openurl.php?url='+url,
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
}

// После инициализации гугл карты
function initMap() {
  var myLatLng = {lat: 55, lng: 86};

  var image = {
    url: 'images/placemark.png',
    size: new google.maps.Size(64, 48),
  };

  var map = new google.maps.Map(document.getElementById('gmap'), {
    center: myLatLng,
    scrollwheel: false,
    mapTypeControl: false,
    zoom: 4
  });

  new google.maps.Marker({
    map: map,
    position: {lat: 57.9214912, lng: 59.9816186},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/promyishlennyie-dyimoxodyi/otgruzka-dyimoxodov-v-g.-nizhnij-tagil.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 51.7239017, lng: 55.074099},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/promyishlennyie-dyimoxodyi/dyimovaya-truba-na-yuzhnom-urale.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 56.8389261, lng: 60.6057025},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/promyishlennyie-dyimoxodyi/montazh-dyimoxodov-v-g.-ekaterinburg.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 55.755826, lng: 37.6173},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/promyishlennyie-dyimoxodyi/dyimoxodyi-dlya-20-ti-etazhnogo-doma-v-podmoskove.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 55.3005168, lng: 58.1398506},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/promyishlennyie-dyimoxodyi/blochno%E2%80%93modulnaya-kotelnaya-na-kurorte-bashkirii-%C2%AByangan-tau%C2%BB.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 56.1167663, lng: 47.262782},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/promyishlennyie-dyimoxodyi/sistema-dyimoudaleniya.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 57.6260744, lng: 39.8844708},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/koaksialnyie-dyimoxodyi/montazh-koaksialnyix-dyimoxodov-v-g.-yaroslavl.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 53.4129429, lng: 59.0016233},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/promyishlennyie-dyimoxodyi/kopiya-kotelnaya-v-gorode-aramil.html');
  });new google.maps.Marker({
    map: map,
    position: {lat: 54.2312172, lng: 56.1645257},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/promyishlennyie-dyimoxodyi/kotelnaya-v-bashkirii.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 56.9088786, lng: 60.7950058},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/promyishlennyie-dyimoxodyi/kopiya-kotelnaya-v-bashkirii.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 55.755826, lng: 37.6173},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/promyishlennyie-dyimoxodyi/dyimoxodyi-dlya-20-ti-etazhnogo-doma-v-podmoskove.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 51.7666482, lng: 55.1004538},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/promyishlennyie-dyimoxodyi/kopiya-kotelnaya-v-g.-aramil.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 56.8389261, lng: 60.6057025},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/promyishlennyie-dyimoxodyi/kotelnaya-v-g.-ekaterinburg,-chkalovskij-rajon.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 56.721468, lng: 60.637075},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/promyishlennyie-dyimoxodyi/kotelnaya-v-posyolke-rudnyij.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 48.5027313, lng: 135.0662599},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/promyishlennyie-dyimoxodyi/kotelnaya-v-gorode-xabarovsk,-poselok-xor.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 56.824694, lng: 60.648334},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/koaksialnyie-dyimoxodyi/kopiya-kotelnaya-v-posyolke-rudnyij.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 56.0363252, lng: 35.9573132},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/koaksialnyie-dyimoxodyi/kopiya-konditerskaya-fabrika-sladko,-g.-ekaterinburg.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 57.2725269, lng: 60.1289279},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/promyishlennyie-dyimoxodyi/kopiya-kotelnaya-v-g.-barnaul.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 51.2145242, lng: 58.5440566},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/promyishlennyie-dyimoxodyi/kopiya-kotelnaya-v-orenburgskoj-oblasti.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 52.9830748, lng: 49.4405958},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/promyishlennyie-dyimoxodyi/kopiya-dyimoxod-v-g.-orsk.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 56.6952914, lng: 60.8270323},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/promyishlennyie-dyimoxodyi/kotelnaya-v-g.-aramil.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 56.9362366, lng: 60.8962021},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/chastnyij-sektor/g.-staropyishminsk.html');
  });
  new google.maps.Marker({
    map: map,
    position: {lat: 55.755826, lng: 37.6173},
    icon: image

  }).addListener('click', function() {
    mapClick('http://ventrauf.ru/nashi-obektyi/promyishlennyie-dyimoxodyi/dyimoxodyi-dlya-20-ti-etazhnogo-doma-v-podmoskove.html');
  });
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