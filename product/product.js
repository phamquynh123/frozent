$(document).ready(function(){


	$(".dropdown").hover(            
		function() {
			$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
			$(this).toggleClass('open');        
		},
		function() {
			$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
			$(this).toggleClass('open');       
		});

	$(".container .left").children("div").children("h3").click(function(){
		// alert('ok!!');
		$(this).siblings("ul").slideToggle();
	});
// 	$('.categories').click(function(){
// 		$(this).children('ul').slideToggle();
// 	});
});

$(function() {
	$('nav#menu').mmenu({
		extensions  : [ 'fx-menu-slide', 'shadow-page', 'shadow-panels', 'listview-large', 'pagedim-white' ],
		iconPanels  : true,
		counters    : true,
		keyboardNavigation : {
			enable  : true,
			enhance : true
		},
		searchfield : {
			placeholder : 'Search menu items'
		},
		navbar : {
			title : 'Advanced menu'
		},
		navbars : [
		{
			position    : 'top',
			content     : [ 'searchfield' ]
		}, {
			position    : 'top',
			content     : [ 'breadcrumbs', 'close' ]
		}, {
			position    : 'bottom',
			content     : [ '<a href="http://mmenu.frebsite.nl/wordpress-plugin" target="_blank">WordPress plugin</a>' ]
		}
		]
	}, {
		searchfield : {
			clear : true
		}
	});
});