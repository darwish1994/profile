$("#project_list").append( "jkdfhgjfdhjgkhdfkjk");
console.log("sdafsdfsdfdsa");
fetch("data/data.json")
  .then((response) => response.json())
  .then((data) => {
    $("#project_list").append(   ' <div class="col-6">');
    $("#project_list").append(   ' <div class="row">');
    $("#project_list").append(   ' <img src="'+data["logo"]+'" alt="app logo" class="col-2"  />');
    $("#project_list").append(   ' <h2> <a href="'+data["app_link"]+'">'+data["title"]+'</a></h3>');
    $("#project_list").append(   ' </div>');

    $("#project_list").append(   '<p>'+data["details"]+' </p>');

    $("#project_list").append(   ' </div">');
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });
