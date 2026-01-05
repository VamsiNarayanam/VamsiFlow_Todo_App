function addTask() {

  let input = document.getElementById("task");
  let task = input.value;

  if (task === "") {
    return;
  }

  let li = document.createElement("li");
  let span = document.createElement("span");

  span.innerText = task;


  span.addEventListener("click", function () {
    span.classList.toggle("done");
  });

  let btn = document.createElement("button");
  btn.innerText = "x";

  btn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(btn);

  document.getElementById("list").appendChild(li);
  input.value = "";
}
function addTask() {

  let input = document.getElementById("task");
  let task = input.value;

  if (task === "") {
    return;
  }

  let li = document.createElement("li");
  let span = document.createElement("span");

  span.innerText = task;

  span.addEventListener("click", function () {
    span.classList.toggle("done");
  });

  let btn = document.createElement("button");
  btn.innerText = "x";

  btn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(btn);

  document.getElementById("list").appendChild(li);
  input.value = "";
}
