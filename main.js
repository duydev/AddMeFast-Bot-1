console.log("AddMeFast v1");
var step = getCookie("amfstep")[0];
if(step == 0){
  setCookie("amfstep","1");
  document.getElementsByClassName("add_site_item_sub")[Math.floor((Math.random() * 31) + 0))].click();
}
else if(step == 1){
  setCookie("amfstep","2")
  document.getElementsByClassName("single_like_button btn3-wrap")[0].click();
}
else{
  window.alert("Oi");
}

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
