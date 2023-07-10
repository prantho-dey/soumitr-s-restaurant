
(function($) {

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
          el: ".banner-pagination",
            clickable: true,
        },
      });

    // Isotop 
    var $grid = $('.menu-isotop').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer',
        }
    })
    $('.menu-filter-button').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    $('.menu-filter-button').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.active').removeClass('active');
        $(this).addClass('active');
        });
    });



    $(document).ready(function() {
        allfunction.init();
        // window.addEventListener('load',function(){
        //     document.querySelector('body').classList.add("loaded")  
        // });
    });
    
})(jQuery);
