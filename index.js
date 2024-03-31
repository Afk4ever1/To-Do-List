function addTask() {
  if ($("#input_box").val() === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = $("#input_box").val();
    $("#list_container").append(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.append(span);
  }
  $("#input_box").val("");
  saveData();
}

$("#list_container").on("click", "li", function (event) {
  if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveData();
  } else {
    event.target.classList.toggle("clicked");
    saveData();
  }
});
$(document).keypress(function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
function saveData() {
  localStorage.setItem("data", $("#list_container").html());
}
function displayData() {
  $("#list_container").html(localStorage.getItem("data"));
}
displayData();
function RemoveData() {
  $("#list_container").html(localStorage.removeItem("data"));
  displayData();
}

$("svg").on("click", function () {
  RemoveData();
});
