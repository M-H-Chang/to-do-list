// -----Utility Logic-----

// -----Business Logic-----
function TodoList() {
  this.list = {};
  this.currentId = 0;
}

TodoList.prototype.addTodoItem = function (item) {
  item.Id = this.assignId();
  this.list[item.Id] = item;
}

TodoList.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

function TodoItem(item) {
  this.item = item;
}

TodoItem.prototype = function () {
  return this.item;
}
// -----User Interface Logic-----
$(document).ready(function () {
  $("form#todoForm").submit(function (event) {
    let item = $("#todoItem").val();
    $("<li>").html(item).appendTo("#listItem")
    event.preventDefault();
  })
})
