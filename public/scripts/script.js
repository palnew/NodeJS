function loadDoc() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200) {
      let code = "";
      var resp = JSON.parse(xhttp.responseText);

      for (let x in resp) {
        code +=
          '<div class="media border p-3" style="background-color: gray;">';
        code +=
          ' <img src="images/' +
          resp[x].filename +
          '" alt="Dummy" class="mr-3 mt-3 rounded-circle" style="width:60px;">';
        code += '<div class="media-body">';
        code += "<h4>" + resp[x].modulename + "</h4>";
        code += "<p>" + resp[x].description + "</p></div></div>";
      }
      document.getElementById("ccontent").innerHTML = code;
    }
  };
  console.log("abt 2 open");
  xhttp.open("GET", "dbops/modules");
  console.log("opened");
  xhttp.send();
  console.log("sent");
}

// $(document).ready(function() {
//   $("#btn").click(function() {
//     $.get("dbops/modules", function(data, status) {
//       let code = "";
//       for (let x in data) {
//         code +=
//           '<div class="media border p-3" style="background-color: gray;">';
//         code +=
//           ' <img src="images/' +
//           data[x].filename +
//           '" alt="Dummy" class="mr-3 mt-3 rounded-circle" style="width:60px;">';
//         code += '<div class="media-body">';
//         code += "<h4>" + data[x].modulename + "</h4>";
//         code += "<p>" + data[x].description + "</p></div></div>";
//       }
//       $("#mcontent").html(code);
//     });
//   });
// })
