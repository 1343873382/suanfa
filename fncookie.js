let setCookie = (name, value, domain, path, expires, maxage, secure) => {
    let cookietext;
    cookietext = name + "=" + value
    if (domain) {
        cookietext += "; domain=" + domain
    }
    if (path) {
        cookietext += "; path=" + path
    }
    if (expires) {
        let time=new Date()
        let time1=time.getTime()+expire*24*60*60*1000;
        cookietext += "; expires=" + time1.toGMTString()
    }
    if (maxage) {
        cookietext += "; maxage=" + domain
    }
    if (domain) {
        cookietext += "; secure"
    }
    document.cookie = cookietext;
    console.log(cookietext);

}