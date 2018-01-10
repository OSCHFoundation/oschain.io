/**
 * Created by zhang on 17/11/2.
 */

var isChangeNav = false;

//当页面加载完毕
$(window).on('load',function () {
    var downloadELement = $('#downloadFile');
    var systerm = validataOS();
    if (systerm === 'Mac'){
        // $(downloadELement).attr('download','DeepBrainChainFile.pdf') ;
        // alert(systerm);
    }else {
        $(downloadELement).attr('download','DeepBrainChainFile.pdf') ;
    }
    // getDate();
});

//判断是否为mac
function validataOS(){

    if(navigator.userAgent.indexOf("Window")>0){

        return "Windows";

    }else if(navigator.userAgent.indexOf("Mac OS X")>0) {

        return "Mac";

    }else if(navigator.userAgent.indexOf("Linux")>0) {

        return "Linux";

    }else{

        return "NUll";

    }

}




function getDate() {
    $.ajax({
        // url:"http://192.168.20.91:8031/open-api/person-info/verifyCountDown",
        url: "https://info.deepbrainchain.org:443/open-api/person-info/verifyCountDown",
        type: "post",
        dataType: "json",
//            data: null,
        contentType:"application/json",
        success: succesFunc,
        error: errorFunc
    });

    function succesFunc(resquest) {
//            console.log(JSON.stringify(resquest));
        if (resquest.statusCode === 'OK'){
            var errMsg = resquest.errorMsg;
            if (errMsg.length === 0){
                var content = resquest.content;
                var time = content.countDown;
                isChangeNav = content.isStopTime;
                console.log('KYC从服务器获取时间: ' + time + ', isStopTokenSale: ' + isChangeNav);
                if (isChangeNav){
                    //    修改导航
                    var dropDown = $('#tokenSale');
                    var htmlA = $('#dropdownMenu4');
                    $(htmlA).remove();
                    $(dropDown).find('.dropdown-menu').remove();
                    var htmla = $('<a>').attr('href','tokenSaleEnglish.html').appendTo($(dropDown));
                    htmla.text('Token Sale');
                }

            }
        }
    }
    function errorFunc(resquest) {
        console.log(resquest);
    }
}




















