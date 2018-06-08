/* ========================================================================
 * home-v2.js
 * Page/renders: frontend/index-v2.html
 * Plugins used: owl.carousel, stellar
 * ======================================================================== */

'use strict';

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            'owl.carousel',
            'stellar'
        ], factory);
    } else {
        factory();
    }
}(function () {

    $(function () {
        $('select[name="select2-basic"]').select2();
        // Carousel
        // ================================
        $('#lovely-client').owlCarousel({
            autoPlay: true,
            autoHeight : true,
            pagination : false
        });

        // Stellar
        // ================================
        $.stellar({
            horizontalScrolling: false
        });
    });
    
}));