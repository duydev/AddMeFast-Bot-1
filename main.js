//if(window.confirm("1")){
  var url = window.location.href;
  console.log(url);
  var opt = 17;//Math.floor((Math.random() * 30) + 0);
  switch(opt){
    case 0://Facebook Likes
  <button type="submit" id="u_0_22" data-ownerid="u_0_21" 
  data-profileid="655270567832768" 
  class="_42ft _4jy0 PageLikeButton _4jy4 _517h" 
  value="1">
  <i class="_3-8_ img sp_m5zUGIMREvf sx_07e95b">Like
  </button>
  <button id="u_jsonp_2_u" 
  class="_42ft _4jy0 PageLikeButton _4jy4 _517h" 
  type="submit" data-ownerid="u_jsonp_2_t" data-profileid="191406374208361" value="1">
  <button id="u_jsonp_3_u" 
  class="_42ft _4jy0 PageLikeButton _4jy4 _517h" type="submit" data-ownerid="u_jsonp_3_t" data-profileid="156638401186935" value="1">
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
    case 6://Instagram Likes
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
        if(url.indexOf("twitter_tweets") == -1)
          window.open("http://addmefast.com/free_points/twitter_tweets", "_self");
        else
          document.getElementsByClassName("btn3")[1].click();
      }
      else{
        document.getElementsByClassName("button selected submit")[0].click();
        setTimeout(closeWindow,2500);
      }
    break;
    case 9://Twitter Retweets
      if(url.indexOf("addmefast") != -1){
        if(url.indexOf("twitter_retweets") == -1)
          window.open("http://addmefast.com/free_points/twitter_retweets", "_self");
        else
          document.getElementsByClassName("btn3")[1].click();
      }
      else{
        document.getElementsByClassName("button submit selected")[0].click();
        setTimeout(closeWindow,2500);
      }
    break;
    case 10://Twitter Favorites
      if(url.indexOf("addmefast") != -1){
        if(url.indexOf("twitter_favorites") == -1)
          window.open("http://addmefast.com/free_points/twitter_favorites", "_self");
        else
          document.getElementsByClassName("btn3")[1].click();
      }
      else{
        document.getElementsByClassName("button submit selected")[0].click();
        setTimeout(closeWindow,2500);
      }
    break;
    case 11://YouTube Subscribe
    case 12://YouTube Likes
    case 13://YouTube Favorites
    case 14://YouTube Views
    case 15://Google Circles
    case 16://Google Share
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
    case 19://Vine Likes
    case 20://Vine Revines
    case 21://Vkontakte Pages
      if(url.indexOf("addmefast") != -1){
        if(url.indexOf("vkontakte_pages") == -1)
          window.open("http://addmefast.com/free_points/vkontakte_pages", "_self");
        else
          document.getElementsByClassName("btn3")[1].click();
      }
      else{
        document.getElementsByClassName("subscribe_button")[0].click();
        setTimeout(closeWindow,2500);
      }
    break;
    case 22://Vkontakte Groups
      if(url.indexOf("addmefast") != -1){
        if(url.indexOf("vkontakte_groups") == -1)
          window.open("http://addmefast.com/free_points/vkontakte_groups", "_self");
        else
          document.getElementsByClassName("btn3")[1].click();
      }
      else{ 
        document.getElementsByClassName("button_blue button_wide")[0].getElementsByTagName("button")[0].click();
        setTimeout(closeWindow,2500);
      }
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
        if(url.indexOf("pinterest_like") == -1)
          window.open("http://addmefast.com/free_points/pinterest_like", "_self");
        else
          document.getElementsByClassName("btn3")[1].click();
      }
      else{
        document.getElementsByClassName("LikeButton rounded PinLikeButton Button like leftRounded pinActionBarButton Module hasText medium btn")[0].click();
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
        if(url.indexOf("soundcloud_views") == -1)
          window.open("http://addmefast.com/free_points/soundcloud_views", "_self");
        else
          document.getElementsByClassName("btn3")[1].click();
      }
      else
        setTimeout(closeWindow,30000);
    break;
    case 30://StumbleUpon
      if(url.indexOf("addmefast") != -1){
        if(url.indexOf("stumbleupon_followers") == -1)
          window.open("http://addmefast.com/free_points/stumbleupon_followers", "_self");
        else
          document.getElementsByClassName("btn3")[1].click();
      }
      else{
        document.getElementsByClassName("s-follow")[0].click();
        setTimeout(closeWindow,2500);
      }
    break;
  }
//}

function closeWindow() {
  window.open('','_parent','');
  window.close();
}
