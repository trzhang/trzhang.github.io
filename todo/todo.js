$(document).ready(function() {
  var getTodo = function(url) {
    $.get(url, callback, "json");
  }

  var callback = function(todoList) {
    console.log(todoList);
    $("#done").empty();
    $("#todo").empty();
    for (var i = 0; i < todoList.items.length; i++) {
      var item = document.createElement("div");
      item.innerHTML = todoList.items[i].description;
      if (todoList.items[i].done) {
        $("#done").append(item);
      } else {
        $("#todo").append(item);
      }
    }
  }

  $("button").click(function() {
    getTodo($("#url").val());
  });

  $("#url").keyup(function(event) {
    if (event.keyCode == 13) {
      getTodo($(this).val());
    }
  });
});
