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




















