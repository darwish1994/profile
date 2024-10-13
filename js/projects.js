$("#project_list").append("jkdfhgjfdhjgkhdfkjk");
console.log("sdafsdfsdfdsa");
fetch("data/data.json")
  .then((response) => response.json())
  .then((data) => {
    let c =
      ' <div class="col-6">' +
      ' <div class="row">' +
      ' <img src="' +data["logo"] +'" alt="app logo" class="col-2"  />' +
      ' <h2> <a href="' + data["app_link"] +'">' +  data["title"] +"</a></h3>"+" </div>" + "<p>" + data["details"] + " </p>" + "</div>";

    $("#project_list").append(c);
 
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });
