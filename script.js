function addTask() {
  let input = document.getElementById("task");
  let task = input.value.trim(); 
  let error = document.getElementById("error");

  if (task === "") {
    error.innerText = "Please enter a task";
    return;
  }

  error.innerText = "";

  let li = document.createElement("li");
  let span = document.createElement("span");

  span.innerText = task;

  span.addEventListener("click", () => {
    span.classList.add("done"); 
  });

  let btn = document.createElement("button");
  btn.innerText = "X";

  btn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(btn);

  document.getElementById("list").appendChild(li);
  input.value = "";
}
