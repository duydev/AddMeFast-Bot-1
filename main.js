console.log("AddMeFast v1");
var step = getCookie("amfstep").split(',')[0];
var opt = getCookie("amfstep").split(',')[1];

if(step == 0){
  opt = 6;//Math.floor((Math.random() * 30) + 0);
  setCookie("amfstep","1,"+opt);
  document.getElementsByClassName("add_site_item_sub")[opt].getElementsByTagName("a")[0].click();
}
else if(step == 1){
  setCookie("amfstep","2,"+opt);
  document.getElementsByClassName("btn3")[1].click();
}
else if(window.location.href.indexOf("addmefast.com") == null){
  switch(opt){
    case 0://Facebook Likes

    break;
    case 1://Facebook Followers

    break;
    case 2://Facebook Post Like

    break;
    case 3://Facebook Post Share

    break;
    case 4://Instagram Followers

    break;
    case 5://Instagram Likes

    break;
    case 6://Twitter Followers
      document.getElementsByClassName("user-actions-follow-button js-follow-btn follow-button btn")[0].click();
      setTimeout(close,2000);
    break;
    case 7://Twitter Tweets

    break;
    case 8://Twitter Retweets

    break;
    case 9://Twitter Favorites

    break;
    case 10://YouTube Subscribe

    break;
    case 11://YouTube Likes

    break;
    case 12://YouTube Favorites

    break;
    case 13://YouTube Views

    break;
    case 14://Google Circles

    break;
    case 15://Google Share

    break;
    case 16://Ask.fm Likes

    break;
    case 17://Vine Followers

    break;
    case 18://Vine Likes

    break;
    case 19://Vine Revines

    break;
    case 20://Vkontakte Pages

    break;
    case 21://Vkontakte Groups

    break;
    case 22://MySpace Friends

    break;
    case 23://Pinterest Followers

    break;
    case 24://Pinterest Repins

    break;
    case 25://Pinterest Likes

    break;
    case 26://Reverbnation Fans

    break;
    case 27://SoundCloud Follow

    break;
    case 28://SoundCloud Plays

    break;
    case 29://StumbleUpon

    break;
  }
  setCookie("amfstep","0,0");
}

function close(){
  windows.close();
}

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
