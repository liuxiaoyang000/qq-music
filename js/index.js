/*--REM--*/
~function () {
    var winW = document.documentElement.clientWidth,
        desW = 640,
        htmlFont = winW / desW * 100;
    //->当屏幕的宽度大于设计稿的宽度,让音乐区域最大640PX即可
    if (winW >= desW) {
        $('.musicBox').css({
            width: desW,
            margin: '0 auto'
        });
        window.htmlFont = 100;
        return;
    }
    window.htmlFont = htmlFont;
    document.documentElement.style.fontSize = htmlFont + 'px';
}();

/*--MAIN--*/
~function () {
    var winH = document.documentElement.clientHeight,
        headerH = $('.header')[0].offsetHeight,
        footerH = $('.footer')[0].offsetHeight;
    $('.main').css('height', winH - headerH - footerH - htmlFont * .8);
}();
