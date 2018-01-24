function browserRedirect(){
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == 'ipad';
	var bIsIphone = sUserAgent.match(/iphone os/i) == 'iphone os';
	var bIsMidp = sUserAgent.match(/midp/i) == 'midp';
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
	var bIsUc = sUserAgent.match(/ucweb/i) == 'web';
	var bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
	var bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';
	var bIsAndroid = sUserAgent.match(/android/i) == 'android';
	if(bIsIpad || bIsIphone || bIsMidp || bIsUc7 || bIsUc || bIsCE || bIsWM || bIsAndroid ){
		return true;
	}else{
		return false;
	}
}
$(function(){
	$('.videobox video').css('height',$(window).height());
	if(browserRedirect()){
		document.getElementById("videojs").controls = true;
		$('.col-md-1-5').click(function(event) {
				$('.model').hide();
			$(this).find('.model').show();
		});

		$('.container').on('click', '.model', function(event) {
			$('.model').hide();
			/* Act on the event */
		});
	}else{
		$('.col-md-1-5,.corePer').mouseover(function(event) {
			$(this).find('.model').show();
		});
		$('.col-md-1-5,.corePer').mouseout(function(event) {
			$(this).find('.model').hide();
		});
	}
})