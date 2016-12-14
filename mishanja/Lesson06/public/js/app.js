$(document).ready(() => {

    $.getJSON( "/data", function( json ) {

     //   console.log( "JSON Data: " + json[0].name );

        const container = $("#dynamic");
        let tbody = '';
        json.forEach(person => {
            const {name, message} = person;
            tbody += `<tr>
                  <td>${name}</td>
                  <td>${message}</td>
                </tr>`;
        })
        container.html(tbody);
    });

});