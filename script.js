function addTask() {

  let input = document.getElementById("task");
  let task = input.value;

  if (task === "") {
    return;
  }

  let li = document.createElement("li");
  let span = document.createElement("span");

  span.addEventListener("click", () => {
    span.classList.add("done");
   });

  span.innerText = task;

  let btn = document.createElement("button");
  btn.innerText = "X";

  btn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(btn);

  let ui = document.getElementById("list")
  ui.appendChild(li);
  input.value = "";
}

