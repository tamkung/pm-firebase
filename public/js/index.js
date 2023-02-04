/*
db.ref().on("value", (snapshot) => {
    var result = snapshot.val();
    var trdata = "";
    for (key in result) {
        rec = result[key];
        trdata += "<tr>";
        trdata += "<td>" + rec.pm1 + "</td>";
        trdata += "<td>" + rec.pm2_5 + "</td>";
        trdata += "<td>" + rec.pm10 + "</td>";
        trdata += "</tr>";
        
        // document.getElementById('pm1').innerHTML = rec.sec;
        // document.getElementById('pm25').innerHTML = rec.pm2_5;
        // document.getElementById('pm10').innerHTML = rec.pm10;
        
        // document.getElementById('txt1').innerHTML = rec.pm1;
        // document.getElementById('txt2').innerHTML = rec.min;
        // document.getElementById('txt3').innerHTML = rec.sec;

    }
    document.getElementById('tdata').innerHTML = trdata;
    
    
    
    

}, function (err) {
    alert(err.message);
});

var hour,min,sec;

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
 document.getElementById("time").innerHTML = d.toLocaleTimeString();
 hour = d.getHours();
 min = d.getMinutes();
 sec = d.getSeconds();

// changeTemp(sec);

 db.ref('/Time').update({"hour": hour, "min": min, "sec": sec})
    .then(function() {
    })
    .catch(function(err) {
        alert(err.message);
    });
}
    
function insert() {


}
*/

