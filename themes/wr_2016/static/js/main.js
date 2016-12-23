jQuery(document).ready(function(){
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,

    // If we need pagination
    // pagination: '.swiper-pagination',

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // slidesPerView: 1,
    // paginationClickable: true,
    grabCursor: true,
    hashnav: true,
    slideToClickedSlide:true
    // spaceBetween: 10
   });
  $(".new_select").select2({
    minimumResultsForSearch: Infinity
  });
  // $(".product_select").select2({
  //   minimumResultsForSearch: Infinity
  //   // theme: "product_select"
  // });
  // var $eventLog = $(".js-event-log");
  // var $e = $("<span>" + currentVal + "</span>");
  // $eventLog.append($e);

  // item color
    var $colorSelect = $(".product_select.color");

    $colorSelect.on("change", function (e) {
      var currentVal = $(this).val();
    
      e.preventDefault();
      
      $(this).closest('.t-product-options').find('.snipcart-add-item').data('item-custom2-value', currentVal);
      e.stopPropagation();
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