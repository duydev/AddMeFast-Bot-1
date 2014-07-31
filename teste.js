container = document.getElementsByClassName("add_site_item_sub");
window.alert(container.length);
for(var i = 0; i < 31; i++){
  var cb = document.createElement('input');
  cb.type = "checkbox";
  cb.id = i;
  container[i+4].appendChild(cb);
}
