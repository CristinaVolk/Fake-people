import * as fakepeople  from './fakepeople.json';

console.log(fakepeople[0].age);
var local_data = fakepeople;
var numberOfgreen = document.getElementById("green-people");
var greenNumber=0;
for (var i = 0; i < local_data.length; i++) {
    if (local_data[i].eyeColor === "green"){
       greenNumber++;
    }
}
numberOfgreen.innerHTML = greenNumber;  

//Longitude of Eiffel Tower: 2.294481
//Latitude of Eiffel Tower: 48.858370
var firstname=document.getElementById("firstname");
var person=null;
var towerLat = 48.858370;
var towerLon = 2.294481;
var minDifferenceLat =Math.abs(local_data[0].latitude - towerLat);
var minDifferenceLon = Math.abs(local_data[0].longitude - towerLon);

for (var i = 0; i < local_data.length; i++) {
  diffLat = Math.abs(local_data[i].latitude - towerLat);
  diffLon = Math.abs(local_data[i].longitude -towerLon);
  if (diffLat<minDifferenceLat && diffLon<minDifferenceLon ){
    person = local_data[i];
  }        
};
firstname.innerHTML = person.name.first;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /*for (var i = 0; i < local_data.length; i++) {
    if (local_data[i].eyeColor === "green"){
        var row_data = row_data + '<tr>' +
    ' <td>' + local_data[i].name.first +'</td>' +
    ' <td>' + local_data[i].eyeColor + '</td>' +
    ' <td>' + local_data[i].age  +
    '</tr>';
    }
}
// var table_body_element = document.createElement('tbody');
   // table_body_element.innerHTML = row_data;
   // document.getElementById('my_table').appendChild(table_body_element);*/