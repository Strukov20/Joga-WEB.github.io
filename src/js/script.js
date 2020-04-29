window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    let calculator = require('./parts/calculator.js'),
        form = require('./parts/form.js'),
        slider = require('./parts/slider.js'),
        tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js'),
        modal = require('./parts/modal.js');

    calculator();
    form();
    slider();
    tabs();
    timer();
    modal();

});