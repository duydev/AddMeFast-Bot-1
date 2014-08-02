//if(window.confirm("1")){
  var url = window.location.href;
  console.log(url);
  var opt = 17;//Math.floor((Math.random() * 30) + 0);
  switch(opt){
    case 0://Facebook Likes
  
    break;
    case 1://Facebook Share
  
    break;
    case 2://Facebook Followers
  
    break;
    case 3://Facebook Post Like
  
    break;
    case 4://Facebook Post Share
  
    break;
    case 5://Instagram Followers
  
    break;
    case 6://Instagram Likes
  
    break;
    case 7://Twitter Followers
      if(url.indexOf("addmefast") != -1){
        if(url.indexOf("twitter") == -1)
          window.open("http://addmefast.com/free_points/twitter", "_self");
        else
          document.getElementsByClassName("btn3")[1].click();
      }
      else{
        document.getElementsByClassName("user-actions-follow-button js-follow-btn follow-button btn")[0].click();
        setTimeout(closeWindow,2500);
      }
    break;
    case 8://Twitter Tweets
  
    break;
    case 9://Twitter Retweets
  
    break;
    case 10://Twitter Favorites
  
    break;
    case 11://YouTube Subscribe
  
    break;
    case 12://YouTube Likes
  
    break;
    case 13://YouTube Favorites
  
    break;
    case 14://YouTube Views
  
    break;
    case 15://Google Circles
  
    break;
    case 16://Google Share
  
    break;
    case 17://Ask.fm Likes
      if(url.indexOf("addmefast") != -1){
        if(url.indexOf("askfm_likes") == -1)
          window.open("http://addmefast.com/free_points/askfm_likes", "_self");
        else
          document.getElementsByClassName("btn3")[1].click();
      }
      else{
        document.getElementsByClassName("like hintable")[0].click();
        setTimeout(closeWindow,2500);
      }
    break;
    case 18://Vine Followers
  
    break;
    case 19://Vine Likes
  
    break;
    case 20://Vine Revines
  
    break;
    case 21://Vkontakte Pages
  
    break;
    case 22://Vkontakte Groups
  
    break;
    case 23://MySpace Friends
  
    break;
    case 24://Pinterest Followers
  
    break;
    case 25://Pinterest Repins
  
    break;
    case 26://Pinterest Likes
  
    break;
    case 27://Reverbnation Fans
  
    break;
    case 28://SoundCloud Follow
  
    break;
    case 29://SoundCloud Plays
  
    break;
    case 30://StumbleUpon
  
    break;
  }
//}

function closeWindow() {
  window.open('','_parent','');
  window.close();
}
