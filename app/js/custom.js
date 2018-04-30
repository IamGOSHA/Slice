$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');


});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	$('.color__item input:checkbox:checked').each(function(){
		alert($(this).val());
		});
	$('.accordion__head').on('click',function(){
		var arrow = $(this).find('.arrow');
		arrow.toggleClass('check');
		var el = $(this);
		el.next('.accordion__body').slideToggle(400);
		el.toggleClass('open');

		return false;
	});
	$('.accordion__body>ul>li').on('click',function(){
		$(this).addClass('active');
	});
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/


	
	/* components */
	
	
	/*

	
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	*/


	if($('.slick-slider').length) {

		$('.slick-slider').slick({
			variableWidth: true,
			dots: true,
			prevArrow: '<button type="button" class="prev-arrow"></button>',
			nextArrow: '<button type="button" class="next-arrow"></button>',
			infinite: true,
			speed: 700,
			slidesToShow: 3,
			slidesToScroll: 2,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					variableWidth: false,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					variableWidth: false,
					adaptiveHeight: true,
					infinite: true,
					dots: true
				  }
				},
				{
					breakpoint: 600,
					settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					variableWidth: false,
					infinite: true,
					adaptiveHeight: true,
					dots: false
					}
				}				
			]
		});
	};
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.scroll').length && $('.scroll').height()>=184) {
		$(".scroll").mCustomScrollbar({
			setHeight: 184,
			theme:"blue-theme",
		});
	};
	
	
	/* components */
	
	

});

var handler = function(){
	if($('ul.slick-dots').width()>=50){
		$('.prev-arrow').addClass('prev-change');
		$('.next-arrow').addClass('next-change');
	}
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



