$(document).ready(function() {
    $(".devour-list").on("click", function(event) {
      event.preventDefault();
      var burger_id = $(this).attr("data-id") 
      console.log(burger_id);
      $.ajax({
        method: "PUT",
        url: "/burgers/" + burger_id
      }).then(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
      });
    });
  });
  
  
  
  
  
  