(function ($) {
    $(document).ready(function () {
        var url = window.location.href;
        var symbols = url.lastIndexOf("/");
        var str = url.substring(symbols + 1, url.length);
        // console.log('str = ' + str);
        $(".n-menu>li").each(function () {
            $(this).removeClass("n-current");
            var _url = $(this).children("a").attr("href");
            if (_url == str ) {
                $(this).addClass("n-current");
            } else {
                if ((_url == '#') && ((str == 'kycEnglish.html') ||(str == 'tokenSaleEnglish.html'))) {
                    $(this).addClass("n-current");
                }
            }
            if (str == "/") {
                $(".n-menu li:first-child").addClass("n-current");
            }
        });
        $(".n-menu li a").click(function () {
            var _url = $(this).attr("href");
            if (_url != '#'){
                $(this).parent("li").addClass("n-current");
                $(".n-menu li").removeClass("n-current");
            }

            if (str == _url) {
                $(this).parent("li").addClass("n-current");
            }
        });
        $(window).scroll(function (ev) {
            // 当前滚动条距离顶部的距离
            if ($("body").hasClass("js-scroll")) {
                var scroll = $(window).scrollTop();
                // 申明索引
                var activeIndex = -1;
                //console.log("索引长度:",$(".js-offset").length,$(".js-menu").length,$(".js-menu"))
                $(".js-offset").each(function (i) {
                    var top = $(this).offset().top;
                    if (scroll >= (top - 100)) {
                        activeIndex = i;
                        return;
                    }
                });
                //console.log(activeIndex);
                // 菜单处理
                var menus = $(".n-menu .js-menu");
                $(".n-menu li").removeClass("n-current");
                if (activeIndex !== -1) {
                    menus.eq(activeIndex).parent("li").addClass("n-current");
                } else {
                    $(".n-menu li:first-child").addClass("n-current");
                }
            }
        });
        var myDate = new Date();
        //获取当前年
        var year = myDate.getFullYear();
        $("span.n-year").html(year);
    });
})(jQuery);

// function downloadImg() {
//     var image = new Image();
//     image.src = '././Favicon.ico';
//     var base64 = convertImageToCanvas(image);//在实际项目中这里必须是你的 base64
//     var a = document.createElement('a');
//     a.href = base64||'';    //文件MIME类型 http://www.w3school.com.cn/media/media_mimeref.asp
//     console.log(base64);
//     a.setAttribute('download', 'logo.png');//下载，图片名字
//     a.click();//自动触发a的事件
// }
//
// function convertImageToCanvas(image) {
//     var canvas = document.createElement("canvas");
//     canvas.width = image.width;
//     canvas.height = image.height;
//     canvas.getContext("2d").drawImage(image, 0, 0);
//     var base64  = canvas.toDataURL("image/png");//PNG格式
//     return base64;
// }