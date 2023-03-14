(function () {
    //   시계 쿼리
    const clock = document.querySelector('.clock');

    function getTime() {
        const time = new Date();
        const hour = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        //clock.innerHTML = hour +":" + minutes + ":"+seconds;
        clock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    }

    function init() {
        setInterval(getTime, 1000);
    }
    init();

    //   메인 페이지 화살표 누르면 article 보여주는 쿼리
    $("#articleWrap").hide();

    $(".pageM4 a").click(function () {
        $("#articleWrap").show();
        var x = $(window).scrollTop();
        $('html, body').animate({ scrollTop: x + 1000 }, 500)
    });

    //   article 페이지 화살표 누르면 메인페이지로 이동하는 쿼리
    $(".articleMid a").click(function () {
        var x = $(window).scrollTop();
        $('html, body').animate({ scrollTop: x - 1000 }, 500)
        $("#articleWrap").slideUp(500);
    });

    //   작품 이미지 클릭 시 다음 작품으로 넘어가는 쿼리
    $(".articleLeft img:last-child").hide();
    $(".article2").hide();
    $(".title2").hide();

    $(".articleLeft img:first-child").click(function () {
        $(".articleLeft img:first-child").hide();
        $(".article1").hide();
        $(".title1").hide();
        $(".articleLeft img:last-child").show(1000);
        $(".article2").slideDown(1000);
        $(".title2").slideDown();
    });
    $(".articleLeft img:last-child").click(function () {
        $(".articleLeft img:last-child").hide();
        $(".article2").hide();
        $(".title2").hide();
        $(".articleLeft img:first-child").show(1000);
        $(".article1").slideDown(1000);
        $(".title1").slideDown();
    });


})(jQuery);