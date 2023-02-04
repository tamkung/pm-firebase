setInterval(myTimer, 1000);
    function myTimer() {
        const d = new Date();
        document.getElementById("txt1").innerHTML = d.toLocaleTimeString();
        //var name = document.getElementById('txt1').value;
      }
    
function insert() {
    
    //

db.ref('/TABLE').push({"hour": name})
    .then(function() {
        alert("Add OK");
        window.location = "/";
    })
    .catch(function(err) {
        alert(err.message);
    });
}