const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

//db.ref(TABLE + "/" + id).once()
db.ref(TABLE).child(id).once('value')
.then((snapshot) =>{
    document.getElementById('id').value = id;
    var result = snapshot.val();
    document.getElementById('name').value = result.name;
    document.getElementById('tel').value = result.tel;
    if(result.sect == "CED") 
        document.getElementsByName('sect')[0].checked = true;
    if(result.sect == "TCT") 
        document.getElementsByName('sect')[1].checked = true;
})
.catch((err) => {
    alert(err.message);
});
function edit() {
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var tel = document.getElementById('tel').value;
    var sect;
    var rdSect = document.getElementsByName('sect');
    for(i=0; i<rdSect.length; i++){
        if(rdSect[i].checked) sect = rdSect[i].value;
    }
    db.ref(TABLE).child(id).update({"name": name, "sect": sect, "tel": tel})
    .then(function() {
        alert("Edit OK");
        window.location = "/";
    })
    .catch(function(err) {
        alert(err.message);
    });
}