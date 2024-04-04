const localStorageKey = "todo-list-julianna";
function newTask() {
  let input = document.getElementById("input-new-task");

  //validation
  if (!input.value) {
    alert("Tu não escreveu nada cabeção ");
  } else {
    //increment to localStorage with your todo
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");

    values.push({
      name: input.value,
    });
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    showValues();
  }
}

function showValues() {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let list = document.getElementById("to-do-list");
  list.innerHTML = "";
  for (let i = 0; i < values.length; i++) {
    list.innerHTML += `<li>${values[i]["name"]}<button onclick='removeItem(${i})'>Ok</button></li>`;
  }
}

function removeItem(data) {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let index = values.findIndex((x) => x.name == data);
  values.splice(index, 1);
  localStorage.setItem(localStorageKey, JSON.stringify(values));
}
showValues();
