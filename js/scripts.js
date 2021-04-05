// -----Utility Logic-----
5
// -----Business Logic-----
function TodoList() {
  this.list = {};
}
// -----User Interface Logic-----
$(document).ready(function () {
  $("form#todoForm").submit(function (event) {
    let item = $("#todoItem").val();
    $("<li>").html(item).appendTo("#listItem")
    event.preventDefault();
  })
})
