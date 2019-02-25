

function loadJSON(callback) {   

  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
  xobj.open('GET', "./fakepeople.json", true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
          callback(xobj.responseText);
        }
  };
  xobj.send(null);  
}


function init() {
  loadJSON(function(response) {
   // Parse JSON string into object
     actual_JSON = JSON.parse(response);     
  });

  var local_data = actual_JSON;
  
  var greenNumber=0;
  for (var i = 0; i < local_data.length; i++) {
      if (local_data[i].eyeColor === "green"){
         greenNumber++;
      }
  }
  return greenNumber;
 }

 var actual_JSON;
 var numberOfgreen = document.getElementById("green-people");
 numberOfgreen.innerHTML = init(); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /*for (var i = 0; i < local_data.length; i++) {
    if (local_data[i].eyeColor === "green"){
        var row_data = row_data + '<tr>' +
    ' <td>' + local_data[i].name.first +'</td>' +
    ' <td>' + local_data[i].eyeColor + '</td>' +
    ' <td>' + local_data[i].age  +
    '</tr>';
    }
}
 var table_body_element = document.createElement('tbody');
    table_body_element.innerHTML = row_data;
    document.getElementById('my_table').appendChild(table_body_element);*/