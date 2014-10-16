/**
 * Register Autocomplete functions with fields.
 * This is not strictly using jQuery, like the rest of the CMS.
 */
(function($) {
	$(function() {        

		// Load autocomplete functionality when field gets focused
		$('.field.autocomplete input.text').live('focus', function() {            
			
			var input = $(this);
                    
      // insert hidden field      
      var inputhidden = $('input[name="'+input.attr('data-hidden-title')+'"]');
      if(!inputhidden.length){
        inputhidden = $('<input type="hidden" name="'+input.attr('data-hidden-title')+'" id="'+input.attr('data-hidden-title')+'ID" value=""/>');
        input.parents('.middleColumn').append(inputhidden);
      }

			// Prevent this field from loading itself multiple times
			if(input.attr('data-loaded') == 'true')
				return;
			input.attr('data-loaded', 'true');
            
			// load autocomplete into this field
			input.autocomplete({
				source: input.attr('data-source'),
				minLength: input.attr('data-min-length'),
				change: function( event, ui ) {					
          console.log( 'change' );
                    
					// Check if a selection from the list is required
					if(!input.attr('data-require-selection')){
            if(!ui.item){
              inputhidden.val("");
            }
            return true;
          }

          inputhidden.val("");
					// Accept if item selected from list
					if(ui.item){
            inputhidden.val(ui.item.id);
            return true;
          }

					// remove invalid value, as it didn't match anything					
          inputhidden.val("");
					input.val("");
					input.data("autocomplete").term = "";
					return false;
				}, 
        select: function( event, ui ) {										
          console.log( 'select' );
          inputhidden.val(ui.item.id);
          //return false;
				}
			});
		});
    
	});
})(jQuery);