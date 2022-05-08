document.querySelector("#myForm").addEventListener("submit", addItem);
var arr = JSON.parse(localStorage.getItem("todoList")) || [];
document.querySelector("#taskcount").textContent = arr.length;
displayTable(arr);

function addItem() {
  event.preventDefault();
  var task = document.querySelector("#task").value;
  // var status = document.querySelector("#task").value;
  var date = document.querySelector("#date").value;

  function object(task, date, status) {
    // // let form = document.getElementById(myForm);
    // var task = form.task.value;
    // event.preventDefault();
    this.task = task;
    this.status = status;
    this.date = date;
  }
  let myobject = new object(task, date, status);
  arr.push(myobject);

  localStorage.setItem("todoList", JSON.stringify(arr));
  document.querySelector("#taskcount").textContent = arr.length;
  displayTable(arr);
}

//console.log(arr);

function displayTable(arr) {
  document.querySelector("tbody").innerHTML = "";
  //var count = 1;
  arr.map(function (elem, index) {
    var row = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.textContent = elem.task;
    var td2 = document.createElement("td");
    td2.textContent = elem.date;
    var td3 = document.createElement("td");
    td3.setAttribute("id", "toggle");

    td3.textContent = "False";

    td3.addEventListener("click", function () {
      toggle(index);
    });

    var td4 = document.createElement("td");
    td3.setAttribute("id", "remark");

    td4.textContent = "Done";

    td4.addEventListener("click", function () {
      remark(index);
    });

    var td5 = document.createElement("td");
    td5.textContent = "remove";

    td5.addEventListener("click", function () {
      deleteTask(index);
    });

    row.append(td1, td2, td3, td4, td5);

    document.querySelector("tbody").append(row);
  });
}

// function toggle(index) {
//   //arr.splice(index, 1);
//   localStorage.setItem("todoList", JSON.stringify(arr));
//   td3.textContent = "remove";
//   display(arr);
// }

function deleteTask(index) {
  arr.splice(index, 1);
  localStorage.setItem("todoList", JSON.stringify(arr));
  event.target.parentNode.remove();
  document.querySelector("#taskcount").textContent = arr.length;
  display(arr);
}

var clicked = false;
function toggle(index) {
  if (!clicked) {
    clicked = true;
    arr.splice(index);
    document.getElementById("toggle");
    event.target.textContent = "False";
    localStorage.setItem("todoList", JSON.stringify(arr));
    display(arr);
    document.querySelector("#taskcount").textContent = arr.length;
  } else {
    clicked = false;
    arr.splice(index);
    document.getElementById("toggle");
    event.target.textContent = "True";
    localStorage.setItem("todoList", JSON.stringify(arr));
    display(arr);
    document.querySelector("#taskcount").textContent = arr.length;
  }
}

var clicked = false;
function remark(index) {
  if (!clicked) {
    clicked = true;
    arr.splice(index);
    document.getElementById("remark");
    event.target.textContent = "Done";
    event.target.parentNode.style.background = "green";
    localStorage.setItem("todoList", JSON.stringify(arr));
    display(arr);
    document.querySelector("#taskcount").textContent = arr.length;
  } else {
    clicked = false;
    arr.splice(index);
    document.getElementById("remark");
    event.target.textContent = "Pending";
    event.target.parentNode.style.background = "red";
    localStorage.setItem("todoList", JSON.stringify(arr));
    display(arr);
    document.querySelector("#taskcount").textContent = arr.length;
  }
}
