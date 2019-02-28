  $(document).ready(function() {
    $('a').click(function(event) {
      event.preventDefault();
      $(this).hide("slow");
    });
  });

  $.getJSON( '/public/js/fakepeople.json', function( local_data ) {
    console.log( "JSON Data received, name is " + local_data[0].name.first);


    
    let numberOfgreen = document.getElementById("green-people");
    let greenNumber=0;
    for (let i = 0; i < local_data.length; i++) {
        if (local_data[i].eyeColor === "green"){
           greenNumber++;
        }
    }
    numberOfgreen.innerHTML = greenNumber;  
      
    
    //Longitude of Eiffel Tower: 2.294481
    //Latitude of Eiffel Tower: 48.858370
    let closestPerson=document.getElementById("closest-person");
    let person=null;
    let towerLat = 48.858370;
    let towerLon = 2.294481;
    let minDifferenceLat =Math.abs(local_data[0].latitude - towerLat);
    let minDifferenceLon = Math.abs(local_data[0].longitude - towerLon);
    
    for (let i = 0; i < local_data.length; i++) {
      diffLat = Math.abs(local_data[i].latitude - towerLat);
      diffLon = Math.abs(local_data[i].longitude -towerLon);
      if (diffLat<minDifferenceLat && diffLon<minDifferenceLon ){
        person = local_data[i];
      } 
    }
    let row_data =``+
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


    let temp=[];
    local_data.map(person => {
        let match=0;
        for (let i = 0; i < local_data.length; i++){
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
    temp.length=10;
    
    function getCommonSurnames(item){  
        let fullname = ` `+[item.person.name.last,item.match].join(": ");
        return fullname;   
    } 
    document.getElementById("common-surnames").innerHTML = temp.map(getCommonSurnames)+``;
    


    let blueEyesPeople = document.getElementById("blue-eyes");
    let blueEyeArray = [];
    for (let i = 0; i < local_data.length; i++){
        if(local_data[i].eyeColor==="blue"){
            blueEyeArray.push(local_data[i].age);
        }
    }
    
    let total = 0;
    for(let i = 0; i < blueEyeArray.length; i++) {
        total += blueEyeArray[i];
    }
    let avg = total / blueEyeArray.length;
    blueEyesPeople.innerHTML=Math.round(avg);
  


    let oldRich = document.getElementById("rich-old");
    let youngRich = document.getElementById("rich-young");
    let maxBalance=local_data[0].balance;
    let minBalance=local_data[0].balance;;
    //find max and min balance
    for (let i = 1; i < local_data.length; i++){
      if(local_data[i].balance > maxBalance){
          maxBalance = local_data[i].balance;          
      }     
      if(local_data[i].balance < minBalance){
        minBalance = local_data[i].balance;          
    }  
  }

 
let middleBalance = (parseFloat(maxBalance.replace(/,/g,'')) + parseFloat(minBalance.replace(/,/g,'')))/2;

$("[id|=middle-balance]").text(Math.round(middleBalance));

 //find max and min age
 let maxAge=local_data[0].age;
 let minAge=local_data[0].age;
 for (let i = 1; i < local_data.length; i++){
  if(local_data[i].age > maxAge){
      maxAge = local_data[i].age;          
  }     
  if(local_data[i].age < minAge){
    minAge = local_data[i].age;          
  }  
}

let middleAge = (maxAge+minAge)/2;
let countRichOld=0;
let countRichYoung=0;
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
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /*for (let i = 0; i < local_data.length; i++) {
    if (local_data[i].eyeColor === "green"){
        let row_data = row_data + '<tr>' +
    ' <td>' + local_data[i].name.first +'</td>' +
    ' <td>' + local_data[i].eyeColor + '</td>' +
    ' <td>' + local_data[i].age  +
    '</tr>';
    }
}
 let table_body_element = document.createElement('tbody');
    table_body_element.innerHTML = row_data;
    document.getElementById('my_table').appendChild(table_body_element);*/