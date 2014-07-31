console.log("v2");

container = document.getElementsByClassName("left")[0];
var div = document.createElement('div');
container.appendChild(div);

for(var i = 0; i < 31; i++){
  var cb = document.createElement('input');
  cb.type = "checkbox";
  cb.id = i;
  div.appendChild(cb);
}
