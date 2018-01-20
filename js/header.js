/* animate */



/* Replace text */
var spans = $('span[id^="keyword-"]').hide(),
    i = 0;

(function cycle() {

    spans.eq(i).fadeIn(400)
        
        .delay(1000)
        .fadeOut(400, cycle);

    i = ++i % spans.length;

})();