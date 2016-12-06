var container = document.getElementById('dynamic');


function loadJSON(path, success, error)
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
    httreq.open("GET", path, true);
    httreq.send();
}

loadJSON('data.json', function(data) {
    for (var i = 0; i < 3; i++)
    {
        container.innerHTML += "<tr>";
        container.innerHTML += "<tr>"+"<td>"+data[i].name+"</td>"+"<td>"+data[i].message+"</td>"+"</tr>";
        container.innerHTML += "</tr>";
    }
}, function(data1) {console.error(data1); } );

