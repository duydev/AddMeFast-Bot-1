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
      if(url.indexOf("addmefast") != -1){
        if(url.indexOf("twitter") == -1)
          window.open("http://addmefast.com/free_points/twitter", "_self");
        else
          document.getElementsByClassName("btn3")[1].click();
      }
      else{
        document.getElementsByClassName("button selected submit")[0].click();
        setTimeout(closeWindow,2500);
      }
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
      if(url.indexOf("addmefast") != -1){
        if(url.indexOf("myspace") == -1)
          window.open("http://addmefast.com/free_points/myspace", "_self");
        else
          document.getElementsByClassName("btn3")[1].click();
      }
      else{
        document.getElementsByClassName("connectButton notReversed connected tooltips")[0].click();
        setTimeout(closeWindow,2500);
      }
    break;
    case 24://Pinterest Followers
      if(url.indexOf("addmefast") != -1){
        if(url.indexOf("pinterest") == -1)
          window.open("http://addmefast.com/free_points/pinterest", "_self");
        else
          document.getElementsByClassName("btn3")[1].click();
      }
      else{
        document.getElementsByClassName("UserFollowButton btn rounded Button primary Module hasText notNavigatable ui-FollowButton")[0].click();
        setTimeout(closeWindow,2500);
      }
    break;
    case 25://Pinterest Repins
      if(url.indexOf("addmefast") != -1){
        if(url.indexOf("pinterest_repin") == -1)
          window.open("http://addmefast.com/free_points/pinterest_repin", "_self");
        else
          document.getElementsByClassName("btn3")[1].click();
      }
      else{
        document.getElementsByClassName("rounded Button repinSmall pinIt primary Module ajax btn")[0].click();
        setTimeout(closeWindow,4500);
      }
    break;
    case 26://Pinterest Likes
      if(url.indexOf("addmefast") != -1){
        if(url.indexOf("") == -1)
          window.open("http://addmefast.com/free_points/", "_self");
        else
          document.getElementsByClassName("btn3")[1].click();
      }
      else{
        document.getElementsByClassName("")[0].click();
        setTimeout(closeWindow,2500);
      }
    break;
    case 27://Reverbnation Fans
      if(url.indexOf("addmefast") != -1){
        if(url.indexOf("reverbnation_fan") == -1)
          window.open("http://addmefast.com/free_points/reverbnation_fan", "_self");
        else
          document.getElementsByClassName("btn3")[1].click();
      }
      else{
        document.getElementById("profile_become_a_fan_button_"+CURRENT_PAGE_OBJECT).click();
        setTimeout(closeWindow,4500);
      }
    break;
    case 28://SoundCloud Follow
      if(url.indexOf("addmefast") != -1){
        if(url.indexOf("soundcloud_follow") == -1)
          window.open("http://addmefast.com/free_points/soundcloud_follow", "_self");
        else
          document.getElementsByClassName("btn3")[1].click();
      }
      else{
        document.getElementsByClassName("sc-button-follow sc-button sc-button-cta sc-button-medium sc-button-responsive")[0].click();
        setTimeout(closeWindow,3500);
      }
    break;
    case 29://SoundCloud Plays
      if(url.indexOf("addmefast") != -1){
        if(url.indexOf("") == -1)
          window.open("http://addmefast.com/free_points/", "_self");
        else
          document.getElementsByClassName("btn3")[1].click();
      }
      else{
        document.getElementsByClassName("")[0].click();
        setTimeout(closeWindow,2500);
      }
    break;
    case 30://StumbleUpon
      if(url.indexOf("addmefast") != -1){
        if(url.indexOf("") == -1)
          window.open("http://addmefast.com/free_points/", "_self");
        else
          document.getElementsByClassName("btn3")[1].click();
      }
      else{
        document.getElementsByClassName("")[0].click();
        setTimeout(closeWindow,2500);
      }
    break;
  }
//}

function closeWindow() {
  window.open('','_parent','');
  window.close();
}
