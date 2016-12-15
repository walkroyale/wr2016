jQuery(document).ready(function(){
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