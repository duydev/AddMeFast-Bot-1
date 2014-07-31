console.log("v1");

container = document.getElementsByClassName("add_site_item_sub");
//var div = document.createElement('div');
//div.align = "rigth";
//container.appendChild(div);

for(var i = 0; i < 1; i++){
  var cb = document.createElement('input');
  cb.type = "checkbox";
  cb.id = i;
  container[i].appendChild(cb);
}
