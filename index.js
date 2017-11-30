function my_browser(){
    var ua = navigator.userAgent.toLowerCase();
    return (
        (ua.match(/rv:([\d.]+)\) like gecko/)) ? "IE" :
        (ua.match(/msie ([\d.]+)/)) ? "IE" :
        (ua.match(/firefox\/([\d.]+)/)) ? "Firefox" :
        (ua.match(/chrome\/([\d.]+)/)) ? "Chrome" :
        (ua.match(/opera.([\d.]+)/)) ? "Opera" :
        (ua.match(/version\/([\d.]+).*safari/)) ? "Safari" : 0
    )+RegExp.$1;
}
if(my_browser().match(/^IE(\d*)/) && RegExp.$1 < 9){
	location.href="./browser_error.html";
}