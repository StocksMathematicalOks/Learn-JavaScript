function pageScroll() {
    window.scrollBy(0,2.5); // horizontal and vertical scroll increments.
    scrolldelay = setTimeout('pageScroll()',100); // scrolls every 100 milliseconds.
    for ( let i = 0; i < 1; i++ ) {
        document.getElementById("clickMe").click();
    }
}
