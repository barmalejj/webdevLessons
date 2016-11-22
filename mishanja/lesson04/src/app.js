var container = document.getElementById('dynamic');


function loadJN(path, success, error)
{
    var httreq = new XMLHttpRequest();
    httreq.onreadystatechange = function()
    {
        if (httreq.readyState === XMLHttpRequest.DONE) {
            if (httreq.status === 200) {
                if (success)
                    success(JSON.parse(httreq.responseText));
                console.log(success);
                } else {
                if (error)
                    error("Status error");
            }
        }
    };
    if (poo) {
        poo(console.log("poo poo"));
    } else {console.log("doo doo")}
    httreq.open("GET", path, true);
    httreq.send();
}

loadJN('../data/data.json', function(data) {container.innerHTML = data.message ; }, function(data1) {console.error(data1); } );