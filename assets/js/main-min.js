!function($){var e={carousels:{speed:4,fadeIn:!1,fadeDelay:250}};skel.breakpoints({wide:"(max-width: 1680px)",normal:"(max-width: 1280px)",narrow:"(max-width: 960px)",narrower:"(max-width: 840px)",mobile:"(max-width: 736px)"}),$(function(){var n=$(window),a=$("body");skel.vars.IEVersion<9&&$(":last-child").addClass("last-child"),$("form").placeholder(),skel.on("+mobile -mobile",function(){$.prioritize(".important\\28 mobile\\29",skel.breakpoint("mobile").active)}),$("#nav > ul").dropotron({mode:"fade",speed:350,noOpenerFade:!0,alignment:"center"}),$(".scrolly").scrolly(),$('<div id="navButton"><a href="#navPanel" class="toggle"></a></div>').appendTo(a),$('<div id="navPanel"><nav>'+$("#nav").navList()+"</nav></div>").appendTo(a).panel({delay:500,hideOnClick:!0,hideOnSwipe:!0,resetScroll:!0,resetForms:!0,target:a,visibleClass:"navPanel-visible"}),"wp"==skel.vars.os&&skel.vars.osVersion<10&&$("#navButton, #navPanel, #page-wrapper").css("transition","none"),$(".carousel").each(function(){var a=$(this),o=$('<span class="forward"></span>'),s=$('<span class="backward"></span>'),i=a.children(".reel"),l=i.children("article"),r=0,t,d,c,v,p;e.carousels.fadeIn&&(l.addClass("loading"),a.onVisible(function(){var a,o=l.length-Math.ceil(n.width()/void 0);a=window.setInterval(function(){var e=l.filter(".loading"),n=e.first();if(e.length<=o)return window.clearInterval(a),void l.removeClass("loading");skel.vars.IEVersion<10?(n.fadeTo(750,1),window.setTimeout(function(){n.removeClass("loading")},50)):n.removeClass("loading")},e.carousels.fadeDelay)},50)),a._update=function(){r=0,d=-1*v+n.width(),t=0,a._updatePos()},skel.vars.IEVersion<9?a._updatePos=function(){i.css("left",r)}:a._updatePos=function(){i.css("transform","translate("+r+"px, 0)")},o.appendTo(a).hide().mouseenter(function(n){p=window.setInterval(function(){r-=e.carousels.speed,r<=d&&(window.clearInterval(p),r=d),a._updatePos()},10)}).mouseleave(function(e){window.clearInterval(p)}),s.appendTo(a).hide().mouseenter(function(n){p=window.setInterval(function(){r+=e.carousels.speed,r>=t&&(window.clearInterval(p),r=t),a._updatePos()},10)}).mouseleave(function(e){window.clearInterval(p)}),n.load(function(){v=i[0].scrollWidth,skel.on("change",function(){skel.vars.mobile?(i.css("overflow-y","hidden").css("overflow-x","scroll").scrollLeft(0),o.hide(),s.hide()):(i.css("overflow","visible").scrollLeft(0),o.show(),s.show()),a._update()}),n.resize(function(){v=i[0].scrollWidth,a._update()}).trigger("resize")})})})}(jQuery);