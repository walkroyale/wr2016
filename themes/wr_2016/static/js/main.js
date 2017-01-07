jQuery(document).ready(function(){
  //initialize sliders
    $('.t-product-image__slider').flickity({
      // options
      cellAlign: 'left',
      pageDots: false
    });

  //select box
    $("select").selectBoxIt({
      //hide the currently selected opt
      hideCurrent: true
    });

  //show 1st image, or gallery
    var $imgWrapper = $('.t-product-image__section');
    var $optWrapper = $('.t-product-options')
    var $slider = $('.t-product-image__slider').flickity();
    var $cellWrapper = $('.product_opt__list');
    var $cellButtons = $cellWrapper.find('li a');

    $($imgWrapper).find(">:first-child").addClass('is-selected').show();
    $($imgWrapper).find(">:not(:first-child)").addClass('hidden');
    $($optWrapper).find(".product_size").first().addClass('is-selected');
    $($optWrapper).find(".product_size").not('.product_size:first').addClass('hidden');
    // var galleryContainers = document.querySelectorAll('.single-product.o-slider-container');

    // for ( var i=0; i < galleryContainers.length; i++ ) {
    //   initGalleryContainer( galleryContainers[i] );
    // }

    // function initGalleryContainer( container ) {
    //   // init flickity
    //   var galleryElem = container.querySelector('.t-product-image__slider');
    //   var flkty = new Flickity( galleryElem, {
    //     cellAlign: 'left',
    //     pageDots: false
    //   });
    // }


    function showOpts( event ) {
      event.preventDefault();

      var containerElem = $('.single-product');
      var btnIndex = $cellButtons.index(this);

      $cellButtons.filter('.is-selected').removeClass('is-selected');
      $(this).addClass('.is-selected');

      $($imgWrapper).children().removeClass('is-selected');
      $(containerElem).filter( function (index) {
        $('.t-product-image__section > div').eq(btnIndex).addClass('is-selected').removeClass('hidden').siblings().addClass('hidden');
      });

      $($optWrapper).children('.product_size').removeClass('is-selected');
      $(containerElem).filter( function (index) {
        $('.product_size').eq(btnIndex).addClass('is-selected').removeClass('hidden').siblings('.product_size').addClass('hidden');
      });

      // event.stopPropagation();
    }

    function highlightCells() {
      $cellButtons.filter('.is-selected').removeClass('is-selected');
      alert( $($cellButtons).index(this) );

      
      // var flkty = $slider.data('flickity');

      // $cellButtons.eq( flkty.selectedIndex ).addClass('is-selected');

      // if ($cellButtons.hasClass('product')) {
      //   var currentVal = $cellButtons.filter('.is-selected').text();
      //   $('.product.is-selected').closest('.t-product-options').find('.snipcart-add-item').data('item-custom3-value', currentVal);
      // }
      // if ($cellButtons.hasClass('logo')) {
      //   var currentVal = $cellButtons.filter('.is-selected').text();
      //   $('.product.is-selected').closest('.t-product-options').find('.snipcart-add-item').data('item-custom2-value', currentVal);
      // }
    }
    
    $cellButtons.on( 'click', showOpts );


  // item color
    var $colorSelect = $(".product_select.color.logo");

    $colorSelect.on("click", function (e) {
      var currentVal = $(this).text();
      // alert(currentVal);
      e.preventDefault();
      // e.stopPropagation();
      $(this).closest('ul').find('li a').removeClass('is-selected');
      $(this).addClass('is-selected');
      $(this).closest('.t-product-options').find('.snipcart-add-item').data('item-custom2-value', currentVal);
    });
  // item color
    var $colorSelect = $(".product_select.color.product");

    $colorSelect.on("click", function (e) {
      var currentVal = $(this).text();
      // alert(currentVal);
      e.preventDefault();
      // e.stopPropagation();
      $(this).closest('ul').find('li a').removeClass('is-selected');
      $(this).addClass('is-selected');
      $(this).closest('.t-product-options').find('.snipcart-add-item').data('item-custom3-value', currentVal);
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