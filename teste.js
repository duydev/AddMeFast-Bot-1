container = document.getElementsByClassName("add_site_item_sub");

for(var i = 0; i < 31; i++){
  var cb = document.createElement('input');
  cb.type = "checkbox";
  cb.id = i;
  container[i].appendChild(cb);
}
