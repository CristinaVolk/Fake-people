

  $(document).ready(function() {
    $('a').click(function(event) {
      event.preventDefault();
      $(this).hide("slow");
    });
  });

  $.getJSON( '/public/js/fakepeople.json', function( local_data ) {
    console.log( "JSON Data received, name is " + local_data[0].name.first);


    
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
    var closestPerson=document.getElementById("closest-person");
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
    }
    var row_data =' '+
    '<tr>' + 
        '<td> Firstname : </td>'+
        '<td>' + person.name.first + '</td>'+
    '</tr>'+'<br>'+
    '<tr>'+
            '<td> Lastname : </td>'+ 
            '<td>' +person.name.last + '</td>' +
    '</tr>'+'<br>'+
    '<tr>'+
            '<td> Age : </td>'+ 
            '<td>' +person.age + '</td>' +
    '</tr>'+'<br>'+
    '<tr>'+
            '<td> eyeColor : </td>'+ 
            '<td>' +person.eyeColor + '</td>' +
    '</tr>'+'<br>'+
    '<tr>'+
            '<td> Balance : </td>'+ 
            '<td>' +person.balance + '</td>' +
    '</tr>'+'<br>'+
    '<tr>'+
            '<td> Company : </td>'+ 
            '<td>' +person.company + '</td>' +
    '</tr>'+'<br>'+
    '<tr>'+
            '<td> Email : </td>'+ 
            '<td>' +person.email + '</td>' +
    '</tr>'+'<br>'+  
    '<tr>'+
            '<td> Phone : </td>'+ 
            '<td>' +person.phone + '</td>' +
    '</tr>'+'<br>'+ 
    '<tr>'+
            '<td> Address : </td>'+ 
            '<td>' +person.address + '</td>' +
    '</tr>'+'<br>'+   
    '<tr>'+
            '<td> Registered : </td>'+ 
            '<td>' +person.registered + '</td>' +
    '</tr>'+'<br>'; 
    
    closestPerson.innerHTML = row_data;


    var commonSurnames = document.getElementById("common-surnames");
    var temp=[];
    local_data.forEach(person => {
        var match=0;
        for (var i = 0; i < local_data.length; i++){
             if ( person.name.last === local_data[i].name.last){
                 match++;
             }
        }
        
        temp.push({ "person":person,
                    "match":match    });
    });

    temp.sort(function(a,b){
        return b.match-a.match;
    })

    var surnames =[];
    for (var i = 0; i < 10; i++){
    surnames.push(' '+temp[i].person.name.last+' : '+ temp[i].match);
    }
    commonSurnames.innerHTML = surnames;


    var blueEyesPeople = document.getElementById("blue-eyes");
    var blueEyeArray = [];
    for (var i = 0; i < local_data.length; i++){
        if(local_data[i].eyeColor==="blue"){
            blueEyeArray.push(local_data[i].age);
        }
    }
    
    var total = 0;
    for(var i = 0; i < blueEyeArray.length; i++) {
        total += blueEyeArray[i];
    }
    var avg = total / blueEyeArray.length;
    blueEyesPeople.innerHTML=Math.round(avg);
  


    var oldRich = document.getElementById("rich-old");
    var youngRich = document.getElementById("rich-young");
    var middle_Balance = document.getElementById("middle-balance");
    var maxBalance=local_data[0].balance;
    var minBalance=local_data[0].balance;;
    //find max and min balance
    for (var i = 1; i < local_data.length; i++){
      if(local_data[i].balance > maxBalance){
          maxBalance = local_data[i].balance;          
      }     
      if(local_data[i].balance < minBalance){
        minBalance = local_data[i].balance;          
    }  
  }

 
var middleBalance = (parseFloat(maxBalance.replace(/,/g,'')) + parseFloat(minBalance.replace(/,/g,'')))/2;

$("[id|=middle-balance]").text(Math.round(middleBalance));

 //find max and min age
 var maxAge=local_data[0].age;
 var minAge=local_data[0].age;
 for (var i = 1; i < local_data.length; i++){
  if(local_data[i].age > maxAge){
      maxAge = local_data[i].age;          
  }     
  if(local_data[i].age < minAge){
    minAge = local_data[i].age;          
  }  
}

var middleAge = (maxAge+minAge)/2;
var countRichOld=0;
var countRichYoung=0;
local_data.forEach(person => {
  if (parseFloat(person.balance.replace(/,/g,'')) > middleBalance && person.age > middleAge){
    countRichOld++;
    
  }
  if (parseFloat(person.balance.replace(/,/g,'')) > middleBalance && person.age < middleAge){
    countRichYoung++;
  }
})

console.log(countRichYoung);

oldRich.innerHTML = Math.round((countRichOld*100)/local_data.length)+' %';
youngRich.innerHTML = Math.round((countRichYoung*100)/local_data.length)+' %';
});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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