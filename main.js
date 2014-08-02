console.log("AddMeFast v1");
var url = window.location.href;
var opt = 6;//Math.floor((Math.random() * 30) + 0);
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
    if(url != "http://addmefast.com/free_points/twitter")
      window.open("http://addmefast.com/free_points/twitter", "_self");
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
