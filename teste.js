container = document.getElementByClassName("add_sites").getElementsByTagName("a");
for(var i = 0; i < 31; i++){
  var cb = document.createElement('input');
  cb.type = "checkbox";
  cb.id = i;
}
