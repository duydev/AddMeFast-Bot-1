console.log("v2");

container = document.getElementsByClassName("content")[0];
//var div = document.createElement('div');
//div.align = "rigth";
//container.appendChild(div);

for(var i = 0; i < 1; i++){
  var cb = document.createElement('input');
  cb.type = "checkbox";
  cb.id = i;
  container.appendChild(cb);
}
