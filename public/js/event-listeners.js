$( document ).ready(function() {
    $('.dropdown-button').dropdown();

    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: false, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
      }
    );

    if ($('.error-message')) {
        const message = $('.error-message').text();
        Materialize.toast(message, 4000, 'red');
    }
    if ($('.success-message')) {
        const message = $('.success-message').text();
        Materialize.toast(message, 4000, 'green');
    }

    $(".home-image-slider").slider();

    $('.button-collapse').sideNav();
});