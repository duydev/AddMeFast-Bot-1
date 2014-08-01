var step = getCookie("amfstep").split(',')[0];
var next = step++;
setCookie("amfstep",next+",0");
document.getElementsByClassName("add_site_item_sub")[step].getElementsByTagName("a")[0].click();

function setCookie(nome,str){
  var expires = new Date();
  expires.setTime(expires.getTime()+(30*24*60*60*1000));
  expires = expires.toGMTString();
  document.cookie = nome+"="+str+"; expires="+expires+"; path=/";
}

function getCookie(name){
  var cookies = document.cookie.split("; ");
  for(var i = 0; i < cookies.length; i++){
    if(cookies[i].split("=")[0] == name)
      return cookies[i].split("=")[1];
  }
  return "0,0";
}
