console.log("AddMeFast v1");
if(getCookie("amfstep") != "0,0")
  setCookie("amfstep","0");

if(getCookie("amfonoff") != "0,0")
  setCookie("amfonoff","");

function setCookie(nome,str){
  var expires = new Date();
  expires.setTime(expires.getTime()+(30*24*60*60*1000));
  expires = expires.toGMTString();
  document.cookie = nome+"="+str+"; expires="+expires;
}

function getCookie(name){
  var cookies = document.cookie.split("; ");
  for(var i = 0; i < cookies.length; i++){
    if(cookies[i].split("=")[0] == name)
      return cookies[i].split("=")[1];
  }
  return "0,0";
}
