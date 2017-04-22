/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$.ajax({
    url: "https://data.nasa.gov/resource/9g7e-7hzz.json?url_link_description=FOO",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "dheA6ZELP4ZW4SJimzWHiBxcx"
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});


d3.select("body").append("div")
.style("border", "1px black solid")
.html("Estados Unidos");
