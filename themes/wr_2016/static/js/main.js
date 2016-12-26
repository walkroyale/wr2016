jQuery(document).ready(function(){
  //change pic
    var galleryContainers = document.querySelectorAll('.single-product');

    for ( var i=0; i < galleryContainers.length; i++ ) {
      initGalleryContainer( galleryContainers[i] );
    }

    function initGalleryContainer( container ) {
      // init flickity
      var galleryElem = container.querySelector('.t-product-image__slider');
      var flkty = new Flickity( galleryElem, {
        cellAlign: 'left',
        pageDots: false
      });
      // hook up navigation
      var nav = container.querySelector('.product_opt__list');
      // get array of items
      var items = Array.prototype.slice.call( nav.children );
      nav.addEventListener( 'click', function( event ) {
        // only link clicks
        // alert(items);
        if ( !matchesSelector( event.target, 'a' ) ) {
          return;
        }
        event.preventDefault();
        var item = event.target.parentNode;
        var index =  items.indexOf( item );
        flkty.select( index );
      });

      $carousel = $('.t-product-image__slider').flickity();
      var $cellWrapper = $('.product_opt__list');
      var $cellButtons = $cellWrapper.find('li a');

      // update selected cellButtons
      $carousel.on( 'select.flickity', function(e) {
        $cellButtons.filter('.is-selected')
          .removeClass('is-selected');
        $cellButtons.eq( flkty.selectedIndex )
          .addClass('is-selected');
        
        var $cartOpt = $cellButtons.filter('.is-selected').text();
        
        $cellButtons.filter('.is-selected').closest('.t-product-options').find('.snipcart-add-item').data('item-custom2-value', $cartOpt);
        e.stopPropagation();
      });
    }

  //select box
    $("select").selectBoxIt({
      //hide the currently selected opt
      hideCurrent: true
    });

  // item color
    var $colorSelect = $(".product_select.color");

    $colorSelect.on("click", function (e) {
      var currentVal = $(this).text();
      // alert(currentVal);
      e.preventDefault();
      // e.stopPropagation();
      $(this).closest('ul').find('li a').removeClass('is-selected');
      $(this).addClass('is-selected');
      $(this).closest('.t-product-options').find('.snipcart-add-item').data('item-custom2-value', currentVal);
    });

  // item size
    var $eventSelect = $(".product_select.size");

    $eventSelect.on("change", function (e) {
      var currentVal = $(this).val();

      e.preventDefault();

      $(this).closest('.t-product-options').find('.snipcart-add-item').data('item-custom1-value', currentVal);
      e.stopPropagation();
    });

  // item quantity
    var $eventInput = $('.product_input');

    $eventInput.change(function (e) {
      var currentVal = $(this).val();

      $(this).closest('.t-product-options').find('.snipcart-add-item').data('item-quantity', currentVal);

      e.preventDefault();
      e.stopPropagation();
    });
});