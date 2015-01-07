$(window).load(function() {
  $(function(){
    var $container = $('.main'),
        $buttons = $('.ui-group .btn'),
        $tags = $('.tag-group span')

    $container.isotope({
      itemSelector: '.element-item'
    });

    // get Isotope instance
    var isotope = $container.data('isotope');
    $buttons.on('click', function() {
      if ($(this).hasClass('all-stories')) {
        // remove selections on all other buttons, show all stories
        $('.btn').removeClass('is-checked');
        $(this).toggleClass('is-checked');
        $container.isotope({ filter: '*' });
      } else {
        // if 'all' button is selected, uncheck it
        $('.all-stories').removeClass('is-checked');
        
        // toggle individual buttons
        $(this).toggleClass('is-checked');
        var filters = [];
        // filter categories
        $buttons.filter($('.is-checked')).each(function() {
          filters.push(this.value);
        });

        filters = filters.join(', ');
        $container.isotope({ filter: filters });

        // if no categories are selected, check all-stories
        if (!($('.btn').hasClass('is-checked'))) {
          $('.all-stories').addClass('is-checked');
        }
      }
    });

    $tags.on('click', function() {
      var tag = "." + $(this).attr("value");
      $('.ui-group .btn').each(function(index) {
        if ($(this).attr("value") == tag) {
          if ($(this).hasClass('all-stories')) {
            $('.btn').removeClass('is-checked');
          } else {
            $('.all-stories').removeClass('is-checked');
          }
          $(this).toggleClass('is-checked');
        }
      });
      var filters = [];
        // filter categories
        $buttons.filter($('.is-checked')).each(function() {
          filters.push(this.value);
        });

        filters = filters.join(', ');
        $container.isotope({ filter: filters });

      // if no categories are selected, check all-stories
        if (!($('.btn').hasClass('is-checked'))) {
          $('.all-stories').addClass('is-checked');
        }
    });
  });

  function loadScript( url, callback ) {
    var script = document.createElement( "script" )
    script.type = "text/javascript";
    if(script.readyState) {  //IE
      script.onreadystatechange = function() {
        if ( script.readyState === "loaded" || script.readyState === "complete" ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = function() {
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName( "head" )[0].appendChild( script );
  }

  loadScript('https://platform.twitter.com/widgets.js', function() { 
    setTimeout(reLayout, 1000);
  });

  function reLayout() {
    $('.main').isotope({ filter: '*' });
  }
});

$(document).ready(function (){
  // sticky nav
  var mn = $(".main-nav");
    mns = "main-nav-scrolled";
    var sticky_navigation_offset_top = $('.main-nav').offset().top;
  
  $(window).scroll(function() {
    if( $(this).scrollTop() > sticky_navigation_offset_top ) {
      mn.addClass(mns);
    } else {
      mn.removeClass(mns);
    }
  });

  // back to top button
  $('.back-to-top').hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
      $('.back-to-top').fadeIn(200);
    } else {
      $('.back-to-top').fadeOut(200);
    }
  });
  
  // aimate scroll to top
  $('.back-to-top').click(function(event) {
    event.preventDefault();
    
    $('html, body').animate({scrollTop: 0}, 300);
  });
  
});