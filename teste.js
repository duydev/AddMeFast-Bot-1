container = document.getElementsByClassName("add_sites")[0].getElementsByTagName("a");
for(var i = 0; i < 31; i++){
  var cb = document.createElement('input');
  cb.type = "checkbox";
  cb.id = i;
  container[i+4].appendChild(cb);
}
