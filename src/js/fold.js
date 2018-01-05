//WIP es6 version of jquery.fold
import $ from 'jquery';

const fold = {
  // TODO: add some logic to prevent double inits
  init(element){
    const data = {
      placeholder: document.createComment('jquery.fold placeholder')
    };

    // replace with placeholder
    $(element).before(data.placeholder);

    // Save data
    $(element).data('fold', data);

    // Detach from DOM
    $(element).detach();
  },

  methods: {
    restore(element){
      const $fold = $(element).data('fold');

      // Replace placeholder with element
      $($fold.placeholder)
        .before(element)
        .detach();
    }
  }
};

// Make it a jQuery plugin
$.fn.fold = function(options) {
  // Check if we are calling the plugin with a method
  // ex $(element).fold('restore');
  if (fold.methods[options]) {
    return this.each(function() {
      fold.methods[options](this);
    });
  }
  // Regular plugin init
  // $(element).fold()

  return this.each(function() {
    fold.init(this, options);
  });
};
